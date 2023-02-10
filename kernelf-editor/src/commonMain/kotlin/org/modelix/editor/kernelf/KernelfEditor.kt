package org.modelix.editor.kernelf

import org.modelix.editor.CellTemplateBuilder
import org.modelix.editor.EditorEngine

fun CellTemplateBuilder<*, *>.iets3keyword() {
    textColor("DarkBlue")
}

object KernelfEditor {
    fun register(editorEngine: EditorEngine) {
        Editor_org_iets3_core_expr_tracing.register(editorEngine)
        Editor__org_iets3_core_expr_tests.register(editorEngine)
        Editor_org_iets3_core_expr_toplevel.register(editorEngine)
        Editor_org_iets3_core_expr_simpleTypes.register(editorEngine)
        Editor_org_iets3_core_expr_simpleTypes_test.register(editorEngine)
        Editor_org_iets3_core_expr_repl.register(editorEngine)
        Editor_org_iets3_core_expr_path.register(editorEngine)
        Editor_org_iets3_core_expr_lambda.register(editorEngine)
        Editor_org_iets3_core_expr_collections.register(editorEngine)
        Editor_org_iets3_core_expr_base.register(editorEngine)
        Editor_de_slisson_mps_richtext.register(editorEngine)
        Editor_jetbrains_mps_lang_test.register(editorEngine)
    }
}
