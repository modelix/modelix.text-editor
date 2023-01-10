/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.modelix.editor.kernelf

import org.modelix.editor.CellTemplateBuilder
import org.modelix.editor.EditorEngine

fun CellTemplateBuilder<*, *>.iets3keyword() {
    textColor("DarkBlue")
}

object KernelfEditor {
    fun register(editorEngine: EditorEngine) {
        Editor__org_iets3_core_expr_tests.register(editorEngine)
        Editor_org_iets3_core_expr_toplevel.register(editorEngine)
        Editor_org_iets3_core_expr_simpleTypes.register(editorEngine)
        Editor_org_iets3_core_expr_base.register(editorEngine)
        Editor_de_slisson_mps_richtext.register(editorEngine)
        Editor_jetbrains_mps_lang_test.register(editorEngine)
    }
}
