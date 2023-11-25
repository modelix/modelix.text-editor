package org.modelix.editor.ssr.server

import io.github.oshai.kotlinlogging.KotlinLogging
import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*
import org.modelix.editor.Bounds
import org.modelix.editor.EditorComponent
import org.modelix.editor.EditorEngine
import org.modelix.editor.IVirtualDom
import org.modelix.editor.IVirtualDomUI
import org.modelix.editor.VirtualDom
import org.modelix.editor.contains
import org.modelix.editor.id
import org.modelix.editor.ssr.common.DomTreeUpdate
import org.modelix.editor.ssr.common.ElementReference
import org.modelix.editor.ssr.common.HTMLElementBoundsUpdate
import org.modelix.editor.ssr.common.HTMLElementUpdateData
import org.modelix.editor.ssr.common.INodeUpdateData
import org.modelix.editor.ssr.common.MessageFromClient
import org.modelix.editor.ssr.common.MessageFromServer
import org.modelix.editor.ssr.common.TextNodeUpdateData
import org.modelix.incremental.DependencyTracking
import org.modelix.incremental.IDependencyListener
import org.modelix.incremental.IStateVariableGroup
import org.modelix.incremental.IStateVariableReference
import org.modelix.incremental.IncrementalEngine
import org.modelix.kotlin.utils.runSynchronized
import org.modelix.model.api.INodeResolutionScope
import org.modelix.model.api.NodeReference
import org.modelix.model.api.resolveIn
import org.modelix.model.area.IArea
import java.util.Collections

private val LOG = KotlinLogging.logger {  }

class ModelixSSRServer(private val nodeResolutionScope: INodeResolutionScope) {

    private val incrementalEngine = IncrementalEngine()
    val editorEngine: EditorEngine = EditorEngine(incrementalEngine)
    private val allSessions: MutableSet<WebsocketSession> = Collections.synchronizedSet(LinkedHashSet())
    private val lock = Any()
    private val dependencyListener: IDependencyListener = object : IDependencyListener {
        override fun parentGroupChanged(childGroup: IStateVariableGroup) {}
        override fun accessed(key: IStateVariableReference<*>) {}
        override fun modified(key: IStateVariableReference<*>) { updateAll() }
    }

    fun install(route: Route) {
        route.installRoutes()
    }

    fun dispose() {
        DependencyTracking.removeListener(dependencyListener)
    }

    private fun Route.installRoutes() {
        DependencyTracking.registerListener(dependencyListener)

        webSocket("ws") {
            val session = WebsocketSession(this)
            try {
                allSessions.add(session)
                session.receiveMessages()
            } finally {
                allSessions.remove(session)
                session.dispose()
            }
        }
    }

