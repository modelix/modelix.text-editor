package org.modelix.editor.kernelf

import org.iets3.core.expr.base.C_MinusExpression
import org.iets3.core.expr.base.C_ParensExpression
import org.iets3.core.expr.base.C_PlusExpression
import org.iets3.core.expr.base.N_ParensExpression
import org.iets3.core.expr.simpleTypes.C_NumberLiteral
import org.iets3.core.expr.simpleTypes.N_NumberLiteral
import org.modelix.editor.CaretSelection
import org.modelix.editor.EditorEngine
import org.modelix.editor.IncrementalBranch
import org.modelix.editor.JSKeyboardEvent
import org.modelix.editor.KeyLocation
import org.modelix.editor.Modifiers
import org.modelix.editor.PropertyCellReference
import org.modelix.editor.layoutable
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import org.modelix.metamodel.setNew
import org.modelix.metamodel.typed
import org.modelix.metamodel.untypedReference
import org.modelix.model.ModelFacade
import org.modelix.model.area.PArea
import kotlin.test.Test
import kotlin.test.assertEquals

class PropertyChangeTest {

    @Test
    fun test() {
        KernelfLanguages.registerAll()
        val branch = IncrementalBranch(ModelFacade.toLocalBranch(ModelFacade.newLocalTree()))
        var numberLiteral: N_NumberLiteral? = null
        val parensExpression = branch.computeWrite {
            val parensExpression = PArea(branch).getRoot().addNewChild("root", -1, C_ParensExpression._concept).typed<N_ParensExpression>()
            parensExpression.apply {
                expr.setNew(C_PlusExpression) {
                    left.setNew(C_MinusExpression) {
                        left.setNew(C_NumberLiteral) {
                            numberLiteral = this
                            value = "200"
                        }
                        right.setNew(C_NumberLiteral) {
                            value = "56"
                        }
                    }
                    right.setNew(C_NumberLiteral) {
                        value = "100"
                    }
                }
            }
        }

        val engine = EditorEngine(IncrementalEngine())
        KernelfEditor.register(engine)
        val editor = engine.editNode(parensExpression)
        editor.selectAfterUpdate {
            val cellReference = PropertyCellReference(C_NumberLiteral.value, numberLiteral!!.untypedReference())
            val cell = editor.resolveCell(cellReference)
            val layoutable = cell!!.layoutable()
            CaretSelection(layoutable!!, 0)
        }
        editor.update()
        assertEquals("200", numberLiteral!!.value)
        editor.processKeyDown(JSKeyboardEvent("8", null, "8", Modifiers.NONE, KeyLocation.STANDARD, false, false))
        assertEquals("8200", numberLiteral!!.value)


    }
}