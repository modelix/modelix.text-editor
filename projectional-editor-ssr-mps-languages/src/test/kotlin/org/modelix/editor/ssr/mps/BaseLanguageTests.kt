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
@Suppress("ktlint:standard:wrapping", "ktlint:standard:trailing-comma-on-call-site")
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

    override fun tearDown() {
        editor.dispose()
        mpsIntegration.dispose()
        editorEngine.dispose()
        incrementalEngine.dispose()
        super.tearDown()
    }

    fun assertFinalEditorText(expected: String) {
        assertEditorText(expected)

        // Reset all editor state to ensure the typed text triggered a model transformation.
        editor.state.reset()
        editor.update()
        assertEditorText(expected)
    }

    fun assertCaretPosition(cellTextWithCaret: String) {
        val selection = checkNotNull(editor.getSelection()) { "No active selection" }
        if (selection !is CaretSelection) error("Not a caret selection: $selection")
        assertEquals(cellTextWithCaret, selection.toString())
    }

    fun assertEditorText(expected: String) {
        assertEquals(expected.trimIndent(), editor.getRootCell().layout.toString())
    }

    fun placeCaretAtEnd(node: INode) {
        val cell = editor.resolveCell(NodeCellReference(node.reference)).first()
        val lastLeafCell = cell.lastLeaf()
        editor.changeSelection(CaretSelection(lastLeafCell.layoutable()!!, lastLeafCell.getMaxCaretPos()))
    }

    fun placeCaretIntoCellWithText(text: String, position: Int = -1) {
        val cell = editor.getRootCell().descendantsAndSelf().first { it.getVisibleText() == text }
        editor.changeSelection(CaretSelection(cell.layoutable()!!, if (position == -1) cell.getMaxCaretPos() else position))
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
        assertFinalEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                <no statement>
              }
            }
        """)
    }

    fun `test inserting new line into class`() {
        val lastMember = readAction { classNode.allChildren.last { it.getContainmentLink()?.getSimpleName() == "member" } }
        placeCaretAtEnd(lastMember)
        pressEnter()
        assertFinalEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                <no statement>
              }
              
            }
        """)
    }

    fun `test creating LocalVariableDeclarationStatement by typing a type`() {
        placeCaretIntoCellWithText("<no statement>")
        val actions = getCodeCompletionEntries("int")
        assertEquals(
            "int | LocalVariableDeclarationStatement[LocalVariableDeclaration[IntegerType]]",
            actions.joinToString("\n") { it.getMatchingText() + " | " + it.getDescription() },
        )
        typeText("int")
        assertFinalEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int <no name>;
              }
            }
        """)
    }

    fun `test naming LocalVariableDeclaration`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        assertFinalEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int abc;
              }
            }
        """)
    }

    fun `test showing initializer of LocalVariableDeclaration using side transformation`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        typeText("=")
        assertEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int abc = <no initializer>;
              }
            }
        """)
        assertCaretPosition("|<no initializer>")
    }

    fun `test showing initializer of LocalVariableDeclaration using TAB`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        pressKey(KnownKeys.Tab)
        assertEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int abc = <no initializer>;
              }
            }
        """)
        assertCaretPosition("|<no initializer>")
    }

    fun `test previous optional is hidden when TABing to next`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        pressKey(KnownKeys.Enter)
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("def")
        placeCaretIntoCellWithText("abc")

        assertEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int abc;
                int def;
              }
            }
        """)

        pressKey(KnownKeys.Tab)
        assertEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int abc = <no initializer>;
                int def;
              }
            }
        """)
        assertCaretPosition("|<no initializer>")

        pressKey(KnownKeys.Tab)
        assertCaretPosition("|def")
        pressKey(KnownKeys.Tab)
        assertEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int abc;
                int def = <no initializer>;
              }
            }
        """)
        assertCaretPosition("|<no initializer>")
    }

    fun `test adding initializer to LocalVariableDeclaration`() {
        placeCaretIntoCellWithText("<no statement>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("abc")
        typeText("=")
        typeText("10")
        assertFinalEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                int abc = 10;
              }
            }
        """)
    }

    fun `test adding second parameter to InstanceMethodDeclaration by pressing ENTER`() {
        placeCaretIntoCellWithText("<no parameter>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p1")
        pressKey(KnownKeys.Enter)
        assertEditorText("""
            class Class1 {
              public void method1(int p1, <choose parameter>) {
                <no statement>
              }
            }
        """)
        typeText("string")
        pressKey(KnownKeys.Tab)
        typeText("p2")
        assertFinalEditorText("""
            class Class1 {
              public void method1(int p1, string p2) {
                <no statement>
              }
            }
        """)
    }

    fun `test adding second parameter to InstanceMethodDeclaration by typing separator after last`() {
        placeCaretIntoCellWithText("<no parameter>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p1")
        typeText(",")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p2")
        assertFinalEditorText("""
            class Class1 {
              public void method1(int p1, int p2) {
                <no statement>
              }
            }
        """)
        assertCaretPosition("p2|")
    }

    fun `test adding second parameter to InstanceMethodDeclaration by typing separator after first`() {
        placeCaretIntoCellWithText("<no parameter>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p1")
        typeText(",")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p2")
        placeCaretIntoCellWithText("p1")
        typeText(",")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p3")
        assertFinalEditorText("""
            class Class1 {
              public void method1(int p1, int p3, int p2) {
                <no statement>
              }
            }
        """)
        assertCaretPosition("p3|")
    }