    fun updateAll() {
        val sessions = runSynchronized(allSessions) { allSessions.toList() }
        runSynchronized(lock) {
            sessions.forEach {
                try {
                    it.updateAllEditors()
                } catch (ex: Exception) {
                    LOG.error(ex) { "Failed to send editor update" }
                }
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
                            val serializedMessage = wsMessage.readText()
                            LOG.debug { "Received message: $serializedMessage" }
                            val deserializedMessage = MessageFromClient.fromJson(serializedMessage)
                            clientMessage = deserializedMessage
                            runSynchronized(lock) {
                                // TODO maybe use a single threaded coroutines dispatcher for all UI code
                                processMessage(deserializedMessage)
                            }
                        }
                        else -> {}
                    }
                } catch (ex: Throwable) {
                    LOG.error(ex) { "Failed to process $wsMessage" }
                    ws.outgoing.send(Frame.Text(MessageFromServer(
                        editorId = clientMessage?.editorId,
                        error = ex.stackTraceToString()
                    ).toJson()))
                }

            }
        }

        fun processMessage(msg: MessageFromClient) {
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

        fun updateAllEditors() {
            editors.values.forEach { it.sendUpdate() }
        }

        private inner class EditorSession(val editorId: String) {
            private var editorComponent: EditorComponent? = null
            private val commonElementPrefix = editorId + "-"
            private var domStateOnClient: Map<String, HTMLElementUpdateData> = emptyMap()

            private fun getEditor() = checkNotNull(editorComponent) { "Editor $editorId isn't initialized" }

            fun processMessage(msg: MessageFromClient) {
                msg.rootNodeReference?.let {  rootNodeReferenceString ->
                    (nodeResolutionScope as IArea).executeRead {
                        val rootNode = checkNotNull(NodeReference(rootNodeReferenceString).resolveIn(nodeResolutionScope)) {
                            "Root node not found: $rootNodeReferenceString"
                        }
                        LOG.debug { "Root node $rootNodeReferenceString found: $rootNode" }
                        editorComponent = editorEngine.editNode(rootNode, VirtualDom(VDomUI(), commonElementPrefix))
                    }
                }
                msg.boundUpdates?.let { updates ->
                    (editorComponent!!.virtualDom.ui as VDomUI).bounds.putAll(updates)
                }
                msg.keyboardEvent?.let { event ->
                    getEditor().processKeyEvent(event)
                }
                msg.mouseEvent?.let { event ->
                    getEditor().processMouseEvent(event)
                }
                sendUpdate()
            }

            fun sendUpdate() {
                LOG.debug { "($editorId) sendUpdate" }
                editorComponent!!.update()
                val dom = editorComponent!!.getHtmlElement()!!
                LOG.debug { "($editorId) dom: $dom" }
                val latestDomState = HashMap<String, HTMLElementUpdateData>()
                var rootData = toUpdateData(dom, latestDomState)
                if (rootData is ElementReference) rootData = latestDomState[rootData.id]!!
                check(rootData is HTMLElementUpdateData)
                if (rootData.id != editorId) {
                    latestDomState.remove(rootData.id)
                    rootData = rootData.copy(id = editorId)
                    latestDomState[editorId] = rootData
                }

                val changesOnly = latestDomState.entries.asSequence()
                    .filter { domStateOnClient[it.key] != it.value }
                    .map { it.value }.toList()
                if (changesOnly.isEmpty()) return

                domStateOnClient = latestDomState

                ws.outgoing.trySend(Frame.Text(MessageFromServer(
                    editorId = editorId,
                    domUpdate = DomTreeUpdate(
                        elements = changesOnly
                    )
                ).toJson()))
            }

            fun toUpdateData(node: IVirtualDom.Node, id2data: MutableMap<String, HTMLElementUpdateData>): INodeUpdateData {
                return when (node) {
                    is IVirtualDom.Text -> TextNodeUpdateData(node.textContent ?: "")
                    is IVirtualDom.Element -> {
                        val id = node.id?.takeIf { it.isNotEmpty() }?.let {
                            if (it.startsWith(commonElementPrefix)) it else commonElementPrefix + it
                        }
                        val data = HTMLElementUpdateData(
                            id = id,
                            tagName = node.tagName,
                            attributes = node.getAttributes() - "id",
                            children = node.childNodes.toList().map { toUpdateData(it, id2data) }
                        )
                        if (id == null) {
                            data
                        } else {
                            id2data[id] = data
                            ElementReference(id)
                        }
                    }
                    else -> throw UnsupportedOperationException("Unsupported element type: $node")
                }
            }

            fun dispose() {
                editorComponent?.dispose()
                editorComponent = null
            }

            inner class VDomUI() : IVirtualDomUI {
                val bounds: MutableMap<String, HTMLElementBoundsUpdate> = HashMap()
                override fun getOuterBounds(element: IVirtualDom.Element): Bounds {
                    return bounds[element.id]?.outer ?: Bounds.ZERO
                }

                override fun getInnerBounds(element: IVirtualDom.Element): Bounds {
                    return bounds[element.id]?.let { it.inner ?: it.outer } ?: Bounds.ZERO
                }

                override fun getElementsAt(x: Double, y: Double): List<IVirtualDom.Element> {
                    // TODO performance
                    return bounds.filter { it.value.outer.contains(x, y) }
                        .mapNotNull { editorComponent!!.virtualDom.getElementById(it.key) }
                }
            }
        }
    }
}
