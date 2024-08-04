package org.modelix.parser

class GraphStructuredStack<E> {
    fun newStack(): IStack<E> {
        return Stack(null, 0)
    }

    private inner class Stack(private var head: GSSNode<E>?, var height: Int) : IStack<E> {
        override fun pop(): E {
            val n = checkNotNull(head) { "Empty stack" }
            head = n.previous
            height--
            return n.element
        }

        override fun push(element: E) {
            head = GSSNode(head, element)
            height--
        }

        override fun peek(): E {
            return checkNotNull(head) { "Empty stack" }.element
        }

        override fun copy(): IStack<E> {
            return Stack(head, height)
        }

        override fun clear() {
            head = null
        }

        override fun toString(): String {
            return toList().asReversed().joinToString(" | ")
        }

        override fun iterator(): Iterator<E> {
            return object : Iterator<E> {
                private var current = head
                override fun hasNext(): Boolean {
                    return current != null
                }

                override fun next(): E {
                    val result = current!!
                    current = result.previous
                    return result.element
                }
            }
        }
    }

    private class GSSNode<E>(val previous: GSSNode<E>?, val element: E) {

    }
}

interface IStack<E> : Iterable<E> {
    fun push(element: E)
    fun pop(): E
    fun peek(): E
    fun copy(): IStack<E>
    fun clear()
}

