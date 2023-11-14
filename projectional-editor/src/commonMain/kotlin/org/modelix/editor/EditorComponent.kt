package org.modelix.editor

import org.modelix.incremental.IncrementalIndex
import kotlin.math.abs
import kotlin.math.min
import kotlin.math.roundToInt

open class EditorComponent(
    val engine: EditorEngine?,
    val editorUI: IEditorComponentUI,
    private val rootCellCreator: (EditorState) -> Cell
) {
    val state: EditorState = EditorState()
    private var selection: Selection? = null
    private val cellIndex: IncrementalIndex<CellReference, Cell> = IncrementalIndex()
    private val layoutablesIndex: IncrementalIndex<Cell, LayoutableCell> = IncrementalIndex()
    private var selectionUpdater: (() -> Selection?)? = null
    protected var codeCompletionMenu: CodeCompletionMenu? = null
    private var rootCell: Cell = rootCellCreator(state).also {
        it.editorComponent = this
        cellIndex.update(it.referencesIndexList)
        layoutablesIndex.update(it.layout.layoutablesIndexList)
    }

    private val generatedHtmlMap: GeneratedHtmlMap get() = editorUI.generatedHtmlMap

    fun selectAfterUpdate(newSelection: () -> Selection?) {
        selectionUpdater = newSelection
    }

    fun resolveCell(reference: CellReference): List<Cell> = cellIndex.lookup(reference)

    fun resolveLayoutable(cell: Cell): LayoutableCell? = layoutablesIndex.lookup(cell).firstOrNull()

    private fun updateRootCell() {
        val oldRootCell = rootCell
        val newRootCell = rootCellCreator(state)
        if (oldRootCell !== newRootCell) {
            oldRootCell.editorComponent = null
            newRootCell.editorComponent = this
            rootCell = newRootCell
            cellIndex.update(rootCell.referencesIndexList)
            layoutablesIndex.update(rootCell.layout.layoutablesIndexList)
        }
    }

    open fun update() {
        updateRootCell()
        updateSelection()
    }

    fun getRootCell() = rootCell

    private fun updateSelection() {
        val updater = selectionUpdater
        selectionUpdater = null

        selection = updater?.invoke()
            ?: selection?.takeIf { it.isValid() }
            ?: selection?.update(this)
    }

    open fun changeSelection(newSelection: Selection) {
        selection = newSelection
        codeCompletionMenu = null
        update()
    }

    fun getSelection(): Selection? = selection

    fun showCodeCompletionMenu(
        anchor: LayoutableCell,
        position: CompletionPosition,
        entries: List<ICodeCompletionActionProvider>,
        pattern: String = "",
        caretPosition: Int? = null
    ) {
        codeCompletionMenu = CodeCompletionMenu(this, anchor, position, entries, pattern, caretPosition)
        codeCompletionMenu?.updateActions()
        update()
    }

    fun closeCodeCompletionMenu() {
        codeCompletionMenu = null
        update()
    }

    fun dispose() {

    }

    open fun processKeyDown(event: JSKeyboardEvent): Boolean {
        try {
            if (event.knownKey == KnownKeys.F5) {
                clearLayoutCache()
                state.reset()
                return true
            }
            for (handler in listOfNotNull(codeCompletionMenu, selection)) {
                if (handler.processKeyDown(event)) return true
            }
            return false
        } finally {
            update()
        }
    }

    open fun processClick(event: JSMouseEvent): Boolean {
        val targets = editorUI.getElementsAt(event.x, event.y)
        for (target in targets) {
            val htmlElement = target as? IVirtualDom.HTMLElement
            val producer: IProducesHtml = htmlElement?.let { generatedHtmlMap.getProducer(it) } ?: continue
            when (producer) {
                is LayoutableCell -> {
                    val layoutable = producer as? LayoutableCell ?: continue
                    val text = layoutable.toText() // htmlElement.innerText
                    val cellAbsoluteBounds = editorUI.getInnerBounds(htmlElement) // htmlElement.getAbsoluteInnerBounds()
                    val relativeClickX = event.x - cellAbsoluteBounds.x
                    val characterWidth = cellAbsoluteBounds.width / text.length
                    val caretPos = (relativeClickX / characterWidth).roundToInt()
                        .coerceAtMost(layoutable.cell.getMaxCaretPos())
                    changeSelection(CaretSelection(layoutable, caretPos))
                    return true
                }
                is Layoutable -> {
                    if (selectClosestInLine(producer.getLine() ?: continue, event.x)) return true
                }
                is TextLine -> {
                    if (selectClosestInLine(producer, event.x)) return true
                }
                else -> continue
            }
        }
        return false
    }

    private fun selectClosestInLine(line: TextLine, absoluteClickX: Double): Boolean {
        val words = line.words.filterIsInstance<LayoutableCell>()
        val closest = words.map { it to generatedHtmlMap.getOutput(it)!! }.minByOrNull {
            min(
                abs(absoluteClickX - editorUI.getOuterBounds(it.second).minX()),
                abs(absoluteClickX - editorUI.getOuterBounds(it.second).maxX())
            )
        } ?: return false
        val caretPos = if (absoluteClickX <= editorUI.getOuterBounds(closest.second).minX()) {
            0
        } else {
            closest.first.cell.getSelectableText()?.length ?: 0
        }
        changeSelection(CaretSelection(closest.first, caretPos))
        return true
    }

    fun clearLayoutCache() {
        rootCell.descendantsAndSelf().forEach { it.clearCachedLayout() }
    }

    companion object {
        val MAIN_LAYER_CLASS_NAME = "main-layer"
    }
}

interface IKeyboardHandler {
    fun processKeyDown(event: JSKeyboardEvent): Boolean
}