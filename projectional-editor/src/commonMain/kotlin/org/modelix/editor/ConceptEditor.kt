package org.modelix.editor

import org.modelix.metamodel.GeneratedConcept
import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedChildListLink
import org.modelix.metamodel.ITypedConcept
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.ITypedSingleChildLink
import org.modelix.metamodel.typed
import org.modelix.metamodel.typedConcept
import org.modelix.metamodel.untypedConcept
import org.modelix.metamodel.untypedReference
import org.modelix.model.api.serialize

class ConceptEditor<NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>>(
    val declaredConcept: ConceptT?,
    val templateBuilder: (subConcept: ConceptT)->CellTemplate<NodeT, ConceptT>
) {
    fun apply(subConcept: ConceptT): CellTemplate<NodeT, ConceptT> {
        return templateBuilder(subConcept)
            .also { it.setReference(RooCellTemplateReference(this, subConcept.untyped().getReference())) }
    }

    fun apply(context: CellCreationContext, node: NodeT): CellData {
        return apply(node.typedConcept() as ConceptT).apply(context, node)
    }
}

val defaultConceptEditor = ConceptEditor(null as IConceptOfTypedNode<ITypedNode>?) { subConcept ->
    CellTemplateBuilder(CollectionCellTemplate(subConcept)).apply {
        subConcept.untyped().getShortName().constant()
        curlyBrackets {
            for (property in subConcept.untyped().getAllProperties()) {
                newLine()
                label(property.getSimpleName() + ":")
                property.cell()
            }
            for (link in subConcept.untyped().getAllReferenceLinks()) {
                newLine()
                label(link.getSimpleName() + ":")
                link.typed()?.cell(presentation = { untypedReference().serialize() })
            }
            for (link in subConcept.untyped().getAllChildLinks()) {
                newLine()
                label(link.getSimpleName() + ":")
                when (val l = link.typed()) {
                    is ITypedSingleChildLink -> l.cell()
                    is ITypedChildListLink -> {
                        newLine()
                        indented {
                            l.vertical()
                        }
                    }
                    else -> RuntimeException("Unknown link type: $l")
                }
            }
        }
    }.template
}
