package org.modelix.editor.kernelf

import jetbrains.mps.lang.test.L_jetbrains_mps_lang_test
import org.modelix.editor.languageEditors

val Editor_jetbrains_mps_lang_test = languageEditors(L_jetbrains_mps_lang_test) {
    conceptEditor(language.TestInfo) {
        vertical {
            horizontal {
                "Project Path  :".cell()
                concept.projectPath.cell()
            }
            horizontal {
                "ReOpen Project:".cell()
                concept.reOpenProject.cell {
                    placeholderText("false")
                }
            }
        }

    }
}