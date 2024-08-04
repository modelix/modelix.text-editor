package org.modelix.parser

class Scanner(private val input: CharSequence, private var position: Int = 0) {

    fun next(regex: Regex): String {
        val match = checkNotNull(regex.matchAt(input, position)) {
            "$regex doesn't match input at position $position"
        }
        position += match.value.length
        return match.value
    }

    fun hasMore() = this.position < this.input.length

    fun copy() = Scanner(input, position)
}
