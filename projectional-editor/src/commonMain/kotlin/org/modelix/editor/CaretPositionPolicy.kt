package org.modelix.editor

import org.modelix.model.api.INode

interface ICaretPositionPolicy {
    fun getBestSelection(editor: EditorComponent): CaretSelection?
}

data class CaretPositionPolicy(
    private val avoidedCellRefs: Set<CellReference>,
    private val preferredCellRefs: Set<CellReference>,
) : ICaretPositionPolicy {
    constructor(preferredCellRef: CellReference) : this(emptySet(), setOf(preferredCellRef))
    constructor(preferredNode: INode) : this(NodeCellReference(preferredNode.reference))

    fun prefer(cellReference: CellReference) = copy(preferredCellRefs = preferredCellRefs + cellReference)
    fun avoid(cellReference: CellReference) = copy(avoidedCellRefs = avoidedCellRefs + cellReference)

    fun merge(other: CaretPositionPolicy) = CaretPositionPolicy(
        avoidedCellRefs + other.avoidedCellRefs,
        preferredCellRefs + other.preferredCellRefs,
    )

    override fun getBestSelection(editor: EditorComponent): CaretSelection? {
        val candidates = preferredCellRefs
            .flatMap { editor.resolveCell(it) }
            .flatMap { it.descendantsAndSelf() }
            .mapNotNull { editor.resolveLayoutable(it) }

        val best = candidates
            .sortedByDescending { it.cell.isTabTarget() }
            .sortedBy { it.cell.ancestors(true).filter { isAvoided(it) }.count() }
            .firstOrNull() ?: return null

        return CaretSelection(best, (best.cell.getSelectableText() ?: "").length)
    }

    private fun isAvoided(cell: Cell) = cell.data.cellReferences.intersect(avoidedCellRefs).isNotEmpty()
}

enum class CaretPositionType {
    START,
    END,
}

class SavedCaretPosition(
    val previousLeafs: Set<CellReference>,
    val nextLeafs: Set<CellReference>,
    val selectedCell: CellReference?,
) : ICaretPositionPolicy {
    constructor(selectedCell: Cell) : this(
        selectedCell.previousLeafs(false).mapNotNull { it.data.cellReferences.firstOrNull() }.toSet(),
        selectedCell.nextLeafs(false).mapNotNull { it.data.cellReferences.firstOrNull() }.toSet(),
        selectedCell.data.cellReferences.firstOrNull(),
    )

    override fun getBestSelection(editor: EditorComponent): CaretSelection? {
        if (selectedCell != null) {
            val resolvedCell = editor.resolveCell(selectedCell).firstOrNull()?.layoutable()
            if (resolvedCell != null) {
                return CaretSelection(resolvedCell, resolvedCell.getMaxCaretPos())
            }
        }

        val leftCell = previousLeafs.asSequence().flatMap { editor.resolveCell(it) }.firstOrNull()
        val rightCell = nextLeafs.asSequence().flatMap { editor.resolveCell(it) }.firstOrNull()
        if (leftCell != null && rightCell != null) {
            val centerCells = leftCell.nextLeafs(false).takeWhile { it != rightCell }.mapNotNull { it.layoutable() }
            val lastCell = centerCells.lastOrNull()
            if (lastCell != null) {
                return CaretSelection(lastCell, lastCell.getMaxCaretPos())
            }
        }

        if (leftCell != null) {
            val layoutable = leftCell.layoutable()
            if (layoutable != null) {
                return CaretSelection(layoutable, layoutable.getMaxCaretPos())
            }
        }

        if (rightCell != null) {
            val layoutable = rightCell.layoutable()
            if (layoutable != null) {
                return CaretSelection(layoutable, 0)
            }
        }

        return null
    }

    companion object {
        fun saveAndRun(editor: EditorComponent, body: () -> Unit): SavedCaretPosition? {
            val savedCaretPosition = editor.getSelection()?.getSelectedCells()?.firstOrNull()?.let { SavedCaretPosition(it) }
            body()
            return savedCaretPosition
        }
    }
}
