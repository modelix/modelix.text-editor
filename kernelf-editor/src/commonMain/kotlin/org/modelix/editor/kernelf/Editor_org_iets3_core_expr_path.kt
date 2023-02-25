package org.modelix.editor.kernelf

import org.iets3.core.expr.base.N_DotExpression
import org.iets3.core.expr.path.L_org_iets3_core_expr_path
import org.iets3.core.expr.toplevel.N_RecordType
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor
import org.modelix.metamodel.typed
import org.modelix.metamodel.untyped
import org.modelix.metamodel.untypedConcept
import org.modelix.scopes.scope
import org.modelix.typesystem.NodeAsType
import org.modelix.typesystem.TypesystemEngine

val Editor_org_iets3_core_expr_path = languageAspects(L_org_iets3_core_expr_path) {
    conceptEditor(language.PathElement) {
        concept.member.cell({ name })
        //TODO replace name with path label
    }
    scope(language.PathElement.member) {
        println("PathElement.member scope called")
        val v5 = it.getParent()?.getNode()?.typed()
        val v1 = v5 as? N_DotExpression
        val dot = v1 ?: return@scope emptyList()
        val v2 = dot.expr.get()
        val left = v2 ?: return@scope emptyList()
        val v3 = TypesystemEngine.computeType(left.untyped())
        val leftType = v3 ?: return@scope emptyList()
        val v4 = (leftType as? NodeAsType)?.node?.typed()
        val leftTypeAsNode = v4 ?: return@scope emptyList()
        println("Type: " + leftTypeAsNode.untypedConcept().getLongName())
        when (leftTypeAsNode) {
            is N_RecordType -> leftTypeAsNode.record.members.toList()
            else -> emptyList()
        }
    }
}