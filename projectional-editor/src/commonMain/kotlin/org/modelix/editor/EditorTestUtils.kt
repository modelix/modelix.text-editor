package org.modelix.editor

import kotlin.random.Random

object EditorTestUtils {
    val noSpace = Any()
    val newLine = Any()
    val indentChildren = Any()

    fun buildCells(template: Any): Cell {
        return when (template) {
            is Cell -> template
            noSpace -> Cell(CellData().apply { properties[CommonCellProperties.noSpace] = true })
            newLine -> Cell(CellData().apply { properties[CommonCellProperties.onNewLine] = true })
            is String -> Cell(TextCellData(template, ""))
            is List<*> -> Cell(CellData()).apply {
                template.forEach { child ->
                    when (child) {
                        indentChildren -> data.properties[CommonCellProperties.indentChildren] = true
                        is ECellLayout -> data.properties[CommonCellProperties.layout] = child
                        else -> addChild(buildCells(child!!))
                    }
                }
            }
            else -> throw IllegalArgumentException("Unsupported: $template")
        }
    }

    fun buildRandomCells(rand: Random, cellsPerLevel: Int, levels: Int): Cell {
        return buildCells(buildRandomTemplate(rand, cellsPerLevel, levels))
    }

    fun buildRandomTemplate(rand: Random, cellsPerLevel: Int, levels: Int): Any {
        return (1..cellsPerLevel).map {
            when (rand.nextInt(10)) {
                0 -> noSpace
                1 -> newLine
                2 -> indentChildren
                else -> {
                    if (levels == 0) {
                        rand.nextInt(1000, 10000).toString()
                    } else {
                        buildRandomTemplate(rand, cellsPerLevel, levels - 1)
                    }
                }
            }
        }
    }
}