/*    fun `test adding second parameter to InstanceMethodDeclaration by typing separator before last`() {
        placeCaretIntoCellWithText("<no parameter>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p1")
        typeText(",")
        typeText("string")
        pressKey(KnownKeys.Tab)
        typeText("p2")
        placeCaretIntoCellWithText("string", 0)
        typeText(",")
        typeText("long")
        pressKey(KnownKeys.Tab)
        typeText("p3")
        assertFinalEditorText("""
            class Class1 {
              public void method1(int p1, long p3, int p2) {
                <no statement>
              }
            }
        """)
    }*/

    fun `test deleting parameter using BACKSPACE`() {
        placeCaretIntoCellWithText("<no parameter>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p1")
        assertEditorText("""
            class Class1 {
              public void method1(int p1) {
                <no statement>
              }
            }
        """)
        assertCaretPosition("p1|")
        pressKey(KnownKeys.ArrowLeft)
        assertCaretPosition("p|1")
        pressKey(KnownKeys.ArrowLeft)
        assertCaretPosition("|p1")
        pressKey(KnownKeys.Backspace)
        assertFinalEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                <no statement>
              }
            }
        """)
        assertCaretPosition("|<no parameter>")
    }

    fun `test deleting parameter using DELETE`() {
        placeCaretIntoCellWithText("<no parameter>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p1")
        assertEditorText("""
            class Class1 {
              public void method1(int p1) {
                <no statement>
              }
            }
        """)
        pressKey(KnownKeys.Delete)
        assertFinalEditorText("""
            class Class1 {
              public void method1(<no parameter>) {
                <no statement>
              }
            }
        """)
        assertCaretPosition("|<no parameter>")
    }

    fun `test deleting placeholder`() {
        placeCaretIntoCellWithText("<no parameter>")
        typeText("int")
        pressKey(KnownKeys.Tab)
        typeText("p1")
        pressKey(KnownKeys.Enter)
        assertEditorText("""
            class Class1 {
              public void method1(int p1, <choose parameter>) {
                <no statement>
              }
            }
        """)
        pressKey(KnownKeys.Backspace)
        assertFinalEditorText("""
            class Class1 {
              public void method1(int p1) {
                <no statement>
              }
            }
        """)
        assertCaretPosition("p1|")
    }
}
