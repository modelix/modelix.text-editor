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
}

class SubstitutionPlaceholderPosition(val index: Int)
