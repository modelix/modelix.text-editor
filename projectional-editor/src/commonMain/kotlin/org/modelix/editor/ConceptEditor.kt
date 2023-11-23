package org.modelix.editor

import org.modelix.metamodel.GeneratedConcept
import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedChildListLink
import org.modelix.metamodel.ITypedConcept
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.ITypedSingleChildLink
import org.modelix.metamodel.NullConcept
import org.modelix.metamodel.typed
import org.modelix.metamodel.typedConcept
import org.modelix.metamodel.untypedConcept
import org.modelix.metamodel.untypedReference
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.serialize

class ConceptEditor(
    val declaredConcept: IConcept?,
    val templateBuilder: (subConcept: IConcept)->CellTemplate
) {
    fun apply(subConcept: IConcept): CellTemplate {
        return templateBuilder(subConcept)
            .also { it.setReference(RooCellTemplateReference(this, subConcept.getReference())) }
    }

    fun apply(context: CellCreationContext, node: INode): CellData {
        return apply(node.concept ?: NullConcept).apply(context, node)
    }
}

val defaultConceptEditor = ConceptEditor(null as IConcept?) { subConcept ->
    CollectionCellTemplate(subConcept).builder(subConcept).apply {
        subConcept.getShortName().constant()
        curlyBrackets {
            for (property in subConcept.getAllProperties()) {
                newLine()
                label(property.getSimpleName() + ":")
                property.cell()
            }
            for (link in subConcept.getAllReferenceLinks()) {
                newLine()
                label(link.getSimpleName() + ":")
                link.cell(presentation = { reference.serialize() })
            }
            for (link in subConcept.getAllChildLinks()) {
                newLine()
                label(link.getSimpleName() + ":")
                if (link.isMultiple) {
                    newLine()
                    indented {
                        link.vertical()
                    }
                } else {
                    link.cell()
                }
            }
        }
    }.template
}
