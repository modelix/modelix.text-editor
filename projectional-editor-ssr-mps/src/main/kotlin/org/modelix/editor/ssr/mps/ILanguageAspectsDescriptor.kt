package org.modelix.editor.ssr.mps

import org.modelix.aspects.ILanguageAspect

/**
 * MPS generates instances of this.
 */
interface ILanguageAspectsDescriptor {
    fun createAspects(): List<ILanguageAspect>
}