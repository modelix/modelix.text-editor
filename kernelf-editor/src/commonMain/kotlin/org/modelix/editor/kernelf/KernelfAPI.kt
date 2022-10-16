package org.modelix.editor.kernelf

import jetbrains.mps.lang.core.N_INamedConcept
import kotlinx.html.consumers.DelayedConsumer
import kotlinx.html.div
import kotlinx.html.hr
import kotlinx.html.stream.HTMLStreamBuilder
import org.iets3.core.expr.tests.N_TestSuite
import org.modelix.editor.EditorEngine
import org.modelix.editor.LayoutedCells
import org.modelix.kernelf.KernelfLanguages
import org.modelix.metamodel.*
import org.modelix.model.repositoryconcepts.N_Module
import org.modelix.model.ModelFacade
import org.modelix.model.api.IBranch
import org.modelix.model.api.ILanguageRepository
import org.modelix.model.api.INode
import kotlin.js.JsExport

@JsExport
object KernelfAPI {
    init {
        KernelfLanguages.languages.forEach { it.register() }
    }

    fun renderJsonAsHtmlText(json: String): String {
        return renderModelAsHtmlText(ModelData.fromJson(json))
    }

    fun loadModelFromJson(json: String): INode {
        val branch = ModelFacade.toLocalBranch(ModelFacade.newLocalTree())
        ModelData.fromJson(json).load(branch)
        val rootNode = ModelFacade.getRootNode(branch)
        return rootNode
    }

    fun renderNodeAsHtmlText(rootNode: INode): String {
        return renderTypedNodeAsHtmlText(rootNode.typed())
    }

    fun renderTypedNodeAsHtmlText(rootNode: ITypedNode): String {
        val editorEngine = EditorEngine()
        KernelfEditor().register(editorEngine)
        val sb = StringBuilder()
        ModelFacade.readNode(rootNode.unwrap()) {
            DelayedConsumer(HTMLStreamBuilder(out = sb, prettyPrint = true, xhtmlCompatible = true)).div {
                val cell = editorEngine.createCell(rootNode)
                LayoutedCells().also { cell.layout(it) }.toHtml(consumer)
            }
        }
        return sb.toString()
    }

    fun renderModelAsHtmlText(modelData: ModelData): String {
        val branch = ModelFacade.toLocalBranch(ModelFacade.newLocalTree())
        modelData.load(branch)
        val rootNode = ModelFacade.getRootNode(branch)
        return renderNodeAsHtmlText(rootNode)
    }

    fun nodeToString(node: ITypedNode): String {
        return (if (node is N_INamedConcept) node.name else null) ?: node._concept._concept.getLongName()
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

    fun getModules(rootNode: INode): Array<N_Module> {
        return ModelFacade.readNode(rootNode) {
            val modules = rootNode.getChildren("modules")
                .map { TypedLanguagesRegistry.wrapNode(it) }
                .filterIsInstance<N_Module>()
            modules.toTypedArray()
        }
    }
}