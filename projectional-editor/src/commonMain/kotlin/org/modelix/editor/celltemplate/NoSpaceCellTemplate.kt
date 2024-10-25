package org.modelix.editor.celltemplate

import org.modelix.editor.CellCreationContext
import org.modelix.editor.CellData
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.ICompletionTokenOrList
import org.modelix.editor.SpaceCompletionToken
import org.modelix.editor.SpaceTokenType
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode

class NoSpaceCellTemplate(concept: IConcept) :
    CellTemplate(concept) {
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        return CellData().also { cell -> cell.properties[CommonCellProperties.noSpace] = true }
    }

    override fun toCompletionToken(): ICompletionTokenOrList? {
        return SpaceCompletionToken(SpaceTokenType.NONE)
    }
}
