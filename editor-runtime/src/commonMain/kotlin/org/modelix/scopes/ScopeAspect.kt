package org.modelix.scopes

import org.modelix.aspects.ILanguageAspect
import org.modelix.aspects.ILanguageAspectFactory
import org.modelix.aspects.getInstance
import org.modelix.model.api.ILanguage
import org.modelix.model.api.IReferenceLink

class ScopeAspect(val language: ILanguage) : ILanguageAspect {
    private val scopes: MutableMap<IReferenceLink, IScope> = HashMap()

    fun getScope(link: IReferenceLink): IScope {
        // TODO allow to override the scope for a link in sub-concepts
        return scopes[link] ?: DefaultScope()
    }

    fun registerScope(link: IReferenceLink, scope: IScope) {
        require(link.getConcept().language == language) { "$link doesn't belong to $language" }
        scopes[link] = scope
    }

    companion object : ILanguageAspectFactory<ScopeAspect> {
        override fun createInstance(language: ILanguage): ScopeAspect {
            return ScopeAspect(language)
        }

        fun getScope(link: IReferenceLink): IScope {
            return ScopeAspect.getInstance(link.getConcept().language!!).getScope(link)
        }
    }
}