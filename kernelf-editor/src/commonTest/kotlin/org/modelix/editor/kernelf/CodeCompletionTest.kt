package org.modelix.editor.kernelf

import org.iets3.core.expr.simpleTypes.C_NumberLiteral
import org.iets3.core.expr.simpleTypes.N_NumberLiteral
import org.iets3.core.expr.tests.N_TestSuite
import org.modelix.editor.CaretSelection
import org.modelix.editor.Cell
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.EditorComponent
import org.modelix.editor.EditorEngine
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.IncrementalBranch
import org.modelix.editor.collectActionsBetween
import org.modelix.editor.commonAncestor
import org.modelix.editor.descendants
import org.modelix.editor.firstLeaf
import org.modelix.editor.flattenApplicableActions
import org.modelix.editor.getSubstituteActions
import org.modelix.editor.getVisibleText
import org.modelix.editor.isVisible
import org.modelix.editor.layoutable
import org.modelix.editor.previousLeaf
import org.modelix.editor.resolvePropertyCell
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import org.modelix.metamodel.ModelData
import org.modelix.metamodel.descendants
import org.modelix.metamodel.ofType
import org.modelix.model.ModelFacade
import org.modelix.model.api.IBranch
import org.modelix.model.api.PBranch
import org.modelix.model.area.getArea
import org.modelix.model.client.IdGenerator
import org.modelix.model.repositoryconcepts.N_Module
import org.modelix.model.repositoryconcepts.models
import org.modelix.model.repositoryconcepts.rootNodes
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class CodeCompletionTest {
    lateinit var numberLiteral: N_NumberLiteral
    lateinit var editor: EditorComponent
    lateinit var branch: IBranch
    lateinit var testSuite: N_TestSuite

    @BeforeTest
    fun beforeTest() {
        KernelfLanguages.registerAll()
        branch = IncrementalBranch(PBranch(ModelFacade.newLocalTree(), IdGenerator.getInstance(56754)))
        ModelData.fromJson(modelJson).load(branch)

        val engine = EditorEngine(IncrementalEngine())
        KernelfEditor.register(engine)
        testSuite = branch.computeRead { branch.getArea().getRoot().allChildren.ofType<N_Module>().models.rootNodes.ofType<N_TestSuite>().first() }
        editor = engine.editNode(testSuite)
        numberLiteral = branch.computeRead { testSuite.descendants<N_NumberLiteral>().first() }
        editor.selectAfterUpdate {
            val cell = editor.resolvePropertyCell(C_NumberLiteral.value, numberLiteral)
            CaretSelection(cell!!.layoutable()!!, 0)
        }
        editor.update()
    }

    @AfterTest
    fun afterTest() {
        KernelfLanguages.languages.forEach { it.unregister() }
    }

    @Test
    fun printModel() {
        println(editor.getRootCell().layout.toString())
    }

    @Test
    fun printActions() {
        val actions = getSubstituteActions(getNumberLiteralCell())
        val parameters = CodeCompletionParameters(editor, "")
        actions.forEach { println(it.getMatchingText() + " | " + it.getDescription()) }
    }

    @Test
    fun notEmpty() {
        val actions = getSubstituteActions(getNumberLiteralCell())
        assertTrue(actions.isNotEmpty())
    }

    @Test
    fun actionsOnNameProperty() {
        val namePropertyCell = editor.getRootCell().descendants().find { it.getVisibleText() == "stringTests" }!!
        editor.changeSelection(CaretSelection(namePropertyCell.layoutable()!!, 0))

        val firstLeaf = namePropertyCell.firstLeaf()
        assertEquals("stringTests", firstLeaf.getVisibleText())
        val previousLeaf = namePropertyCell.previousLeaf { it.isVisible() }!!
        assertEquals("test case", previousLeaf.getVisibleText())
        val commonAncestor = previousLeaf.commonAncestor(firstLeaf)
        assertEquals(namePropertyCell.parent, commonAncestor)

        collectActionsBetween(previousLeaf, firstLeaf) { cellsFullyBetween, cellsEndingBetween, cellsBeginningBetween ->
            println("fully between:\n" + cellsFullyBetween.joinToString(separator = "\n") { "  $it" })
            println("ending: \n" + cellsEndingBetween.joinToString(separator = "\n") { "  $it" })
            println("beginning: \n" + cellsBeginningBetween.joinToString(separator = "\n") { "  $it" })
            assertEquals(emptySet(), cellsFullyBetween.toSet().intersect(cellsBeginningBetween.toSet()))
            assertEquals(emptySet(), cellsFullyBetween.toSet().intersect(cellsEndingBetween.toSet()))
            assertEquals(emptySet(), cellsBeginningBetween.toSet().intersect(cellsEndingBetween.toSet()))
            emptyList()
        }

        val actions = getSubstituteActions(namePropertyCell)
        assertEquals(emptyList(), actions)
    }

    @Test
    fun noDuplicates() {
        val parameters = CodeCompletionParameters(editor, "")
        val actions = getSubstituteActions(getNumberLiteralCell())
        val knownDuplicates = setOf("none", "", "empty", "[")
        val duplicates = actions.groupBy { it.getMatchingText() }.filter { it.value.size > 1 } - knownDuplicates
        assertTrue(duplicates.isEmpty(), "Duplicate entries found: " + duplicates)
    }

    private fun getNumberLiteralCell() = editor.resolvePropertyCell(C_NumberLiteral.value, numberLiteral)!!

    private fun getSubstituteActions(cell: Cell): List<ICodeCompletionAction> {
        val parameters = CodeCompletionParameters(editor, "")
        return branch.computeRead {
            cell.getSubstituteActions().flatMap { it.flattenApplicableActions(parameters) }
                .sortedBy { it.getMatchingText() }.toList()
        }
    }
}

