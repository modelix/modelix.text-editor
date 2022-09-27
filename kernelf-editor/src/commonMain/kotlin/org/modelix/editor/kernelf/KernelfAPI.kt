package org.modelix.editor.kernelf

import jetbrains.mps.lang.core.N_INamedConcept
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
    fun renderModelAsText(modelData: ModelData): String {
        val editorEngine = EditorEngine()
        KernelfEditor().register(editorEngine)

        val branch = ModelFacade.toLocalBranch(ModelFacade.newLocalTree())
        modelData.load(branch)
        val rootNode = ModelFacade.getRootNode(branch)
        lateinit var renderedRootNodes: List<String>
        ModelFacade.readNode(rootNode) {
            val modules = rootNode.getChildren("modules")
                .map { TypedLanguagesRegistry.wrapNode(it) }
                .filterIsInstance<N_Module>()
            println("Modules: ${modules.map { it.name }}")
            val models = modules.flatMap { it.models }
            println("Models: ${models.map { it.name }}")
            val mpsRootNodes = models.flatMap { it.rootNodes }
            println("MPS Root Nodes: $mpsRootNodes")

            mpsRootNodes.filterIsInstance<N_INamedConcept>().forEach { ts ->
                println(ts.name)
            }

            renderedRootNodes = mpsRootNodes.map {
                val cell = editorEngine.createCell(it)
                LayoutedCells().also { cell.layout(it) }.toHtml()
            }
        }
        return renderedRootNodes.joinToString("\n<hr/>\n")
    }
}