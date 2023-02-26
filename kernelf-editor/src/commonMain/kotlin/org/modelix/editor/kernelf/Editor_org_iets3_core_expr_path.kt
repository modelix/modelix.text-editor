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
        val dot = it.getParent()?.getNode()?.typed() as? N_DotExpression ?: return@scope emptyList()
        val left = dot.expr.get() ?: return@scope emptyList()
        val leftType = TypesystemEngine.computeType(left.untyped()) ?: return@scope emptyList()
        val leftTypeAsNode = (leftType as? NodeAsType)?.node?.typed() ?: return@scope emptyList()
        when (leftTypeAsNode) {
            is N_RecordType -> leftTypeAsNode.record.members.toList()
            else -> emptyList()
        }
    }
}