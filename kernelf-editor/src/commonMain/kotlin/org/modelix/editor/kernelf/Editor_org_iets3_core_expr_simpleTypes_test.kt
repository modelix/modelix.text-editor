package org.modelix.editor.kernelf

import org.iets3.core.expr.simpleTypes.tests.L_org_iets3_core_expr_simpleTypes_tests
import org.modelix.editor.languageEditors

val Editor_org_iets3_core_expr_simpleTypes_test = languageEditors(L_org_iets3_core_expr_simpleTypes_tests) {
    conceptEditor(language.EqClassProducer) {
        "eqclass".constant()
    }
    conceptEditor(language.RandomVectorProducer) {
        "random".constant()
        concept.count.cell()
        "only interesting".constant()
        concept.onlyInteresing.cell()
    }
}
