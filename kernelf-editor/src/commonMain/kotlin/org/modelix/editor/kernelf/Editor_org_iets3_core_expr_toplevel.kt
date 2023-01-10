package org.modelix.editor.kernelf

import org.iets3.core.expr.toplevel.L_org_iets3_core_expr_toplevel
import org.modelix.editor.languageEditors

val Editor_org_iets3_core_expr_toplevel = languageEditors(L_org_iets3_core_expr_toplevel) {
    conceptEditor(language.Constant) {
        "val".cell {
            iets3keyword()
        }
        concept.name.cell()
        optional {
            ":".cell()
            concept.type.cell()
        }
        "=".cell()
        concept.value.cell()
    }
    conceptEditor(language.ConstantRef) {
        concept.constant.cell({ name })
    }
    conceptEditor(language.EmptyToplevelContent) {
        constant("")
    }
}