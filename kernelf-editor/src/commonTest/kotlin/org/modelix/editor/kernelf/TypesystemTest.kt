package org.modelix.editor.kernelf

import org.iets3.core.expr.base.N_DotExpression
import org.iets3.core.expr.path.N_PathElement
import org.iets3.core.expr.simpleTypes.C_NumberLiteral
import org.iets3.core.expr.simpleTypes.N_NumberLiteral
import org.iets3.core.expr.tests.N_TestSuite
import org.iets3.core.expr.toplevel.N_RecordMember
import org.iets3.core.expr.toplevel.N_RecordType
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
import org.modelix.metamodel.descendants
import org.modelix.metamodel.ofType
import org.modelix.metamodel.typed
import org.modelix.metamodel.untyped
import org.modelix.model.ModelFacade
import org.modelix.model.api.IBranch
import org.modelix.model.api.PBranch
import org.modelix.model.area.getArea
import org.modelix.model.client.IdGenerator
import org.modelix.model.data.ModelData
import org.modelix.model.repositoryconcepts.N_Module
import org.modelix.model.repositoryconcepts.models
import org.modelix.model.repositoryconcepts.rootNodes
import org.modelix.typesystem.NodeAsType
import org.modelix.typesystem.TypesystemEngine
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertIs
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class TypesystemTest {
    lateinit var recordMemberRef: N_PathElement
    lateinit var branch: IBranch
    lateinit var testSuite: N_TestSuite

    @BeforeTest
    fun beforeTest() {
        KernelfLanguages.registerAll()

        // TODO required to load the typesystem rules. This needs to be decoupled.
        val engine = EditorEngine(IncrementalEngine())
        KernelfEditor.register(engine)

        branch = IncrementalBranch(PBranch(ModelFacade.newLocalTree(), IdGenerator.getInstance(56754)))
        ModelData.fromJson(modelJson2).load(branch)

        testSuite = branch.computeRead {
            branch.getArea().getRoot().allChildren.ofType<N_Module>().models.rootNodes.ofType<N_TestSuite>().first()
        }
        recordMemberRef = branch.computeRead { testSuite.descendants<N_PathElement>().first() }
    }

    @AfterTest
    fun afterTest() {
        KernelfLanguages.languages.forEach { it.unregister() }
    }

    @Test
    fun computeType() {
        branch.runRead {
            val dot = recordMemberRef.untyped().parent?.typed() as? N_DotExpression
            assertNotNull(dot, "Dot is null")
            val left = dot.expr.get()
            assertNotNull(left, "Left is null")
            val type = TypesystemEngine.computeType(left.untyped())
            assertNotNull(type, "Type computation failed")
            assertIs<NodeAsType>(type)
            val typeAsNode = type.node.typed()
            assertIs<N_RecordType>(typeAsNode)
        }
    }
}

