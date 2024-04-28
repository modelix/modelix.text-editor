package org.modelix.editor.ssr.mps

import org.modelix.editor.CaretSelection
import org.modelix.editor.EditorEngine
import org.modelix.editor.JSKeyboardEvent
import org.modelix.editor.JSKeyboardEventType
import org.modelix.editor.KnownKeys
import org.modelix.editor.NodeCellReference
import org.modelix.editor.getVisibleText
import org.modelix.editor.lastLeaf
import org.modelix.editor.layoutable
import org.modelix.incremental.IncrementalEngine
import org.modelix.model.api.INode
import org.modelix.model.mpsadapters.MPSNode

/**
 * Test editor for MPS baseLanguage ClassConcept
 */
class BaseLanguageTests : TestBase("SimpleProject") {
    fun `test inserting new line into class`() {
        lateinit var rootNode: MPSNode
        lateinit var firstMethod: INode
        readAction {
            val solution = mpsProject.projectModules.first { it.moduleName == "Solution1" }
            val model = solution.models.first()
            rootNode = model.rootNodes.first().let { MPSNode(it) }
            firstMethod = rootNode.allChildren.first { it.concept?.getShortName() == "InstanceMethodDeclaration" }
        }

        fun memberConcepts() = readAction {
            rootNode.allChildren.filter { it.getContainmentLink()?.getSimpleName() == "member" }.map { it.concept?.getShortName() }
        }
        assertEquals(listOf("InstanceMethodDeclaration"), memberConcepts())

        val incrementalEngine = IncrementalEngine()
        val editorEngine = EditorEngine(incrementalEngine)
        val mpsIntegration = EditorIntegrationForMPS(editorEngine)
        mpsIntegration.init(mpsProject.repository)

        val editor = editorEngine.editNode(rootNode)
        fun assertEditorText(expected: String) {
            assertEquals(expected, editor.getRootCell().layout.toString())
        }

        assertEditorText(
            """
            class Class1 {
              public void method1(<no parameter>) {
                <no statement>
              }
            }
            """.trimIndent(),
        )

        val firstMethodCell = editor.resolveCell(NodeCellReference(firstMethod.reference)).first()
        val lastLeafCell = firstMethodCell.lastLeaf()
        assertEquals("}", lastLeafCell.getVisibleText())

        editor.changeSelection(CaretSelection(lastLeafCell.layoutable()!!, -1))
        editor.processKeyEvent(JSKeyboardEvent(JSKeyboardEventType.KEYDOWN, KnownKeys.Enter))

        assertEditorText(
            """
                class Class1 {
                  public void method1(<no parameter>) {
                    <no statement>
                  }
                  
                }
            """.trimIndent(),
        )
    }
}
