package org.modelix.editor

import kotlinx.html.TagConsumer
import kotlinx.html.div
import kotlinx.html.table
import kotlinx.html.td
import kotlinx.html.tr

class CodeCompletionMenu(
    val editor: EditorComponent,
    val anchor: LayoutableCell,
    val completionPosition: CompletionPosition,
    val providers: List<ICodeCompletionActionProvider>,
    initialPattern: String = "",
    initialCaretPosition: Int? = null,
) : IProducesHtml, IKeyboardHandler {
    val patternEditor = PatternEditor(initialPattern, initialCaretPosition)
    private val actionsCache = CachedCodeCompletionActions(providers)
    private var selectedIndex: Int = 0
    private var entries: List<ICodeCompletionAction> = emptyList()

    override fun isHtmlOutputValid(): Boolean = false

    fun updateActions() {
        entries = computeActions(patternEditor.getTextBeforeCaret())
    }

    fun getEntries(): List<ICodeCompletionAction> = entries

    private fun computeActions(pattern: String): List<ICodeCompletionAction> {
        return editor.runRead {
            val parameters = CodeCompletionParameters(editor, pattern)
            actionsCache.update(parameters)
                .filter {
                    val matchingText = it.getCompletionPattern()
                    matchingText.isNotEmpty() && matchingText.startsWith(parameters.pattern)
                }
                .applyShadowing()
                .sortedBy { it.getCompletionPattern().lowercase() }
        }
    }

    private fun parameters() = CodeCompletionParameters(editor, patternEditor.getTextBeforeCaret())

    fun selectNext() {
        selectedIndex++
        if (selectedIndex >= entries.size) selectedIndex = 0
    }

    fun selectPrevious() {
        selectedIndex--
        if (selectedIndex < 0) selectedIndex = (entries.size - 1).coerceAtLeast(0)
    }

    fun getSelectedEntry(): ICodeCompletionAction? = entries.getOrNull(selectedIndex)

    override fun processKeyDown(event: JSKeyboardEvent): Boolean {
        when (event.knownKey) {
            KnownKeys.ArrowUp -> selectPrevious()
            KnownKeys.ArrowDown -> selectNext()
            KnownKeys.ArrowLeft -> patternEditor.moveCaret(-1)
            KnownKeys.ArrowRight -> patternEditor.moveCaret(1)
            KnownKeys.Escape -> editor.closeCodeCompletionMenu()
            KnownKeys.Enter -> {
                getSelectedEntry()?.let { entry ->
                    editor.runWrite {
                        entry.executeAndUpdateSelection(editor)
                        editor.state.clearTextReplacement(anchor)
                    }
                }
                editor.closeCodeCompletionMenu()
            }
            KnownKeys.Backspace -> patternEditor.deleteText(true)
            KnownKeys.Delete -> patternEditor.deleteText(false)
            else -> {
                if (!event.typedText.isNullOrEmpty()) {
                    patternEditor.insertText(event.typedText)
                } else {
                    return false
                }
            }
        }
        editor.update()
        return true
    }

    override fun <T> produceHtml(consumer: TagConsumer<T>) {
        consumer.div("ccmenu-container") {
            produceChild(patternEditor)
            div("ccmenu") {
                table {
                    val parameters = parameters()
                    entries.forEachIndexed { index, action ->
                        tr("ccSelectedEntry".takeIf { index == selectedIndex }) {
                            td("matchingText") {
                                +action.getCompletionPattern()
                            }
                            td("description") {
                                +action.getDescription()
                            }
                        }
                    }
                    if (entries.isEmpty()) {
                        tr {
                            td {
                                +"No matches found"
                            }
                        }
                    }
                }
            }
        }
    }

    fun executeIfSingleAction() {
        if (entries.size == 1 && entries.first().getMatchingText() == patternEditor.pattern) {
            entries.first().executeAndUpdateSelection(editor)
            editor.closeCodeCompletionMenu()
        }
    }

    inner class PatternEditor(initialPattern: String, initialCaretPosition: Int?) : IProducesHtml {
        private var patternCell: Cell? = null
        var caretPos: Int = initialCaretPosition ?: initialPattern.length
        var pattern: String = initialPattern

        override fun isHtmlOutputValid(): Boolean = false

        fun getTextBeforeCaret() = pattern.substring(0, caretPos)

        fun deleteText(before: Boolean): Boolean {
            if (before) {
                if (caretPos == 0) return false
                pattern = pattern.removeRange((caretPos - 1) until caretPos)
                caretPos--
            } else {
                if (caretPos == pattern.length) return false
                pattern = pattern.removeRange(caretPos..caretPos)
            }
            updateActions()
            executeIfSingleAction()
            return true
        }

        fun insertText(text: String) {
            val oldTextBeforeCaret = pattern.substring(0, caretPos)
            pattern = pattern.replaceRange(caretPos until caretPos, text)
            val remainingText = pattern.substring(caretPos)
            caretPos += text.length
            val newTextBeforeCaret = pattern.substring(0, caretPos)

            val exactMatches = entries.filter { it.getMatchingText() == oldTextBeforeCaret }
            if (exactMatches.size == 1 && computeActions(newTextBeforeCaret).isEmpty()) {
                editor.runWrite {
                    editor.insertTextAfterUpdate(remainingText)
                    exactMatches.single().executeAndUpdateSelection(editor)
                    editor.closeCodeCompletionMenu()
                    editor.update()
                }
            } else {
                updateActions()
                executeIfSingleAction()
            }
        }

        fun moveCaret(delta: Int) {
            caretPos = (caretPos + delta).coerceIn(0..pattern.length)
            updateActions()
        }

        override fun <T> produceHtml(consumer: TagConsumer<T>) {
            consumer.div {
                div("ccmenu-pattern") {
                    +pattern.useNbsp()
                }
                div("caret own") { }
            }
        }
    }
}

