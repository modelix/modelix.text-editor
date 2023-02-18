package org.modelix.editor.kernelf

import org.iets3.core.expr.path.L_org_iets3_core_expr_path
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor

val Editor_org_iets3_core_expr_path = languageAspects(L_org_iets3_core_expr_path) {
    conceptEditor(language.PathElement) {
        concept.member.cell({ name })
        //TODO replace name with path label
    }
}