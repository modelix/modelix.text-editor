package org.modelix.editor.ssr.client

import io.github.oshai.kotlinlogging.KotlinLogging
import org.modelix.editor.ssr.common.MessageFromClient
import org.modelix.editor.ssr.common.MessageFromServer
import org.modelix.model.api.INodeReference
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement

private val LOG = KotlinLogging.logger { }

class ClientSideEditors(val sendMessage: (MessageFromClient) -> Unit) {

    private val editors: MutableMap<String, ClientSideEditor> = HashMap()
    private var nextEditorId: Long = 1000

    fun processMessage(msg: MessageFromServer) {
        msg.error?.let { LOG.error { it } }
        msg.editorId?.let { editorId ->
            val editor = checkNotNull(editors[editorId]) { "Unknown editor ID: $editorId" }
            msg.domUpdate?.let { editor.applyUpdate(it) }
        }
    }

    fun createEditor(rootNodeReference: INodeReference, existingContainerElement: HTMLDivElement? = null): HTMLElement {
        val editorId = "modelix-editor-" + nextEditorId++.toString()
        LOG.trace { "Trying to create new editor $editorId" }
        val editorSession = ClientSideEditor(editorId, rootNodeReference, existingContainerElement, sendMessage)
        LOG.info { "Creating editor ${editorSession.editorId}" }
        editors[editorSession.editorId] = editorSession
        MessageFromClient(
            editorId = editorSession.editorId,
            rootNodeReference = rootNodeReference.serialize(),
        ).let(sendMessage)
        return editorSession.containerElement
    }
}