class CachedCodeCompletionActions(providers: List<ICodeCompletionActionProvider>) {
    private var cacheEntries: List<CacheEntry> = providers.map { CacheEntry(it) }

    fun update(parameters: CodeCompletionParameters): List<ICodeCompletionAction> {
        return cacheEntries.flatMap { it.update(parameters) }.toList()
    }

    inner class CacheEntry(val provider: IActionOrProvider) {
        private var initialized = false
        private var cacheEntries: List<CacheEntry> = emptyList()
        private var dependsOnPattern: Boolean = true
        fun update(parameters: CodeCompletionParameters): Sequence<ICodeCompletionAction> {
            return when (provider) {
                is ICodeCompletionAction -> sequenceOf(provider)
                is ICodeCompletionActionProvider -> {
                    parameters.wasPatternAccessed() // reset state
                    if (!initialized || dependsOnPattern) {
                        cacheEntries = provider.getApplicableActions(parameters).map { CacheEntry(it) }
                        dependsOnPattern = parameters.wasPatternAccessed()
                        initialized = true
                    }
                    return cacheEntries.asSequence().flatMap { it.update(parameters) }
                }
                else -> throw RuntimeException("Unknown type: " + provider::class)
            }
        }
    }
}

interface IActionOrProvider

interface ICodeCompletionActionProvider : IActionOrProvider {
    fun getApplicableActions(parameters: CodeCompletionParameters): List<IActionOrProvider>
}

fun ICodeCompletionActionProvider.flattenApplicableActions(parameters: CodeCompletionParameters): List<ICodeCompletionAction> {
    return flatten(parameters).toList()
}

class ActionAsProvider(val action: ICodeCompletionAction) : ICodeCompletionActionProvider {
    override fun getApplicableActions(parameters: CodeCompletionParameters): List<IActionOrProvider> {
        return listOf(action)
    }
}

fun ICodeCompletionAction.asProvider(): ICodeCompletionActionProvider = ActionAsProvider(this)
fun IActionOrProvider.asProvider(): ICodeCompletionActionProvider = when (this) {
    is ICodeCompletionAction -> ActionAsProvider(this)
    is ICodeCompletionActionProvider -> this
    else -> error("Unknown type: $this")
}

private fun IActionOrProvider.flatten(parameters: CodeCompletionParameters): Sequence<ICodeCompletionAction> = when (this) {
    is ICodeCompletionAction -> sequenceOf(this)
    is ICodeCompletionActionProvider -> getApplicableActions(parameters).asSequence().flatMap { it.flatten(parameters) }
    else -> throw RuntimeException("Unknown type: " + this::class)
}

interface ICodeCompletionAction : IActionOrProvider {
    fun getMatchingText(): String
    fun getTokens(): ICompletionTokenOrList = ConstantCompletionToken(getMatchingText())
    fun getDescription(): String
    fun execute(editor: EditorComponent): ICaretPositionPolicy?
    fun shadows(shadowed: ICodeCompletionAction) = false
    fun shadowedBy(shadowing: ICodeCompletionAction) = false
}

fun ICodeCompletionAction.getCompletionPattern(): String = getTokens().toString()

fun ICodeCompletionAction.executeAndUpdateSelection(editor: EditorComponent) {
    val policy = execute(editor)
    if (policy != null) {
        editor.selectAfterUpdate { policy.getBestSelection(editor) }
    }
}

fun ICellAction.executeAndUpdateSelection(editor: EditorComponent) {
    val policy = execute(editor)
    if (policy != null) {
        editor.selectAfterUpdate { policy.getBestSelection(editor) }
    }
}

class CodeCompletionParameters(val editor: EditorComponent, pattern: String) {
    val pattern: String = pattern
        get() {
            patternAccessed = true
            return field
        }
    private var patternAccessed: Boolean = false
    fun wasPatternAccessed(): Boolean {
        val result = patternAccessed
        patternAccessed = false
        return result
    }
}

enum class CompletionPosition {
    CENTER,
    LEFT,
    RIGHT,
}

fun List<ICodeCompletionAction>.applyShadowing(): List<ICodeCompletionAction> {
    return groupBy { it.getCompletionPattern() }.flatMap { applyShadowingToGroup(it.value) }
}

private fun applyShadowingToGroup(actions: List<ICodeCompletionAction>): List<ICodeCompletionAction> {
    return actions.filter { a1 ->
        val isShadowed = actions.any { a2 -> a2 !== a1 && (a2.shadows(a1) || a1.shadowedBy(a2)) }
        !isShadowed
    }
}
