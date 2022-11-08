package org.modelix.editor.kernelf

import kotlinx.browser.document
import kotlinx.html.dom.createTree
import org.modelix.metamodel.ITypedNode
import org.modelix.model.api.INode
import org.w3c.dom.HTMLElement

@JsExport
object KernelfApiJS {

    fun renderNodeAsDom(rootNode: INode): HTMLElement {
        val tagConsumer = document.createTree()
        KernelfAPI.renderNode(rootNode, tagConsumer)
        return tagConsumer.finalize()
    }
}