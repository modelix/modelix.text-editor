package org.modelix.editor.ssr.server

import io.github.oshai.kotlinlogging.KotlinLogging
import io.ktor.server.routing.Route
import io.ktor.server.websocket.DefaultWebSocketServerSession
import io.ktor.server.websocket.webSocket
import io.ktor.utils.io.CancellationException
import io.ktor.websocket.Frame
import io.ktor.websocket.readText
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancel
import kotlinx.coroutines.channels.BufferOverflow
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
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
import kotlin.collections.HashMap
import kotlin.collections.LinkedHashSet
import kotlin.collections.List
import kotlin.collections.MutableMap
import kotlin.collections.MutableSet
import kotlin.collections.filter
import kotlin.collections.forEach
import kotlin.collections.get
import kotlin.collections.getOrPut
import kotlin.collections.map
import kotlin.collections.mapNotNull
import kotlin.collections.minus
import kotlin.collections.remove
import kotlin.collections.set
import kotlin.collections.toList

private val LOG = KotlinLogging.logger { }

class ModelixSSRServer(private val nodeResolutionScope: INodeResolutionScope) {

    private val incrementalEngine = IncrementalEngine()
    val editorEngine: EditorEngine = EditorEngine(incrementalEngine)
    private val allSessions: MutableSet<WebsocketSession> = Collections.synchronizedSet(LinkedHashSet())
    private val lock = Any()
    private val coroutinesScope = CoroutineScope(Dispatchers.Default)
    private val editorUpdater = Validator(coroutinesScope) { updateAll() }
    private val dependencyListener: IDependencyListener = object : IDependencyListener {
        override fun parentGroupChanged(childGroup: IStateVariableGroup) {}
        override fun accessed(key: IStateVariableReference<*>) {}
        override fun modified(key: IStateVariableReference<*>) { editorUpdater.invalidate() }
    }

    fun install(route: Route) {
        route.installRoutes()
    }

    fun dispose() {
        DependencyTracking.removeListener(dependencyListener)
        editorUpdater.stop()
        coroutinesScope.cancel("disposed")
    }

    private fun Route.installRoutes() {
        DependencyTracking.registerListener(dependencyListener)
        editorUpdater.start()

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
                    ws.outgoing.send(
                        Frame.Text(
                            MessageFromServer(
                                editorId = clientMessage?.editorId,
                                error = ex.stackTraceToString(),
                            ).toJson(),
                        ),
                    )
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

            private fun getEditor() = checkNotNull(editorComponent) { "Editor $editorId isn't initialized" }

            fun processMessage(msg: MessageFromClient) {
                msg.rootNodeReference?.let { rootNodeReferenceString ->
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
                val dom = editorComponent!!.getHtmlElement()!! as VirtualDom.Node
                val changedElements = HashMap<String, HTMLElementUpdateData>()
                var rootData: INodeUpdateData? = toUpdateData(dom, changedElements)
                dom.resetModificationMarker()
                if (rootData is ElementReference) rootData = changedElements[rootData.id]
                if (rootData != null) {
                    check(rootData is HTMLElementUpdateData)
                    if (rootData.id != editorId) {
                        changedElements.remove(rootData.id)
                        rootData = rootData.copy(id = editorId)
                        changedElements[editorId] = rootData
                    }
                }

                if (changedElements.isEmpty()) return

                ws.outgoing.trySend(
                    Frame.Text(
                        MessageFromServer(
                            editorId = editorId,
                            domUpdate = DomTreeUpdate(
                                elements = changedElements.values.toList(),
                            ),
                        ).toJson(),
                    ),
                )
            }

            fun toUpdateData(node: VirtualDom.Node, id2data: MutableMap<String, HTMLElementUpdateData>): INodeUpdateData {
                return when (node) {
                    is VirtualDom.Text -> TextNodeUpdateData(node.textContent ?: "")
                    is VirtualDom.Element -> {
                        val id = node.id?.takeIf { it.isNotEmpty() }?.let {
                            if (it.startsWith(commonElementPrefix)) it else commonElementPrefix + it
                        }
                        fun createData() = HTMLElementUpdateData(
                            id = id,
                            tagName = node.tagName,
                            attributes = node.getAttributes() - "id",
                            children = node.childNodes.toList().map { toUpdateData(it, id2data) },
                        )
                        if (id == null) {
                            createData()
                        } else {
                            if (node.wasModified()) {
                                id2data[id] = createData()
                            } else {
                                if (node.wasAnyDescendantModified()) {
                                    node.childNodes.forEach { toUpdateData(it, id2data) }
                                }
                            }
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

/**
 * When calling invalidate(), the `validator` function is executed, but avoid executing it too often when there are
 * many invalidate() calls.
 */
class Validator(val coroutineScope: CoroutineScope, private val validator: suspend () -> Unit) {
    private val channel = Channel<Unit>(capacity = 1, onBufferOverflow = BufferOverflow.DROP_LATEST)
    private var validationJob: Job? = null
    fun invalidate() { channel.trySend(Unit) }
    fun start() {
        check(validationJob?.isActive != true) { "Already started" }
        validationJob = coroutineScope.launch {
            for (x in channel) {
                try {
                    validator()
                } catch (ex: CancellationException) {
                    throw ex
                } catch (ex: Throwable) {
                    LOG.error(ex) { "Validation failed" }
                }
            }
        }
    }
    fun stop() {
        validationJob?.cancel("stopped")
        validationJob = null
    }

    companion object {
        private val LOG = KotlinLogging.logger { }
    }
}
