package kernelf

import org.modelix.editor.kernelf.KernelfAPI
import org.modelix.metamodel.modelDataFromYaml
import java.io.File
import kotlin.test.Test

class EditorToText {

    @Test
    fun toText() {
        val yamlFile = File("models/test.in.expr.os.strings@tests.yaml")
        val data = modelDataFromYaml(yamlFile.readText())
        val modelAsText = KernelfAPI.renderModelAsText(data)
        println(modelAsText)
    }


}