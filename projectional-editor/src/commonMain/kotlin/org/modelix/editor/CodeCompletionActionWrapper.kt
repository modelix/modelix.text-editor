package org.modelix.editor

open class CodeCompletionActionWrapper(val wrappedAction: ICodeCompletionAction) : ICodeCompletionAction by wrappedAction {
    override fun shadowedBy(shadowing: ICodeCompletionAction): Boolean {
        return wrappedAction.shadowedBy(if (shadowing is CodeCompletionActionWrapper) shadowing.wrappedAction else shadowing)
    }

    override fun shadows(shadowed: ICodeCompletionAction): Boolean {
        return wrappedAction.shadows(if (shadowed is CodeCompletionActionWrapper) shadowed.wrappedAction else shadowed)
    }
}

class CodeCompletionActionProviderWrapper(
    val wrappedProvider: ICodeCompletionActionProvider,
    val wrapAction: (CodeCompletionParameters, ICodeCompletionAction) -> ICodeCompletionAction,
) : ICodeCompletionActionProvider {
    override fun getApplicableActions(parameters: CodeCompletionParameters): List<IActionOrProvider> {
        return wrappedProvider.getApplicableActions(parameters).map {
            when (it) {
                is ICodeCompletionAction -> wrapAction(parameters, it)
                is ICodeCompletionActionProvider -> CodeCompletionActionProviderWrapper(it, wrapAction)
                else -> throw RuntimeException("Unexpected type: " + it::class)
            }
        }
    }
}

class CodeCompletionActionWithPostprocessor(action: ICodeCompletionAction, val after: () -> Unit) : CodeCompletionActionWrapper(action) {
    override fun execute(editor: EditorComponent) {
        wrappedAction.execute(editor)
        after()
    }
}

class CodeCompletionActionWithMatchingText(action: ICodeCompletionAction, val overridingMatchingText: String) : CodeCompletionActionWrapper(action) {
    override fun getMatchingText(): String {
        return overridingMatchingText
    }
}

fun ICodeCompletionActionProvider.after(body: () -> Unit): CodeCompletionActionProviderWrapper {
    return CodeCompletionActionProviderWrapper(this) { _, it ->
        CodeCompletionActionWithPostprocessor(it, body)
    }
}

fun ICodeCompletionActionProvider.withMatchingText(text: (CodeCompletionParameters) -> String): CodeCompletionActionProviderWrapper {
    return CodeCompletionActionProviderWrapper(this) { parameters, it ->
        CodeCompletionActionWithMatchingText(it, text(parameters))
    }
}

fun ICodeCompletionAction.withMatchingText(text: String): CodeCompletionActionWithMatchingText {
    return CodeCompletionActionWithMatchingText(this, text)
}
