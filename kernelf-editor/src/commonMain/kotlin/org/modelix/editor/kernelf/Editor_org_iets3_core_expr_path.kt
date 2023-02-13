package org.modelix.editor.kernelf

import org.iets3.core.expr.path.L_org_iets3_core_expr_path
import org.modelix.editor.languageEditors

val Editor_org_iets3_core_expr_path = languageEditors(L_org_iets3_core_expr_path) {
    conceptEditor(language.PathElement) {
        concept.member.cell({ name })
        //TODO replace name with path label
    }
}