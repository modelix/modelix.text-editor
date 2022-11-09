package org.modelix.editor.kernelf

import kotlinx.browser.document
import kotlinx.html.consumers.delayed
import kotlinx.html.dom.create
import kotlinx.html.dom.createTree
import kotlinx.html.js.div
import org.modelix.editor.IncrementalBranch
import org.modelix.editor.IncrementalJSDOMBuilder
import org.modelix.model.ModelFacade
import org.modelix.model.api.IBranchListener
import org.modelix.model.api.INode
import org.modelix.model.api.ITree
import org.w3c.dom.HTMLElement

@JsExport
object KernelfApiJS {

    fun renderNodeAsDom(rootNode: INode): HTMLElement {
        val tagConsumer = document.createTree()
        KernelfAPI.renderNode(rootNode, tagConsumer)
        return tagConsumer.finalize()
    }

    fun updateNodeAsDom(rootNode: INode, parentElement: HTMLElement) {
        val existing = parentElement.firstElementChild as? HTMLElement
        val consumer = IncrementalJSDOMBuilder(parentElement.ownerDocument!!, existing)
        KernelfAPI.renderNode(rootNode, consumer)
        val newHtml = consumer.finalize()
        if (newHtml != existing) {
            if (existing != null) parentElement.removeChild(existing)
            parentElement.appendChild(newHtml)
        }
    }

    fun renderAndUpdateNodeAsDom(rootNode: INode): HTMLElement {
        val container = document.create.div("auto-update-container")
        val branch = ModelFacade.getBranch(rootNode)!!.let { if (it is IncrementalBranch) it.branch else it }
        branch.addListener(object : IBranchListener {
            override fun treeChanged(oldTree: ITree?, newTree: ITree) {
                if (container.parentNode == null) {
                    branch.removeListener(this)
                } else {
                    updateNodeAsDom(rootNode, container)
                }
            }
        })
        updateNodeAsDom(rootNode, container)
        return container
    }
}