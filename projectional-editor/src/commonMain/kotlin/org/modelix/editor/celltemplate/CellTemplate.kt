package org.modelix.editor.celltemplate

import org.modelix.editor.CellActionProperties
import org.modelix.editor.CellCreationContext
import org.modelix.editor.CellData
import org.modelix.editor.CellProperties
import org.modelix.editor.ChildCellTemplateReference
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.ECellLayout
import org.modelix.editor.EditorEngine
import org.modelix.editor.EditorState
import org.modelix.editor.IActionOrProvider
import org.modelix.editor.ICellTemplateReference
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.INonExistingNode
import org.modelix.editor.TemplateCellReference
import org.modelix.editor.TextCellData
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.ParseResult
import org.modelix.editor.token.UnclassifiedParseTreeNode
import org.modelix.editor.token.assertNotInfinite
import org.modelix.editor.token.diagonalFlatMap
import org.modelix.editor.token.isBlank
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.untyped
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.INodeReference
import kotlin.jvm.JvmName

abstract class CellTemplate(val concept: IConcept) {
    val properties = CellProperties()
    private val children: MutableList<CellTemplate> = ArrayList()

    @get:JvmName("getReferenceField")
    @set:JvmName("setReferenceField")
    protected var reference: ICellTemplateReference? = null
    val withNode: MutableList<(node: INode) -> Unit> = ArrayList()
    fun apply(context: CellCreationContext, node: INode): CellData {
        val cellData = createCell(context, node)
        cellData.properties.addAll(properties)
        cellData.children.addAll(applyChildren(context, node, cellData))
        if (properties[CommonCellProperties.layout] == ECellLayout.VERTICAL) {
            cellData.children.drop(1).forEach { (it as CellData).properties[CommonCellProperties.onNewLine] = true }
        }
        withNode.forEach { it(node) }
        val cellReference: TemplateCellReference = createCellReference(node)
        cellData.cellReferences.add(cellReference)
        applyTextReplacement(cellData, context.editorState)
        return cellData
    }
    protected open fun applyChildren(context: CellCreationContext, node: INode, cell: CellData): List<CellData> {
        return children.map { it.apply(context, node) }
    }
    protected abstract fun createCell(context: CellCreationContext, node: INode): CellData

    open fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        val completionText = properties[CommonCellProperties.codeCompletionText]
        if (completionText != null) {
            return listOf(InstantiateNodeCompletionAction(completionText, concept, location))
        }
        return children.asSequence().mapNotNull { it.getInstantiationActions(location, parameters) }.firstOrNull()
    }

    fun getSideTransformActions(before: Boolean, nodeToReplace: INode): List<ICodeCompletionAction>? {
        val symbols = getGrammarSymbols().toList()
        val conceptToReplace = nodeToReplace.concept ?: return null
        return symbols.mapIndexedNotNull { index, symbol ->
            if (symbol is ChildCellTemplate && conceptToReplace.isSubConceptOf(symbol.link.targetConcept)) {
                val prevNextIndex = if (before)index - 1 else index + 1
                val prevNextSymbol = symbols.getOrNull(prevNextIndex) ?: return@mapIndexedNotNull null
                return@mapIndexedNotNull prevNextSymbol.createWrapperAction(nodeToReplace, symbol.link)
            }
            return@mapIndexedNotNull null
        }.flatten()
    }

    open fun getGrammarSymbols(): Sequence<IGrammarSymbol> {
        return if (this is IGrammarSymbol) {
            sequenceOf(this)
        } else {
            children.asSequence().flatMap { it.getGrammarSymbols() }
        }
    }

    fun addChild(child: CellTemplate) {
        children.add(child)
        reference?.let { child.setReference(ChildCellTemplateReference(it, children.size - 1)) }
    }

    fun getChildren(): List<CellTemplate> = children

    open fun setReference(ref: ICellTemplateReference) {
        if (reference != null) throw IllegalStateException("reference is already set")
        reference = ref
        children.forEachIndexed { index, child -> child.setReference(ChildCellTemplateReference(ref, index)) }
    }

    fun getReference() = reference ?: throw IllegalStateException("reference isn't set yet")

    fun createCellReference(node: Any) = when (node) {
        is INodeReference -> createCellReference(node)
        is INode -> createCellReference(node)
        is ITypedNode -> createCellReference(node)
        else -> throw IllegalArgumentException("Unsupported node type: $node")
    }
    fun createCellReference(nodeRef: INodeReference) = TemplateCellReference(getReference(), nodeRef)
    fun createCellReference(node: INode) = createCellReference(node.reference)
    fun createCellReference(node: ITypedNode) = createCellReference(node.untyped())

    private fun applyTextReplacement(cellData: CellData, editorState: EditorState) {
        if (cellData is TextCellData) {
            val cellRef = cellData.cellReferences.firstOrNull()
            if (cellRef != null) {
                editorState.textReplacements[cellRef]
                    ?.let { cellData.properties[CommonCellProperties.textReplacement] = it }
                cellData.properties[CellActionProperties.replaceText] =
                    OverrideText(cellData, cellData.properties[CellActionProperties.replaceText])
            }
        }
        cellData.children.filterIsInstance<CellData>().forEach { applyTextReplacement(it, editorState) }
    }

    open fun parse(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
        val symbols = getGrammarSymbols().filter {
            !(it is ConstantCellTemplate && it.text.isEmpty())
        }.toList()
        if (symbols.isEmpty()) return emptySequence()

        val symbolTriples = symbols.iterateTriples()
        return symbolTriples.diagonalFlatMap { symbolTriple ->
            match(symbolTriple, input, context)
        }
    }
}

