package org.modelix.editor.ssr.server

import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*
import org.modelix.editor.EditorComponent
import org.modelix.editor.EditorEngine
import org.modelix.editor.ssr.common.MessageFromClient
import org.modelix.editor.ssr.common.MessageFromServer
import org.modelix.incremental.IncrementalEngine
import org.modelix.model.api.INodeResolutionScope
import org.modelix.model.api.NodeReference
import org.modelix.model.api.resolveIn
import org.modelix.model.api.runSynchronized

class ModelixSSRServer(private val nodeResolutionScope: INodeResolutionScope) {

    private val incrementalEngine = IncrementalEngine()
    private val editorEngine: EditorEngine = EditorEngine(incrementalEngine)
    private val lock = Any()

    fun install(route: Route) {
        route.installRoutes()
    }

    private fun Route.installRoutes() {
        route("client") {

        }
        webSocket("ws") {
            val session = WebsocketSession(this)
            try {
                session.receiveMessages()
            } finally {
                session.dispose()
            }
        }
    }

    private inner class WebsocketSession(val ws: DefaultWebSocketServerSession) {
        private val editors = HashMap<String, EditorSession>()

        suspend fun receiveMessages() {
            for (wsMessage in ws.incoming) {
                var clientMessage: MessageFromClient? = null
                try {
                    when (wsMessage) {
                        is Frame.Text -> {
                            val deserializedMessage = MessageFromClient.fromJson(wsMessage.readText())
                            clientMessage = deserializedMessage
                            runSynchronized(lock) {
                                processMessage(deserializedMessage)
                            }
                        }
                        else -> {}
                    }
                } catch (ex: Throwable) {
                    ws.outgoing.send(Frame.Text(MessageFromServer(
                        editorId = clientMessage?.editorId,
                        error = ex.stackTraceToString()
                    ).toJson()))
                }

            }
        }

        suspend fun processMessage(msg: MessageFromClient) {
            msg.editorId?.let { editorId ->
                if (msg.dispose) {
                    editors.remove(editorId)?.dispose()
                } else {
                    val editor = editors.getOrPut(editorId) { EditorSession(editorId) }
                    editor.processMessage(msg)
                }
            }
        }

        fun dispose() {
            editors.values.forEach { it.dispose() }
            editors.clear()
        }

        private inner class EditorSession(val editorId: String) {
            private var editorComponent: EditorComponent? = null

            fun processMessage(msg: MessageFromClient) {
                msg.rootNodeReference?.let {  rootNodeReferenceString ->
                    val rootNode = checkNotNull(NodeReference(rootNodeReferenceString).resolveIn(nodeResolutionScope)) {
                        "Root node not found: $rootNodeReferenceString"
                    }
                    editorComponent = editorEngine.editNode(rootNode)
                }
                msg.keyboardEvent?.let { event ->
                    val editor = checkNotNull(editorComponent) { "Editor $editorId isn't initialized" }
                    editor.processKeyDown(event)
                }
            }

            fun dispose() {
                editorComponent?.dispose()
                editorComponent = null
            }
        }
    }
}