package org.modelix.editor.celltemplate

import org.modelix.editor.CellActionProperties
import org.modelix.editor.CellCreationContext
import org.modelix.editor.CellData
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.IActionOrProvider
import org.modelix.editor.INonExistingNode
import org.modelix.editor.TextCellData
import org.modelix.editor.toNonExisting
import org.modelix.editor.token.FlagToken
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.ParseResult
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.IProperty

class FlagCellTemplate(
    concept: IConcept,
    property: IProperty,
    val text: String,
) : PropertyCellTemplate(concept, property), IGrammarSymbol {
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        if (node.getPropertyValue(property) == "true") {
            return TextCellData(text, "").also {
                it.properties[CommonCellProperties.token] = FlagToken(text, property, node)
            }
        }

        val forceShow = context.editorState.forceShowOptionals[createCellReference(node)] == true
        return if (forceShow) {
            TextCellData("", text).also {
                it.properties[CommonCellProperties.isForceShown] = true
                it.properties[CellActionProperties.insert] =
                    ChangePropertyCellAction(node.toNonExisting(), property, "true")
            }
        } else {
            CellData().also {
                it.properties[CellActionProperties.show] = ForceShowOptionalCellAction(createCellReference(node))
            }
        }
    }

    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        // TODO
        return listOf()
    }

    override fun parse(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
        return findStringInParseTree(input, text)
    }
}
