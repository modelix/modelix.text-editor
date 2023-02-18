package org.modelix.aspects

import org.modelix.model.api.ILanguage

interface ILanguageAspect {
}

interface ILanguageAspectFactory<AspectT : ILanguageAspect> {
    fun createInstance(language: ILanguage): AspectT
}