data class ParseContext(val engine: EditorEngine, val conceptsPath: List<IConcept> = emptyList(), val inputs: List<IParseTreeNode> = emptyList()) {
    fun withConcept(c: IConcept, input: IParseTreeNode) = copy(conceptsPath = conceptsPath + c, inputs = inputs + input)
}

fun match(symbols: SymbolTriple, input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
    return symbols.second.parse(input, context).diagonalFlatMap { centerResult ->
        val leftAndCenterResults = matchNext(centerResult, centerResult.before, symbols.first, context) { leftResult ->
            check(leftResult.after.isBlank()) { "Not empty: " + leftResult.after }
            ParseResult(
                leftResult.before,
                UnclassifiedParseTreeNode.createTree(leftResult.match, centerResult.match)!!,
                centerResult.after
            )
        }
        leftAndCenterResults.diagonalFlatMap { leftAndCenterResult ->
            matchNext(leftAndCenterResult, leftAndCenterResult.after, symbols.third, context) { rightResult ->
                check(rightResult.before.isBlank()) { "Not empty: " + rightResult.before }
                ParseResult(
                    leftAndCenterResult.before,
                    UnclassifiedParseTreeNode.createTree(leftAndCenterResult.match, rightResult.match)!!,
                    rightResult.after
                )
            }
        }
    }
}

private fun matchNext(inputResult: ParseResult, siblingResult: IParseTreeNode?, symbols: List<IGrammarSymbol>, context: ParseContext, onMatch: (ParseResult) -> ParseResult): Sequence<ParseResult> {
    return if (symbols.isEmpty()) {
        if (siblingResult.isBlank()) {
            sequenceOf(inputResult)
        } else {
            emptySequence()
        }
    } else {
        symbols.iterateTriples().diagonalFlatMap {
            match(it, siblingResult ?: UnclassifiedParseTreeNode(emptyList()), context).map { onMatch(it) }
        }
    }
}

fun IGrammarSymbol.parse(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
    return (this as CellTemplate).parse(input, context)
}

fun List<IGrammarSymbol>.iterateTriples(): Sequence<SymbolTriple> {
    val symbols = this
    if (symbols.isEmpty()) return emptySequence()
    if (symbols.size == 1) return sequenceOf(Triple(emptyList(), symbols.single(), emptyList()))
    val triples = symbols.withIndex().sortedBy {
        when (it.value) {
            is ConstantCellTemplate -> 0
            is FlagCellTemplate -> 1
            is ChildCellTemplate -> 2
            is ReferenceCellTemplate -> 3
            is PropertyCellTemplate -> 4
            else -> throw UnsupportedOperationException("Unknown symbol type: ${it.value}")
        }
    }.asSequence().map { (index, symbol) ->
        Triple(
            symbols.take(index),
            symbol,
            symbols.drop(index + 1)
        )
    }
    if (symbols.size == 2) {
        // There are only two option that do the same and just start with a different symbol.
        // One of them is the preferred one.
        return triples.take(1)
    }

    val hasConstants = symbols.any { it is ConstantCellTemplate }
    if (hasConstants) {
        // Splitting around constants is already the best option.
        // The remaining ones are not expected to deliver results faster.
        return triples.filter { it.second is ConstantCellTemplate }
    }

    return triples
}

typealias SymbolTriple = Triple<List<IGrammarSymbol>, IGrammarSymbol, List<IGrammarSymbol>>

fun CellTemplate.firstLeaf(): CellTemplate = if (getChildren().isEmpty()) this else getChildren().first().firstLeaf()
fun CellTemplate.descendants(includeSelf: Boolean = false): Sequence<CellTemplate> {
    return if (includeSelf) {
        sequenceOf(this) + descendants(false)
    } else {
        getChildren().asSequence().flatMap { it.descendants(true) }
    }
}
