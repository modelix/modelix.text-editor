package org.modelix.editor.celltemplate

import org.modelix.editor.CaretPositionPolicy
import org.modelix.editor.EditorComponent
import org.modelix.editor.EditorState
import org.modelix.editor.ICellAction
import org.modelix.editor.SubstitutionPlaceholderPosition
import org.modelix.editor.TemplateCellReference

class InsertSubstitutionPlaceholderAction(
    val editorState: EditorState,
    val ref: TemplateCellReference,
    val index: Int,
) : ICellAction {
    override fun isApplicable(): Boolean = true

    override fun execute(editor: EditorComponent): CaretPositionPolicy {
        editorState.substitutionPlaceholderPositions[ref] = SubstitutionPlaceholderPosition(index)
        editorState.textReplacements.remove(PlaceholderCellReference(ref))
        return CaretPositionPolicy(PlaceholderCellReference(ref))
    }
}
