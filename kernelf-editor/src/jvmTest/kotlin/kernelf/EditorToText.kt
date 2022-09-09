package kernelf

import org.iets3.core.expr.tests.N_TestSuite
import org.modelix.editor.EditorEngine
import org.modelix.editor.LayoutedText
import org.modelix.editor.kernelf.KernelfEditor
import org.modelix.kernelf.KernelfLanguages
import org.modelix.metamodel.TypedLanguagesRegistry
import org.modelix.metamodel.generator.ModelData
import org.modelix.model.ModelFacade
import org.modelix.model.repositoryconcepts.N_Module
import java.io.File
import kotlin.test.Test

class EditorToText {

    @Test
    fun toText() {
        KernelfLanguages.languages.forEach { it.register() }
        val editorEngine = EditorEngine()
        KernelfEditor().register(editorEngine)

        val modelData = ModelData.fromFile(File("models/test.in.expr.os.strings@tests.yaml"))
        val branch = ModelFacade.toLocalBranch(ModelFacade.newLocalTree())
        modelData.load(branch)
        val rootNode = ModelFacade.getRootNode(branch)
        ModelFacade.readNode(rootNode) {
            val modules = rootNode.getChildren("modules")
                .map { TypedLanguagesRegistry.wrapNode(it) }
                .filterIsInstance<N_Module>()
            println("Modules: ${modules.map { it.name }}")
            val models = modules.flatMap { it.models }
            println("Models: ${models.map { it.name }}")
            val mpsRootNodes = models.flatMap { it.rootNodes }
            println("MPS Root Nodes: $mpsRootNodes")
            val kernelfTestSuites = mpsRootNodes.filterIsInstance<N_TestSuite>()

            kernelfTestSuites.forEach { ts ->
                println(ts.name)
            }


            kernelfTestSuites.forEach {
                val cell = editorEngine.createCell(it)
                println(LayoutedText().also { cell.layoutText(it) }.toString())
            }
        }
    }


}