package org.modelix.editor.celltemplate

import org.modelix.editor.EditorEngine
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.ParseResult
import org.modelix.model.api.IConcept

abstract class ParseContext {
    abstract val depth: Int
    abstract val parseResults: MutableMap<String, RecordedResults>

    fun withConcept(c: IConcept, input: IParseTreeNode): ParseContext {
        return ConceptParseContext(this, c)
    }

    abstract fun getEngine(): EditorEngine
}

class RecordedResults {
    val parseTree: MutableSet<String> = LinkedHashSet()
    val matches: MutableMap<String, MutableSet<String>> = LinkedHashMap()

    override fun toString(): String {
        return "${parseTree.size} / ${matches.size}"
    }
}

class RootParseContext(
    private val engine: EditorEngine
) : ParseContext() {
    override val depth: Int get() = 1
    override val parseResults: MutableMap<String, RecordedResults> = LinkedHashMap()

    override fun getEngine(): EditorEngine = engine
}

abstract class ChildParseContext(
    val parent: ParseContext
) : ParseContext() {
    override val depth: Int = parent.depth + 1
    override fun getEngine(): EditorEngine = parent.getEngine()
    override val parseResults: MutableMap<String, RecordedResults> get() = parent.parseResults
}

class ConceptParseContext(
    parent: ParseContext,
    concept: IConcept
) : ChildParseContext(parent)

fun Sequence<ParseResult>.recordParseResults(context: ParseContext, input: IParseTreeNode): Sequence<ParseResult> {
    val set = context.parseResults.getOrPut(input.toString()) { RecordedResults() }
    return onEach { set.parseTree.add(it.toString()) }
}

fun Sequence<ParseResult>.recordMatches(context: ParseContext, input: IParseTreeNode, symbols: SymbolTriple): Sequence<ParseResult> {
    val set = context.parseResults.getOrPut(input.toString()) { RecordedResults() }
        .matches.getOrPut(symbols.toString()) { LinkedHashSet() }
    return onEach { set.add(it.toString()) }

}
