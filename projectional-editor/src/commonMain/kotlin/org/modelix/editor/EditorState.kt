package org.modelix.editor

import org.modelix.incremental.TrackableMap

class EditorState {
    val substitutionPlaceholderPositions = TrackableMap<TemplateCellReference, SubstitutionPlaceholderPosition>()
    val textReplacements = TrackableMap<CellReference, String>()

    fun reset() {
        substitutionPlaceholderPositions.clear()
        textReplacements.clear()
    }
}

class SubstitutionPlaceholderPosition(val index: Int)
