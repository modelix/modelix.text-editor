package org.modelix.editor.celltemplate

import org.modelix.editor.ICodeCompletionAction
import org.modelix.model.api.IChildLink
import org.modelix.model.api.INode

interface IGrammarSymbol {
    fun createWrapperAction(nodeToWrap: INode, wrappingLink: IChildLink): List<ICodeCompletionAction> {
        return emptyList()
    }
}

interface IOptionalSymbol : IGrammarSymbol {
    fun getChildSymbols(): Sequence<IGrammarSymbol>
}

fun Sequence<IGrammarSymbol>.leafSymbols(): Sequence<IGrammarSymbol> {
    return flatMap {
        if (it is IOptionalSymbol) it.getChildSymbols() else sequenceOf(it)
    }
}
