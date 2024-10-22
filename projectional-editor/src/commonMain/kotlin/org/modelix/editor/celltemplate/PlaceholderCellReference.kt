package org.modelix.editor.celltemplate

import org.modelix.editor.CellReference
import org.modelix.editor.TemplateCellReference

data class PlaceholderCellReference(val childCellRef: TemplateCellReference) : CellReference()
