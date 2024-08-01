package org.modelix.editor.celltemplate

import org.modelix.editor.IActionOrProvider
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.TemplateCellReference
import org.modelix.model.api.IChildLink
import org.modelix.model.api.INode

interface IGrammarSymbol {
    fun createWrapperAction(nodeToWrap: INode, wrappingLink: IChildLink): List<ICodeCompletionAction> {
        return emptyList()
    }

    fun getSymbolTransformationAction(node: INode, optionalCell: TemplateCellReference): IActionOrProvider?
}

interface IOptionalSymbol : IGrammarSymbol {
    fun getChildSymbols(): Sequence<IGrammarSymbol>
}

fun Sequence<IGrammarSymbol>.leafSymbols(): Sequence<IGrammarSymbol> {
    return flatMap {
        if (it is IOptionalSymbol) it.getChildSymbols() else sequenceOf(it)
    }
}
