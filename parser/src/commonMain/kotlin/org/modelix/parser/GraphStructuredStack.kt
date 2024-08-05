package org.modelix.parser

class EmptyGSS<E> : IGSStack<E> {
    override fun peek(): E = throw NoSuchElementException("Empty stack")
    override fun push(element: E): IGSStack<E> = RegularGSSNode(element, this)
    override fun pop(): Pair<E, List<IGSStack<E>>> = throw NoSuchElementException("Empty stack")
    override fun pop(n: Int): List<Pair<List<E>, IGSStack<E>>> = throw NoSuchElementException("Empty stack")
    override fun elementAt(n: Int): E = throw NoSuchElementException("Empty stack")
}

class RegularGSSNode<E>(private val element: E, private val previous: IGSStack<E>) : IGSStack<E> {
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
}

class MergeGSSNode<E>(private val element: E, private val previous: List<IGSStack<E>>) : IGSStack<E> {
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
}

fun <T> Iterable<IGSStack<T>>.push(element: T): IGSStack<T> = MergeGSSNode(element, toList())

interface IGSStack<E> {
    fun push(element: E): IGSStack<E>
    fun pop(): Pair<E, List<IGSStack<E>>>
    fun pop(n: Int): List<Pair<List<E>, IGSStack<E>>>
    fun peek(): E
    fun elementAt(n: Int): E
}

