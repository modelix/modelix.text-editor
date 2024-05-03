package org.modelix.editor.ssr.mps

import org.modelix.editor.CaretSelection
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.EditorComponent
import org.modelix.editor.EditorEngine
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.ICodeCompletionActionProvider
import org.modelix.editor.JSKeyboardEvent
import org.modelix.editor.JSKeyboardEventType
import org.modelix.editor.KnownKeys
import org.modelix.editor.NodeCellReference
import org.modelix.editor.applyShadowing
import org.modelix.editor.descendantsAndSelf
import org.modelix.editor.flattenApplicableActions
import org.modelix.editor.getMaxCaretPos
import org.modelix.editor.getSubstituteActions
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
    lateinit var editor: EditorComponent
    lateinit var mpsIntegration: EditorIntegrationForMPS
    lateinit var editorEngine: EditorEngine
    lateinit var incrementalEngine: IncrementalEngine
    lateinit var classNode: MPSNode

    override fun setUp() {
        super.setUp()

        readAction {
            val solution = mpsProject.projectModules.first { it.moduleName == "Solution1" }
            val model = solution.models.first()
            classNode = model.rootNodes.first().let { MPSNode(it) }
        }

        incrementalEngine = IncrementalEngine()
        editorEngine = EditorEngine(incrementalEngine)
        mpsIntegration = EditorIntegrationForMPS(editorEngine)
        mpsIntegration.init(mpsProject.repository)
        editor = editorEngine.editNode(classNode)
    }

    fun assertEditorText(expected: String) {
        assertEquals(expected.trimIndent(), editor.getRootCell().layout.toString())
    }

    fun placeCaretAtEnd(node: INode) {
        val cell = editor.resolveCell(NodeCellReference(node.reference)).first()
        val lastLeafCell = cell.lastLeaf()
        editor.changeSelection(CaretSelection(lastLeafCell.layoutable()!!, lastLeafCell.getMaxCaretPos()))
    }

    fun placeCaretIntoCellWithText(text: String) {
        val cell = editor.getRootCell().descendantsAndSelf().first { it.getVisibleText() == text }
        editor.changeSelection(CaretSelection(cell.layoutable()!!, cell.getMaxCaretPos()))
    }

    fun pressEnter() = pressKey(KnownKeys.Enter)

    fun pressKey(key: KnownKeys) {
        editor.processKeyEvent(JSKeyboardEvent(JSKeyboardEventType.KEYDOWN, key))
    }

    fun typeText(text: CharSequence) {
        for (c in text) {
            editor.processKeyEvent(
                JSKeyboardEvent(
                    eventType = JSKeyboardEventType.KEYDOWN,
                    typedText = c.toString(),
                    knownKey = null,
                    rawKey = c.toString(),
                ),
            )
        }
    }

    fun getCodeCompletionEntries(pattern: String): List<ICodeCompletionAction> {
        return readAction {
            val actionProviders: Sequence<ICodeCompletionActionProvider> = (editor.getSelection() as CaretSelection).layoutable.cell.getSubstituteActions()
            val actions = actionProviders.flatMap { it.flattenApplicableActions(CodeCompletionParameters(editor, pattern)) }.toList()
            val matchingActions = actions.filter {
                val matchingText = it.getMatchingText()
                matchingText.isNotEmpty() && matchingText.startsWith(pattern)
            }
            val shadowedActions = matchingActions.applyShadowing()
            val sortedActions = shadowedActions.sortedBy { it.getMatchingText().lowercase() }
            sortedActions
        }
    }

    fun `test initial editor`() {
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

    fun `test inserting new line into class`() {
        val lastMember = readAction { classNode.allChildren.last { it.getContainmentLink()?.getSimpleName() == "member" } }
        placeCaretAtEnd(lastMember)
        pressEnter()
        assertEditorText(
            """
            class Class1 {
              public void method1(<no parameter>) {
                <no statement>
              }
              
            }
        """,
        )
    }

    fun `test creating LocalVariableDeclarationStatement by typing a type`() {
        placeCaretIntoCellWithText("<no statement>")
        val actions = getCodeCompletionEntries("int")
        assertEquals(
            "int | LocalVariableDeclarationStatement[LocalVariableDeclaration[IntegerType]]",
            actions.joinToString("\n") { it.getMatchingText() + " | " + it.getDescription() },
        )
        typeText("int")
        assertEditorText(
            """
            class Class1 {
              public void method1(<no parameter>) {
                int <no name>;
              }
            }
        """,
        )
    }

    fun `test naming LocalVariableDeclaration`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        assertEditorText(
            """
            class Class1 {
              public void method1(<no parameter>) {
                int abc;
              }
            }
        """,
        )
    }

    fun `test showing initializer of LocalVariableDeclaration`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        typeText("=")
        assertEditorText(
            """
            class Class1 {
              public void method1(<no parameter>) {
                int abc = <no initializer>;
              }
            }
        """,
        )
    }

    fun `test adding initializer to LocalVariableDeclaration`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        typeText("=")
        typeText("10")
        assertEditorText(
            """
            class Class1 {
              public void method1(<no parameter>) {
                int abc = 10;
              }
            }
        """,
        )
    }
}
