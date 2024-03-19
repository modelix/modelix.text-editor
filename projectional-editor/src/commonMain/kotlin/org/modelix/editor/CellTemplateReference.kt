package org.modelix.editor

import org.modelix.model.api.IConceptReference
import org.modelix.model.api.INodeReference

interface ICellTemplateReference

data class RooCellTemplateReference(val conceptEditor: ConceptEditor, val subConcept: IConceptReference) : ICellTemplateReference
data class ChildCellTemplateReference(val parent: ICellTemplateReference, val index: Int) : ICellTemplateReference
data class SeparatorCellTemplateReference(val parent: ICellTemplateReference) : ICellTemplateReference

data class TemplateCellReference(val template: ICellTemplateReference, val node: INodeReference) : CellReference()
