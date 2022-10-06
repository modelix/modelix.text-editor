package org.modelix.editor.kernelf

import jetbrains.mps.lang.core.N_INamedConcept
import kotlinx.html.consumers.DelayedConsumer
import kotlinx.html.div
import kotlinx.html.hr
import kotlinx.html.stream.HTMLStreamBuilder
import org.modelix.editor.EditorEngine
import org.modelix.editor.LayoutedCells
import org.modelix.kernelf.KernelfLanguages
import org.modelix.metamodel.TypedLanguagesRegistry
import org.modelix.metamodel.ModelData
import org.modelix.model.repositoryconcepts.N_Module
import org.modelix.model.ModelFacade
import kotlin.js.JsExport

@JsExport
object KernelfAPI {
    init {
        KernelfLanguages.languages.forEach { it.register() }
    }

    fun renderJsonAsHtmlText(json: String): String {
        return renderModelAsHtmlText(ModelData.fromJson(json))
    }

    fun renderModelAsHtmlText(modelData: ModelData): String {
        val editorEngine = EditorEngine()
        KernelfEditor().register(editorEngine)

        val branch = ModelFacade.toLocalBranch(ModelFacade.newLocalTree())
        modelData.load(branch)
        val rootNode = ModelFacade.getRootNode(branch)
        val sb = StringBuilder()
        ModelFacade.readNode(rootNode) {
            val modules = rootNode.getChildren("modules")
                .map { TypedLanguagesRegistry.wrapNode(it) }
                .filterIsInstance<N_Module>()
            val models = modules.flatMap { it.models }
            val mpsRootNodes = models.flatMap { it.rootNodes }
            mpsRootNodes.filterIsInstance<N_INamedConcept>().forEach { ts ->
                println(ts.name)
            }

            DelayedConsumer(HTMLStreamBuilder(out = sb, prettyPrint = true, xhtmlCompatible = true)).div {
                mpsRootNodes.forEachIndexed { index, rootNode ->
                    if (index > 0) {
                        hr {  }
                    }
                    val cell = editorEngine.createCell(rootNode)
                    LayoutedCells().also { cell.layout(it) }.toHtml(consumer)
                }
            }
        }
        return sb.toString()
    }
}