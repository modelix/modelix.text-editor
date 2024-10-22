package org.modelix.editor.celltemplate

import org.modelix.editor.CaretPositionPolicy
import org.modelix.editor.EditorComponent
import org.modelix.editor.ICaretPositionPolicy
import org.modelix.editor.ICellAction
import org.modelix.editor.INonExistingNode
import org.modelix.editor.PropertyCellReference
import org.modelix.model.api.IProperty

class ChangePropertyCellAction(
    val node: INonExistingNode,
    val property: IProperty,
    val value: String,
) : ICellAction {
    override fun execute(editor: EditorComponent): ICaretPositionPolicy? {
        val node = editor.runWrite {
            node.getOrCreateNode().also {
                it.setPropertyValue(property, value)
            }
        }
        return CaretPositionPolicy(PropertyCellReference(property, node.reference))
    }

    override fun isApplicable(): Boolean {
        return true
    }
}
