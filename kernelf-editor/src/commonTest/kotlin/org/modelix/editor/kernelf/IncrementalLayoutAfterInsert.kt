package org.modelix.editor.kernelf

import org.iets3.core.expr.tests.N_AssertTestItem
import org.iets3.core.expr.tests.N_TestSuite
import org.modelix.editor.CaretSelection
import org.modelix.editor.EditorComponent
import org.modelix.editor.EditorEngine
import org.modelix.editor.IncrementalBranch
import org.modelix.editor.JSKeyboardEvent
import org.modelix.editor.JSKeyboardEventType
import org.modelix.editor.KnownKeys
import org.modelix.editor.firstLeaf
import org.modelix.editor.isVisible
import org.modelix.editor.layoutable
import org.modelix.editor.nextLeafs
import org.modelix.editor.resolveNodeCell
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

open class IncrementalLayoutAfterInsert {
    lateinit var assertTestItem: N_AssertTestItem
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
        assertTestItem = branch.computeRead { testSuite.descendants<N_AssertTestItem>().drop(1).first() }
        editor.selectAfterUpdate {
            val cell = editor.resolveNodeCell(assertTestItem)!!.firstLeaf().nextLeafs(true).first { it.isVisible() }
            println(cell.toString())
            CaretSelection(cell.layoutable()!!, 0)
        }
        editor.update()
    }

    @AfterTest
    fun afterTest() {
        KernelfLanguages.languages.forEach { it.unregister() }
    }

    @Test
    fun layoutAfterInsert() {
        editor.processKeyEvent(JSKeyboardEvent(JSKeyboardEventType.KEYDOWN, KnownKeys.Enter))
        val incrementalText = editor.getRootCell().layout.toString()
        editor.clearLayoutCache()
        val nonIncrementalText = editor.getRootCell().layout.toString()
        assertEquals(nonIncrementalText, incrementalText)
    }
}
