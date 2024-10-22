package org.modelix.editor.celltemplate

import org.modelix.editor.EditorComponent
import org.modelix.editor.ITextChangeAction
import org.modelix.editor.TextCellData

class OverrideText(val cell: TextCellData, val delegate: ITextChangeAction?) : ITextChangeAction {
    override fun isValid(value: String?): Boolean {
        return true
    }

    override fun replaceText(editor: EditorComponent, range: IntRange, replacement: String, newText: String): Boolean {
        val cellRef = cell.cellReferences.first()
        if (delegate != null && delegate.isValid(newText)) {
            editor.state.textReplacements.remove(cellRef)
            return delegate.replaceText(editor, range, replacement, newText)
        }

        if (cell.text == newText) {
            editor.state.textReplacements.remove(cellRef)
        } else {
            editor.state.textReplacements[cellRef] = newText
        }
        return true
    }
}
