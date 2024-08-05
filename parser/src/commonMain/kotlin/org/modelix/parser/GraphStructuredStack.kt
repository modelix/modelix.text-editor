package org.modelix.parser

class EmptyGSS<E : IGSSElement> : IGSStack<E> {
    override fun peek(): E = throw NoSuchElementException("Empty stack")
    override fun push(element: E): IGSStack<E> = RegularGSSNode(element, this)
    override fun pop(): Pair<E, List<IGSStack<E>>> = throw NoSuchElementException("Empty stack")
    override fun pop(n: Int): List<Pair<List<E>, IGSStack<E>>> = throw NoSuchElementException("Empty stack")
    override fun elementAt(n: Int): E = throw NoSuchElementException("Empty stack")
    override fun toString(): String = ""
    override fun tryMerge(other: IGSStack<E>): IGSStack<E>? {
        return if (other is EmptyGSS) this else null
    }
}

class RegularGSSNode<E : IGSSElement>(private val element: E, private val previous: IGSStack<E>) : IGSStack<E> {
    override fun peek(): E = element
    override fun push(element: E): IGSStack<E> = RegularGSSNode(element, this)
    override fun pop(): Pair<E, List<IGSStack<E>>> = element to listOf(previous)
    override fun pop(n: Int): List<Pair<List<E>, IGSStack<E>>> {
        return when (n) {
            0 -> listOf(emptyList<E>() to this)
            1 -> listOf(listOf(element) to previous)
            else -> previous.pop(n - 1).map { popped: Pair<List<E>, IGSStack<E>> ->
                listOf(element) + popped.first to popped.second
            }
        }
    }

    override fun elementAt(n: Int): E {
        return if (n == 0) element else previous.elementAt(n - 1)
    }

    override fun tryMerge(other: IGSStack<E>): IGSStack<E>? {
        if (other == this) return this
        if (other is RegularGSSNode) {
            val mergedEl = (element.merge(other.element) ?: return null) as E
            val mergedPrev = other.previous.tryMerge(previous)
            return if (mergedPrev == null) {
                MergeGSSNode<E>(mergedEl, listOf(previous, other.previous))
            } else {
                RegularGSSNode(mergedEl, mergedPrev)
            }
        } else {
            return null
        }
    }

    override fun toString(): String {
        return "$previous | $element"
    }
}

class MergeGSSNode<E : IGSSElement>(private val element: E, private val previous: List<IGSStack<E>>) : IGSStack<E> {
    override fun peek(): E = element
    override fun push(element: E): IGSStack<E> = RegularGSSNode(element, this)
    override fun pop(): Pair<E, List<IGSStack<E>>> = element to previous
    override fun pop(n: Int): List<Pair<List<E>, IGSStack<E>>> {
        return when (n) {
            0 -> listOf(emptyList<E>() to this)
            1 -> previous.map { listOf(element) to it }
            else -> previous.flatMap { prev ->
                prev.pop(n - 1).map { popped: Pair<List<E>, IGSStack<E>> ->
                    listOf(element) + popped.first to popped.second
                }
            }
        }
    }
    override fun elementAt(n: Int): E {
        return if (n == 0) element else error("Stack is merged and has multiple values")
    }

    override fun tryMerge(other: IGSStack<E>): IGSStack<E>? {
        if (other == this) return this
        if (other is MergeGSSNode) {
            val mergedEl = (element.merge(other.element) ?: return null) as E
            return MergeGSSNode<E>(mergedEl, previous + other.previous)
        } else if (other is RegularGSSNode) {
            val mergedEl = (element.merge(other.peek()) ?: return null) as E
            return MergeGSSNode<E>(mergedEl, previous + other.pop().second)
        } else {
            return null
        }
    }

    override fun toString(): String {
        return "merge/${previous.size} | $element"
    }
}

fun <T : IGSSElement> Iterable<IGSStack<T>>.push(element: T): IGSStack<T> {

    return MergeGSSNode(element, toList())
}

interface IGSStack<E : IGSSElement> {
    fun push(element: E): IGSStack<E>
    fun pop(): Pair<E, List<IGSStack<E>>>
    fun pop(n: Int): List<Pair<List<E>, IGSStack<E>>>
    fun peek(): E
    fun elementAt(n: Int): E
    fun tryMerge(other: IGSStack<E>): IGSStack<E>?
}

interface IGSSElement {
    fun merge(other: IGSSElement) : IGSSElement?
}
