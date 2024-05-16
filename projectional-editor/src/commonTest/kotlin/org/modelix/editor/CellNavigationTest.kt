package org.modelix.editor

import kotlin.test.Test
import kotlin.test.assertEquals

class CellNavigationTest {
    private val rootCell = cell("root") {
        cell("1") {
            cell("11") {
                cell("111")
                cell("112")
            }
            cell("12") {
                cell("121")
                cell("122")
            }
        }
        cell("2") {
            cell("21") {
                cell("211")
                cell("212")
            }
            cell("22") {
                cell("221")
                cell("222")
            }
        }
    }

    @Test
    fun order_of_previousCells() {
        assertEquals(
            listOf(
                "221",
                "22",
                "21",
                "212",
                "211",
                "2",
                "1",
                "12",
                "122",
                "121",
                "11",
                "112",
                "111",
                "root",
            ),
            rootCell.lastLeaf().previousCells().map { (it.data as TextCellData).text }.toList(),
        )
    }

    @Test
    fun order_of_nextCells() {
        assertEquals(
            listOf(
                "112",
                "11",
                "12",
                "121",
                "122",
                "1",
                "2",
                "21",
                "211",
                "212",
                "22",
                "221",
                "222",
                "root",
            ),
            rootCell.firstLeaf().nextCells().map { (it.data as TextCellData).text }.toList(),
        )
    }

    private fun cell(text: String, body: Cell.() -> Unit): Cell {
        return Cell(TextCellData(text)).also(body)
    }

    private fun Cell.cell(text: String, body: Cell.() -> Unit = {}): Cell {
        return Cell(TextCellData(text)).also { addChild(it) }.also(body)
    }
}
