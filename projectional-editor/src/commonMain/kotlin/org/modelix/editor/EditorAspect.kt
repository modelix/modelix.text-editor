package org.modelix.editor

import org.modelix.aspects.ILanguageAspect
import org.modelix.aspects.ILanguageAspectFactory
import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.typed
import org.modelix.model.api.IConcept
import org.modelix.model.api.IConceptReference
import org.modelix.model.api.ILanguage
import org.modelix.model.api.INode

class EditorAspect : ILanguageAspect {
    val conceptEditors: MutableList<ConceptEditor> = ArrayList()

    fun <NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> conceptEditor(concept: ConceptT, body: NotationRootCellTemplateBuilder<NodeT, ConceptT>.() -> Unit): ConceptEditor {
        return ConceptEditor(concept.untyped()) { subConcept ->
            val typedSubconcept = subConcept.typed() as ConceptT
            NotationRootCellTemplateBuilder(NotationRootCellTemplate(subConcept), typedSubconcept, INodeConverter.Typed<NodeT>(typedSubconcept))
                .also(body).template as NotationRootCellTemplate
        }.also(conceptEditors::add)
    }

    fun conceptEditor(concept: IConcept, body: NotationRootCellTemplateBuilder<INode, IConcept>.() -> Unit): ConceptEditor {
        return ConceptEditor(concept) { subConcept ->
            NotationRootCellTemplateBuilder(NotationRootCellTemplate(subConcept), subConcept, INodeConverter.Untyped)
                .also(body).template as NotationRootCellTemplate
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

interface IConceptEditorRegistry {
    fun getConceptEditors(concept: IConceptReference): List<ConceptEditor>
}
