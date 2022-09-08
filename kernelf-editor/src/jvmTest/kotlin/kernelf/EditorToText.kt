package kernelf

import org.iets3.core.expr.tests.N_TestSuite
import org.modelix.kernelf.KernelfLanguages
import org.modelix.metamodel.TypedLanguagesRegistry
import org.modelix.metamodel.generator.ModelData
import org.modelix.model.ModelFacade
import java.io.File
import kotlin.test.Test

class EditorToText {

    @Test
    fun toText() {
        KernelfLanguages.languages.forEach { it.register() }

        val modelData = ModelData.fromFile(File("models/test.in.expr.os.strings@tests.yaml"))
        val branch = ModelFacade.toLocalBranch(ModelFacade.newLocalTree())
        modelData.load(branch)
        val rootNode = ModelFacade.getRootNode(branch)
        ModelFacade.readNode(rootNode) {
            val modules = rootNode.getChildren("modules")
            val models = modules.flatMap { it.getChildren("models") }
            val mpsRootNodes = models.flatMap { it.getChildren("rootNodes") }
                .map { TypedLanguagesRegistry.wrapNode(it) }
            val kernelfTestSuites = mpsRootNodes.filterIsInstance<N_TestSuite>()

            kernelfTestSuites.forEach { ts ->
                println(ts.name)
            }
        }
    }


}