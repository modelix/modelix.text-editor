package org.modelix.editor.kernelf

import kotlinx.browser.document
import kotlinx.html.dom.create
import kotlinx.html.js.div
import org.iets3.core.expr.tests.N_AssertTestItem
import org.iets3.core.expr.tests.N_TestSuite
import org.modelix.editor.*
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
import kotlin.test.*

open class IncrementalLayoutAfterInsertJS {
    lateinit var assertTestItem: N_AssertTestItem
    lateinit var editor: JsEditorComponent
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
        editor = JsEditorComponent(engine, { editorState -> branch.computeRead { engine.createCell(editorState, testSuite) } })
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

    @Ignore
    @Test
    fun domAfterInsert() {
        val containerElement = document.create.div()
        var consumer = JSDom(containerElement.ownerDocument!!).let { vdom -> IncrementalVirtualDOMBuilder(vdom, vdom.wrap(containerElement)) }
        val initialHtml = editor.getRootCell().layout.toHtml(consumer).unwrap().outerHTML

        editor.processKeyEvent(JSKeyboardEvent(JSKeyboardEventType.KEYDOWN, KnownKeys.Enter))
        consumer = JSDom(containerElement.ownerDocument!!).let { vdom -> IncrementalVirtualDOMBuilder(vdom, vdom.wrap(containerElement)) }
        val incrementalHtml = editor.getRootCell().layout.toHtml(consumer).unwrap().outerHTML

        editor.clearLayoutCache()

        consumer = JSDom(containerElement.ownerDocument!!).let { vdom -> IncrementalVirtualDOMBuilder(vdom, vdom.wrap(containerElement)) }
        val nonIncrementalHtml = editor.getRootCell().layout.toHtml(consumer).unwrap().outerHTML
        assertEquals(nonIncrementalHtml, incrementalHtml)
    }
}
