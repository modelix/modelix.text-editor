package org.modelix.editor.ssr.server

import io.github.oshai.kotlinlogging.KotlinLogging
import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.id
import org.modelix.editor.EditorComponent
import org.modelix.editor.EditorEngine
import org.modelix.editor.IProducesHtml
import org.modelix.editor.produceChild
import org.modelix.editor.ssr.common.DomTreeUpdate
import org.modelix.editor.ssr.common.ElementReference
import org.modelix.editor.ssr.common.HTMLElementUpdateData
import org.modelix.editor.ssr.common.INodeUpdateData
import org.modelix.editor.ssr.common.MessageFromClient
import org.modelix.editor.ssr.common.MessageFromServer
import org.modelix.editor.ssr.common.TextNodeUpdateData
import org.modelix.incremental.IncrementalEngine
import org.modelix.model.api.INodeResolutionScope
import org.modelix.model.api.NodeReference
import org.modelix.model.api.resolveIn
import org.modelix.model.api.runSynchronized
import org.modelix.model.area.IArea
import org.w3c.dom.Document
import org.w3c.dom.Element
import org.w3c.dom.NamedNodeMap
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import org.w3c.dom.Text
import java.io.StringWriter
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.transform.OutputKeys
import javax.xml.transform.Transformer
import javax.xml.transform.TransformerFactory
import javax.xml.transform.dom.DOMSource
import javax.xml.transform.stream.StreamResult

private val LOG = KotlinLogging.logger {  }

class ModelixSSRServer(private val nodeResolutionScope: INodeResolutionScope) {

    private val incrementalEngine = IncrementalEngine()
    val editorEngine: EditorEngine = EditorEngine(incrementalEngine)
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
                            val serializedMessage = wsMessage.readText()
                            LOG.debug { "Received message: $serializedMessage" }
                            val deserializedMessage = MessageFromClient.fromJson(serializedMessage)
                            clientMessage = deserializedMessage
                            runSynchronized(lock) {
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

        private inner class EditorSession(val editorId: String) {
            private var editorComponent: EditorComponent? = null
            private val commonElementPrefix = editorId + "-"

            fun processMessage(msg: MessageFromClient) {
                msg.rootNodeReference?.let {  rootNodeReferenceString ->
                    (nodeResolutionScope as IArea).executeRead {
                        val rootNode = checkNotNull(NodeReference(rootNodeReferenceString).resolveIn(nodeResolutionScope)) {
                            "Root node not found: $rootNodeReferenceString"
                        }
                        LOG.debug { "Root node $rootNodeReferenceString found: $rootNode" }
                        editorComponent = editorEngine.editNode(rootNode)
                    }
                    sendUpdate()
                }
                msg.keyboardEvent?.let { event ->
                    val editor = checkNotNull(editorComponent) { "Editor $editorId isn't initialized" }
                    editor.processKeyDown(event)
                }
            }

            fun sendUpdate() {
                LOG.debug { "($editorId) sendUpdate" }
                editorComponent!!.update()
                val dom = buildDom(editorComponent!!.getRootCell().layout)
                LOG.debug { "($editorId) dom: $dom" }
                val updateDataMap = HashMap<String, HTMLElementUpdateData>()
                var rootData = toUpdateData(dom, updateDataMap)
                if (rootData is ElementReference) rootData = updateDataMap[rootData.id]!!
                check(rootData is HTMLElementUpdateData)
                if (rootData.id != editorId) {
                    updateDataMap.remove(rootData.id)
                    rootData = rootData.copy(id = editorId)
                    updateDataMap[editorId] = rootData
                }
                ws.outgoing.trySend(Frame.Text(MessageFromServer(
                    editorId = editorId,
                    domUpdate = DomTreeUpdate(
                        elements = updateDataMap.values.toList()
                    )
                ).toJson()))
            }

            private fun buildDom(contentProducer: IProducesHtml): Element {
                val dbf = DocumentBuilderFactory.newInstance()
                val db = dbf.newDocumentBuilder()
                val doc = db.newDocument()
                val editorElement = doc.create.div("editor") {
                    id = editorId
                    div(EditorComponent.MAIN_LAYER_CLASS_NAME) {
                        produceChild(contentProducer)
                    }
                    div("selection-layer relative-layer") {
                        //produceChild(selectionView)
                    }
                    div("popup-layer relative-layer") {
                        //produceChild(codeCompletionMenu)
                    }
                }
                LOG.trace { "Editor as XML: ${xmlToString(doc)}" }
                return editorElement
            }

            fun toUpdateData(node: Node, id2data: MutableMap<String, HTMLElementUpdateData>): INodeUpdateData {
                return when (node) {
                    is Text -> TextNodeUpdateData(node.data)
                    is Element -> {
                        val id = node.getAttribute("id").takeIf { it.isNotEmpty() }?.let {
                            if (it.startsWith(commonElementPrefix)) it else commonElementPrefix + it
                        }
                        val data = HTMLElementUpdateData(
                            id = id,
                            tagName = node.tagName,
                            attributes = node.attributes.toList().associate { it } - "id",
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
        }
    }
}

private fun NamedNodeMap.toList(): List<Pair<String, String>> {
    return 0.until(length).map { item(it) }.map { it.nodeName to it.nodeValue }
}

private fun NodeList.toList(): List<Node> {
    return 0.until(length).map { item(it) }
}

fun xmlToString(doc: Document): String {
    val transformerFactory: TransformerFactory = TransformerFactory.newInstance()
    val transformer: Transformer = transformerFactory.newTransformer()
    transformer.setOutputProperty(OutputKeys.INDENT, "yes")
    val source = DOMSource(doc)
    val out = StringWriter()
    val result = StreamResult(out)
    transformer.transform(source, result)
    return out.toString()
}