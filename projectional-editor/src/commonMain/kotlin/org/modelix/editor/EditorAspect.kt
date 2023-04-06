package org.modelix.editor

import org.modelix.aspects.ILanguageAspect
import org.modelix.aspects.ILanguageAspectFactory
import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedNode
import org.modelix.model.api.ILanguage

class EditorAspect : ILanguageAspect {
    val conceptEditors: MutableList<ConceptEditor<*, *>> = ArrayList()

    fun <NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> conceptEditor(concept: ConceptT, body: CellTemplateBuilder<NodeT, ConceptT>.()->Unit): ConceptEditor<NodeT, ConceptT> {
        return ConceptEditor(concept) { subConcept ->
            CellTemplateBuilder(CollectionCellTemplate(subConcept)).also(body).template
        }.also(conceptEditors::add)
    }

    fun register(editorEngine: EditorEngine) {
        editorEngine.registerEditors(this)
    }

    companion object : ILanguageAspectFactory<EditorAspect> {
        override fun createInstance(language: ILanguage): EditorAspect {
            return EditorAspect()
        }
    }
}