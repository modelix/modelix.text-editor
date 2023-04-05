package org.modelix.scopes

import org.modelix.aspects.ILanguageAspect
import org.modelix.aspects.ILanguageAspectFactory
import org.modelix.aspects.LanguageAspectsBuilder
import org.modelix.aspects.getInstance
import org.modelix.editor.CellTemplateBuilder
import org.modelix.editor.ConceptEditor
import org.modelix.editor.EditorAspect
import org.modelix.editor.INonExistingNode
import org.modelix.editor.toNonExisting
import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.ITypedReferenceLink
import org.modelix.model.api.ILanguage
import org.modelix.model.api.INode
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

fun LanguageAspectsBuilder<*>.scope(link: ITypedReferenceLink<*>, scope: IScope) {
    return aspects.getAspect(language, ScopeAspect).registerScope(link.untyped(), scope)
}

fun <TargetT : ITypedNode> LanguageAspectsBuilder<*>.scope(link: ITypedReferenceLink<TargetT>, scopeFunction: (INonExistingNode) -> List<TargetT>) {
    return scope(link, ScopeFunction(scopeFunction))
}

class ScopeFunction<TargetT : ITypedNode>(val function: (INonExistingNode) -> List<TargetT>) : IScope {
    override fun getVisibleElements(node: INonExistingNode, link: IReferenceLink): List<INonExistingNode> {
        return function(node).map { it.unwrap().toNonExisting() }
    }
}