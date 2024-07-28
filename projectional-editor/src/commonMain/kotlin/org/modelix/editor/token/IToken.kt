package org.modelix.editor.token

import org.modelix.editor.INonExistingNode
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink

sealed interface IToken : IParseTreeNode

sealed class LeafToken(val text: String) : IToken {
    override val children: List<IToken>
        get() = emptyList()
}
class UnclassifiedToken(text: String) : LeafToken(text) {
    override fun toString(): String {
        return text
    }
}
open class PropertyToken(text: String, val property: IProperty, val node: INonExistingNode) : LeafToken(text) {
    override fun toString(): String {
        return "property[${property.getSimpleName()}=$text]"
    }
}
class ConstantToken(text: String) : LeafToken(text) {
    override fun toString(): String {
        return "constant[$text]"
    }
}
class FlagToken(text: String, property: IProperty, node: INonExistingNode) : PropertyToken(text, property, node)
class ReferenceToken(text: String, val link: IReferenceLink, val sourceNode: INode) : LeafToken(text)

interface IParseTreeNode {
    val children: List<IParseTreeNode>
}
class NodeParseTreeNode(val node: INode, override val children: List<IParseTreeNode>) : IParseTreeNode
class ConceptParseTreeNode(val concept: IConcept, override val children: List<IParseTreeNode>) : IParseTreeNode {
    override fun toString(): String {
        return "${concept.getShortName()}{${children.joinToString(" ")}}"
    }
}

class UnclassifiedParseTreeNode(override val children: List<IParseTreeNode>) : IParseTreeNode {
    override fun toString(): String {
        return "(" + children.joinToString(" ") + ")"
    }

    companion object {
        fun createTree(vararg nodes: IParseTreeNode?): IParseTreeNode? {
            return createTree(nodes.toList().filterNotNull())
        }

        fun createTree(nodes: List<IParseTreeNode>): IParseTreeNode? {
            return when (nodes.size) {
                0 -> null
                1 -> nodes.single()
                else -> UnclassifiedParseTreeNode(nodes)
            }
        }

        fun unwrap(node: IParseTreeNode): List<IParseTreeNode> {
            return if (node is UnclassifiedParseTreeNode) node.children else listOf(node)
        }
    }
}

fun IParseTreeNode?.orEmpty() = this ?: UnclassifiedParseTreeNode(emptyList())

data class ParseResult(val before: IParseTreeNode?, val match: IParseTreeNode, val after: IParseTreeNode?) {
    fun merge(right: ParseResult): ParseResult {
        check(this.after.isBlank()) { "Unconsumed tokens: " + this.after }
        check(right.before.isBlank()) { "Unconsumed tokens: " + this.before }
        return ParseResult(
            this.before,
            UnclassifiedParseTreeNode.createTree(this.match, right.match)!!,
            right.after
        )
    }

    operator fun plus(right: ParseResult): ParseResult = merge(right)

    fun dropBefore() = copy(before = null)
    fun dropAfter() = copy(after = null)
}

fun IParseTreeNode?.isBlank(): Boolean {
    return when (this) {
        null -> true
        is LeafToken -> this.text.isBlank()
        else -> this.children.all { it.isBlank() }
    }
}

class ParseTreePath(val parent: ParseTreePath?, val node: IParseTreeNode) {
    fun children(): Sequence<ParseTreePath> = node.children.asSequence().map { ParseTreePath(this, it) }
    fun descendants(): Sequence<ParseTreePath> = children().flatMap { it.descendantsAndSelf() }
    fun descendantsAndSelf(): Sequence<ParseTreePath> = sequenceOf(this) + descendants()

    fun split2(before: Boolean): Pair<IParseTreeNode?, IParseTreeNode?> {
        if (parent == null) return if (before) Pair(null, node) else Pair(node, null)
        val siblings = parent.node.children
        val index = siblings.indexOf(node) + (if (before) 0 else 1)
        check(index != -1)
        return Pair(
            UnclassifiedParseTreeNode.createTree(siblings.take(index)),
            UnclassifiedParseTreeNode.createTree(siblings.drop(index))
        )
    }

    fun split3(): ParseResult {
        if (parent == null) return ParseResult(null, node, null)
        val siblings = parent.node.children
        val index = siblings.indexOf(node)
        check(index != -1)
        return ParseResult(
            UnclassifiedParseTreeNode.createTree(siblings.take(index)),
            node,
            UnclassifiedParseTreeNode.createTree(siblings.drop(index + 1))
        )
    }
}

fun IParseTreeNode.descendentsAndSelf(): Sequence<ParseTreePath> = ParseTreePath(null, this).descendantsAndSelf()
fun IParseTreeNode.descendents(): Sequence<ParseTreePath> = ParseTreePath(null, this).descendants()

fun String.withoutWhiteSpace(): String {
    return this.filterNot(Char::isWhitespace)
}

val debugMode = false
/**
 * How do you iterate an infinite number of infinitely long lists?
 * If you image the elements as a two-dimensional grid then by starting in one corner and moving in a diagonal pattern.
 * For the parsing algorithm it means to avoid traversing too deep into a branch with many or infinite number of
 * elements before delivering any results.
 */
fun <T, R> Sequence<T>.diagonalFlatMap(body: (T) -> Sequence<R>): Sequence<R> {
    if (debugMode) {
        return toList().flatMap { body(it).toList() }.asSequence()
    }

    val input = this.assertNotInfinite()
    return sequence {
        val mainItr = input.iterator()
        val subIterators = ArrayList<Iterator<R>>()
        while (true) {
            if (mainItr.hasNext()) {
                subIterators.add(body(mainItr.next()).assertNotInfinite().iterator())
            }
            if (subIterators.isEmpty()) break
            val listItr = subIterators.listIterator()
            while (listItr.hasNext()) {
                val currentSubIterator = listItr.next()
                if (currentSubIterator.hasNext()) {
                    yield(currentSubIterator.next())
                } else {
                    listItr.remove()
                }
            }
        }
    }
}

fun <T> Sequence<T>.assertNotInfinite(debugInfo: Any? = null): Sequence<T> {
    var size = 0
    val creationTrace = Exception()
    return this.map {
        size++
        if (size > 10000) {
            throw IllegalStateException("Too many elements. $debugInfo", creationTrace)
        }
        it
    }
}
