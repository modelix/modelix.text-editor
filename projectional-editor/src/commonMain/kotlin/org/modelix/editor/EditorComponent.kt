package org.modelix.editor

import kotlinx.html.TagConsumer
import kotlinx.html.div
import org.modelix.incremental.IncrementalIndex
import org.modelix.model.area.IArea
import kotlin.math.abs
import kotlin.math.min
import kotlin.math.roundToInt

open class EditorComponent(
    val engine: EditorEngine?,
    val virtualDom: IVirtualDom = IVirtualDom.newInstance(),
    private val transactionManager: IArea? = null,
    private val rootCellCreator: (EditorState) -> Cell,
) : IProducesHtml {
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
    private var selectionView: SelectionView<*>? = null
    val generatedHtmlMap = GeneratedHtmlMap()
    private var highlightedLine: IVirtualDom.HTMLElement? = null
    private var highlightedCell: IVirtualDom.HTMLElement? = null
    fun getMainLayer(): IVirtualDom.HTMLElement? {
        return getHtmlElement()?.childNodes?.filterIsInstance<IVirtualDom.HTMLElement>()?.find { it.getClasses().contains(MAIN_LAYER_CLASS_NAME) }
    }

    fun selectAfterUpdate(newSelection: () -> Selection?) {
        selectionUpdater = newSelection
    }

    fun resolveCell(reference: CellReference): List<Cell> = cellIndex.lookup(reference)

    fun resolveLayoutable(cell: Cell): LayoutableCell? = layoutablesIndex.lookup(cell).firstOrNull()

    override fun isHtmlOutputValid(): Boolean = false

    fun getHtmlElement(): IVirtualDom.HTMLElement? = generatedHtmlMap.getOutput(this)

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
        updateSelectionView()
        updateHtml()
        selectionView?.update()
        codeCompletionMenu?.let { CodeCompletionMenuUI(it, this).updateBounds() }
    }

    protected open fun editorElementChanged(newElement: IVirtualDom.HTMLElement) {}

    fun updateHtml() {
        val oldEditorElement = generatedHtmlMap.getOutput(this)
        val newEditorElement = IncrementalVirtualDOMBuilder(virtualDom, oldEditorElement, generatedHtmlMap).produce(this)()
        if (newEditorElement != oldEditorElement) {
            editorElementChanged(newEditorElement)
        }

        val selectedLayoutable = (getSelection() as? CaretSelection)?.layoutable

        val newHighlightedLine = selectedLayoutable?.getLine()?.let { generatedHtmlMap.getOutput(it) }
        if (newHighlightedLine != highlightedLine) {
            highlightedLine?.removeClass("highlighted")
        }
        newHighlightedLine?.addClass("highlighted")
        highlightedLine = newHighlightedLine

        val newHighlightedCell = selectedLayoutable?.let { generatedHtmlMap.getOutput(it) }
        if (newHighlightedCell != highlightedCell) {
            highlightedCell?.removeClass("highlighted-cell")
        }
        newHighlightedCell?.addClass("highlighted-cell")
        highlightedCell = newHighlightedCell
    }

    private fun updateSelectionView() {
        if (selectionView?.selection != getSelection()) {
            selectionView = when (val selection = getSelection()) {
                is CaretSelection -> CaretSelectionView(selection, this)
                is CellSelection -> CellSelectionView(selection, this)
                else -> null
            }
        }
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
        caretPosition: Int? = null,
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

    protected open fun processKeyUp(event: JSKeyboardEvent): Boolean {
        return true
    }

    protected open fun processKeyDown(event: JSKeyboardEvent): Boolean {
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

    open fun processMouseEvent(event: JSMouseEvent) {
        when (event.eventType) {
            JSMouseEventType.CLICK -> processClick(event)
        }
    }

    open fun processKeyEvent(event: JSKeyboardEvent) {
        when (event.eventType) {
            JSKeyboardEventType.KEYDOWN -> processKeyDown(event)
            JSKeyboardEventType.KEYUP -> processKeyUp(event)
        }
    }

    protected open fun processClick(event: JSMouseEvent): Boolean {
        val targets = virtualDom.ui.getElementsAt(event.x, event.y)
        for (target in targets) {
            val htmlElement = target as? IVirtualDom.HTMLElement
            val producer: IProducesHtml = htmlElement?.let { generatedHtmlMap.getProducer(it) } ?: continue
            when (producer) {
                is LayoutableCell -> {
                    val layoutable = producer as? LayoutableCell ?: continue
                    val text = layoutable.toText() // htmlElement.innerText
                    val cellAbsoluteBounds = htmlElement.getInnerBounds()
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
                abs(absoluteClickX - it.second.getOuterBounds().minX()),
                abs(absoluteClickX - it.second.getOuterBounds().maxX()),
            )
        } ?: return false
        val caretPos = if (absoluteClickX <= closest.second.getOuterBounds().minX()) {
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

    override fun <T> produceHtml(consumer: TagConsumer<T>) {
        consumer.div("editor") {
            div(MAIN_LAYER_CLASS_NAME) {
                produceChild(getRootCell().layout)
            }
            div("selection-layer relative-layer") {
                produceChild(selectionView)
            }
            div("popup-layer relative-layer") {
                produceChild(codeCompletionMenu)
            }
        }
    }

    fun <R> runRead(body: () -> R): R {
        return if (transactionManager == null) {
            body()
        } else {
            transactionManager.executeRead { body() }
        }
    }

    fun <R> runWrite(body: () -> R): R {
        return if (transactionManager == null) {
            body()
        } else {
            transactionManager.executeWrite { body() }
        }
    }

    companion object {
        val MAIN_LAYER_CLASS_NAME = "main-layer"
    }
}

interface IKeyboardHandler {
    fun processKeyDown(event: JSKeyboardEvent): Boolean
}
