package org.modelix.editor.kernelf

import de.slisson.mps.richtext.L_de_slisson_mps_richtext
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor

val Editor_de_slisson_mps_richtext = languageAspects(L_de_slisson_mps_richtext) {
    conceptEditor(language.Text) {
        concept.words.horizontal()
    }
    conceptEditor(language.Word) {
        concept.escapedValue.cell {
            placeholderText("")
        }
    }
}