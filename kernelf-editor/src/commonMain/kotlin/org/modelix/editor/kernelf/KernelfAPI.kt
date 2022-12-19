package org.modelix.editor.kernelf

import jetbrains.mps.lang.core.N_INamedConcept
import kotlinx.html.TagConsumer
import kotlinx.html.consumers.DelayedConsumer
import kotlinx.html.stream.HTMLStreamBuilder
import org.iets3.core.expr.tests.N_TestSuite
import org.modelix.editor.EditorEngine
import org.modelix.editor.IncrementalBranch
import org.modelix.editor.toHtml
import org.modelix.kernelf.KernelfLanguages
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.ModelData
import org.modelix.metamodel.TypedLanguagesRegistry
import org.modelix.metamodel.typed
import org.modelix.model.ModelFacade
import org.modelix.model.api.INode
import org.modelix.model.area.IAreaChangeList
import org.modelix.model.area.IAreaListener
import org.modelix.model.repositoryconcepts.N_Module
import kotlin.js.JsExport

@JsExport
object KernelfAPI {
    val editorEngine = EditorEngine()

    init {
        KernelfLanguages.languages.forEach { it.register() }
        KernelfEditor.register(editorEngine)
    }

    fun renderJsonAsHtmlText(json: String): String {
        return renderModelAsHtmlText(ModelData.fromJson(json))
    }

    fun loadModelFromJson(json: String): INode = loadModelsFromJson(arrayOf(json))

    fun loadModelsFromJson(json: Array<String>): INode {
        //val branch = IncrementalBranch(PBranch(ModelFacade.newLocalTree(), IdGenerator.getInstance(0xabcdef)))
        val branch = IncrementalBranch(ModelFacade.toLocalBranch(ModelFacade.newLocalTree()))
        // TODO call IncrementalBranch.dispose

        json.forEach { ModelData.fromJson(it).load(branch)  }
        val rootNode = ModelFacade.getRootNode(branch)
        return rootNode
    }

    fun renderNodeAsHtmlText(rootNode: INode): String {
        return renderTypedNodeAsHtmlText(rootNode.typed())
    }

    fun renderTypedNodeAsHtmlText(rootNode: ITypedNode): String {
        val sb = StringBuilder()
        renderTypedNode(rootNode, DelayedConsumer(HTMLStreamBuilder(out = sb, prettyPrint = true, xhtmlCompatible = true)))
        return sb.toString()
    }

    fun <T> renderNode(rootNode: INode, tagConsumer: TagConsumer<T>) {
        renderTypedNode(rootNode.typed(), tagConsumer)
    }

    fun <T> renderTypedNode(rootNode: ITypedNode, tagConsumer: TagConsumer<T>) {
        ModelFacade.readNode(rootNode.unwrap()) {
            val cell = editorEngine.createCell(rootNode)
            cell.layout.toHtml(tagConsumer)
        }
    }

    fun renderModelAsHtmlText(modelData: ModelData): String {
        val branch = ModelFacade.toLocalBranch(ModelFacade.newLocalTree())
        modelData.load(branch)
        val rootNode = ModelFacade.getRootNode(branch)
        return rootNode.allChildren
            .filter { it.getConceptReference() != null }
            .joinToString("\n") { renderNodeAsHtmlText(it) }
    }

    fun nodeToString(node: Any): String {
        val typedNode = when (node) {
            is ITypedNode -> node
            is INode -> node.typed()
            else -> throw IllegalArgumentException("Unsupported node type: $node")
        }
        return (if (typedNode is N_INamedConcept) typedNode.name else null) ?: typedNode._concept._concept.getLongName()
    }

    fun findTestSuites(rootNode: INode): Array<N_TestSuite> {
        return ModelFacade.readNode(rootNode) {
            val modules = rootNode.getChildren("modules")
                .map { TypedLanguagesRegistry.wrapNode(it) }
                .filterIsInstance<N_Module>()
            modules.flatMap { it.models }.flatMap { it.rootNodes }
                .filterIsInstance<N_TestSuite>()
                .toTypedArray()
        }
    }

    fun getModules(rootNode: INode): Array<INode> {
        return ModelFacade.readNode(rootNode) {
            val modules = rootNode.getChildren("modules")
                .map { TypedLanguagesRegistry.wrapNode(it) }
                .filterIsInstance<N_Module>()
                .map { it.unwrap() }
            modules.toTypedArray()
        }
    }

    fun unwrapNode(node: Any): Any {
        if (node is INode) return node
        if (node is ITypedNode) return node.unwrap()
        return node
    }
}