package org.modelix.editor

import org.modelix.editor.token.diagonalFlatMap
import kotlin.test.Test
import kotlin.test.assertEquals

class DiagonalFlatMapTest {

    @Test
    fun test() {
        val seqA = sequenceOf(1, 2, 3, 4)
        val seqB = sequenceOf("A", "B", "C")
        val actual = seqA.diagonalFlatMap { a ->
            seqB.map { b -> b + a }
        }.toList()
        println(actual)

        /*
            A1 A2 A3 A4
            B1 B2 B3 B4
            C1 C2 C3 C4
         */
        assertEquals(
            listOf("A1", "B1", "A2", "C1", "B2", "A3", "C2", "B3", "A4", "C3", "B4", "C4"),
            actual
        )
    }
}
