package org.modelix.editor.celltemplate

import org.modelix.constraints.ConstraintsAspect
import org.modelix.editor.CaretPositionPolicy
import org.modelix.editor.CellActionProperties
import org.modelix.editor.CellCreationContext
import org.modelix.editor.CellData
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.EditorComponent
import org.modelix.editor.IActionOrProvider
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.ICodeCompletionActionProvider
import org.modelix.editor.INonExistingNode
import org.modelix.editor.ITextChangeAction
import org.modelix.editor.NonExistingNode
import org.modelix.editor.PropertyCellReference
import org.modelix.editor.TemplateCellReference
import org.modelix.editor.TextCellData
import org.modelix.editor.replacement
import org.modelix.editor.toNonExisting
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.LeafToken
import org.modelix.editor.token.ParseResult
import org.modelix.editor.token.PropertyToken
import org.modelix.editor.token.descendentsAndSelf
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.IProperty

open class PropertyCellTemplate(concept: IConcept, val property: IProperty) :
    CellTemplate(concept), IGrammarConditionSymbol {
    var placeholderText: String = "<no ${property.getSimpleName()}>"
    var validator: ((String) -> Boolean)? = null
    var regex: Regex? = null
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        val value = node.getPropertyValue(property)
        val text = value ?: ""
        val data = TextCellData(text, if (value == null) placeholderText else "")
        data.properties[CellActionProperties.replaceText] = ChangePropertyAction(node)
        data.properties[CommonCellProperties.tabTarget] = true
        data.properties[CommonCellProperties.token] = PropertyToken(text, property, node.toNonExisting())
        data.cellReferences += PropertyCellReference(property, node.reference)
        return data
    }

    override fun toString(): String {
        return "property[${property.getSimpleName()}]"
    }

    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        return listOf(WrapPropertyValueProvider(location))
    }

    private fun validateValue(node: INonExistingNode, value: String): Boolean {
        return validator?.invoke(value)
            ?: regex?.matches(value)
            ?: ConstraintsAspect.checkPropertyValue(node, property, value).isEmpty()
    }

    override fun getSymbolConditionState(node: INode): Boolean {
        return node.getPropertyValue(property) != null
    }

    override fun setSymbolConditionFalse(node: INode) {
        return node.setPropertyValue(property, null)
    }

    override fun getSymbolTransformationAction(node: INode, optionalCell: TemplateCellReference): IActionOrProvider? {
        return WrapPropertyValueProvider(node.toNonExisting())
    }

    override fun parse(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
        return sequence {
            val leafs = input.descendentsAndSelf().filter { it.node is LeafToken }.toList()

            if (leafs.size > 1) {
                // match the whole input
                val inputText = leafs.joinToString("") { (it.node as LeafToken).text }
                if (validateValue(NonExistingNode(concept), inputText)) {
                    yield(ParseResult(null, input, null).classifyAsProperty(inputText))
                }
            }

            // match single token
            for (leaf in leafs) {
                val text = (leaf.node as LeafToken).text
                if (validateValue(NonExistingNode(concept), text)) {
                    yield(leaf.split3().classifyAsProperty(text))
                } else {
                    val trimmedText = text.trim()
                    if (trimmedText != text &&  validateValue(NonExistingNode(concept), trimmedText)) {
                        yield(leaf.split3().classifyAsProperty(trimmedText))
                    }
                }
            }
        }
    }

    private fun ParseResult.classifyAsProperty(text: String): ParseResult {
        return copy(match = PropertyToken(text, property, NonExistingNode(concept)))
    }

    inner class WrapPropertyValueProvider(val location: INonExistingNode) : ICodeCompletionActionProvider {
        override fun getApplicableActions(parameters: CodeCompletionParameters): List<IActionOrProvider> {
            return if (parameters.pattern.isNotBlank() && validateValue(location.replacement(concept), parameters.pattern)) {
                listOf(WrapPropertyValue(location, parameters.pattern))
            } else {
                emptyList()
            }
        }
    }

    inner class WrapPropertyValue(val location: INonExistingNode, val value: String) : ICodeCompletionAction {
        override fun getMatchingText(): String {
            return value
        }

        override fun getDescription(): String {
            return concept.getShortName()
        }

        override fun execute(editor: EditorComponent): CaretPositionPolicy? {
            val node = location.getOrCreateNode(concept)
            node.setPropertyValue(property, value)
            return CaretPositionPolicy(createCellReference(node))
        }
    }

    inner class ChangePropertyAction(val node: INode) : ITextChangeAction {
        override fun isValid(value: String?): Boolean {
            if (value == null) return true
            return validateValue(node.toNonExisting(), value)
        }

        override fun replaceText(editor: EditorComponent, range: IntRange, replacement: String, newText: String): Boolean {
            node.getArea().executeWrite {
                node.setPropertyValue(property, newText)
            }
            return true
        }
    }
}
