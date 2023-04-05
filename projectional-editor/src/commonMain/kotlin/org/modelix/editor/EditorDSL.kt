package org.modelix.editor

import org.modelix.aspects.LanguageAspectsBuilder
import org.modelix.editor.Cell
import org.modelix.metamodel.GeneratedConcept
import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedConcept
import org.modelix.metamodel.ITypedNode
import org.modelix.model.api.*

fun <NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> LanguageAspectsBuilder<*>.conceptEditor(concept: ConceptT, body: CellTemplateBuilder<NodeT, ConceptT>.()->Unit): ConceptEditor<NodeT, ConceptT> {
    return editor(concept, body)
}

fun <NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> LanguageAspectsBuilder<*>.editor(concept: ConceptT, body: CellTemplateBuilder<NodeT, ConceptT>.()->Unit): ConceptEditor<NodeT, ConceptT> {
    return aspects.getAspect(language, EditorAspect).conceptEditor(concept, body)
}

interface ModelAccessBuilder {
    fun get(body: ()->String?)
    fun set(body: (String?)->Unit)
}