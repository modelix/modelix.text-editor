import kotlinx.atomicfu.atomic
import kotlinx.browser.document
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import kotlinx.html.dom.createTree
import org.modelix.editor.EditorState
import org.modelix.editor.IncrementalBranch
import org.modelix.editor.IncrementalJSDOMBuilder
import org.modelix.editor.JsEditorComponent
import org.modelix.editor.kernelf.KernelfAPI
import org.modelix.metamodel.typed
import org.modelix.model.ModelFacade
import org.modelix.model.api.IBranchListener
import org.modelix.model.api.INode
import org.modelix.model.api.ITree
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node

@JsExport
object KernelfApiJS {

    fun loadModelsFromJson(json: Array<String>): INode = KernelfAPI.loadModelsFromJson(json)
    fun getModules(rootNode: INode): Array<INode> = KernelfAPI.getModules(rootNode)
    fun nodeToString(node: Any): String = KernelfAPI.nodeToString(node)

    private fun renderNodeAsDom(editorState: EditorState, rootNode: INode): HTMLElement {
        val tagConsumer = document.createTree()
        KernelfAPI.renderNode(editorState, rootNode, tagConsumer)
        return tagConsumer.finalize()
    }

    private fun updateNodeAsDom(editorState: EditorState, rootNode: INode, parentElement: HTMLElement) {
        val existing = parentElement.firstElementChild as? HTMLElement
        val consumer = IncrementalJSDOMBuilder(parentElement.ownerDocument!!, existing)
        KernelfAPI.renderNode(editorState, rootNode, consumer)
        val newHtml = consumer.finalize()
        if (newHtml != existing) {
            if (existing != null) parentElement.removeChild(existing)
            parentElement.appendChild(newHtml)
        }
    }

    fun renderAndUpdateNodeAsDom(rootNode: INode): HTMLElement {
        val editor = JsEditorComponent(KernelfAPI.editorEngine) { state ->
            KernelfAPI.editorEngine.createCell(state, rootNode.typed())
        }
        val branch = ModelFacade.getBranch(rootNode)!!.let { if (it is IncrementalBranch) it.branch else it }
        branch.addListener(object : IBranchListener {
            private var updateScheduled = atomic(false)
            private val coroutinesScope = CoroutineScope(Dispatchers.Main)
            override fun treeChanged(oldTree: ITree?, newTree: ITree) {
                if (editor.getHtmlElement().isInDocument()) {
                    if (!updateScheduled.getAndSet(true)) {
                        coroutinesScope.launch {
                            updateScheduled.getAndSet(false)
                            editor.update()
                        }
                    }
                } else {
                    coroutinesScope.cancel("Editor removed from document")
                    branch.removeListener(this)
                    editor.dispose()
                }
            }
        })
        editor.updateHtml()
        return editor.getHtmlElement()
    }
}

private fun Node.isInDocument(): Boolean = if (this === document) true else parentNode?.isInDocument() ?: false