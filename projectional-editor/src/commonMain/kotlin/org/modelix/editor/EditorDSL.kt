package org.modelix.editor

import org.modelix.aspects.LanguageAspectsBuilder
import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedNode
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode

@Deprecated("use editor(...)")
fun <NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> LanguageAspectsBuilder<*>.conceptEditor(concept: ConceptT, body: NotationRootCellTemplateBuilder<NodeT, ConceptT>.()->Unit): ConceptEditor {
    return editor(concept, body)
}

fun <NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> LanguageAspectsBuilder<*>.editor(concept: ConceptT, body: NotationRootCellTemplateBuilder<NodeT, ConceptT>.()->Unit): ConceptEditor {
    return aspects.getAspect(language, EditorAspect).conceptEditor(concept, body)
}

fun LanguageAspectsBuilder<*>.editor(concept: IConcept, body: NotationRootCellTemplateBuilder<INode, IConcept>.()->Unit): ConceptEditor {
    return aspects.getAspect(language, EditorAspect).conceptEditor(concept, body)
}

interface ModelAccessBuilder {
    fun get(body: ()->String?)
    fun set(body: (String?)->Unit)
}