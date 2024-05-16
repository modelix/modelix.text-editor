package org.modelix.editor

import org.modelix.incremental.TrackableMap

class EditorState {
    val substitutionPlaceholderPositions = TrackableMap<TemplateCellReference, SubstitutionPlaceholderPosition>()
    val forceShowOptionals = TrackableMap<TemplateCellReference, Boolean>()
    val textReplacements = TrackableMap<CellReference, String>()

    fun reset() {
        substitutionPlaceholderPositions.clear()
        forceShowOptionals.clear()
        textReplacements.clear()
    }

    fun clearTextReplacement(cell: LayoutableCell): Unit = clearTextReplacement(cell.cell)

    fun clearTextReplacement(cell: Cell): Unit = cell.data.cellReferences.forEach { clearTextReplacement(it) }

    fun clearTextReplacement(cell: CellReference): Unit = textReplacements.remove(cell)
}

class SubstitutionPlaceholderPosition(val index: Int)
