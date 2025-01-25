package org.modelix.react.ssr.mps.aspect

import com.intellij.openapi.Disposable
import com.intellij.openapi.util.Disposer
import org.jetbrains.mps.openapi.module.SRepository
import org.modelix.incremental.IIncrementalEngine
import org.modelix.model.api.ConceptReference
import org.modelix.model.api.INode
import org.modelix.react.ssr.server.IComponentOrList

class ReactSSRAspectDescriptors : Disposable {
    private val descriptorCache: DescriptorCache<IReactSSRAspectDescriptor> = DescriptorCache(IReactSSRAspectDescriptor::class.java).also { Disposer.register(this, it) }

    override fun dispose() {}

    fun findDescriptors(repository: SRepository): List<IReactSSRAspectDescriptor> {
        return repository.modules.mapNotNull { descriptorCache.getDescriptor(it, "modelix.ReactDescriptor") }
    }
}

data class CompositeReactSSRAspectDescriptor(val descriptors: Set<IReactSSRAspectDescriptor>) : IReactSSRAspectDescriptor {
    override fun getRenderersForConcept(concept: ConceptReference): List<IReactNodeRenderer> {
        return descriptors.flatMap { it.getRenderersForConcept(concept) }
    }
}

interface IReactSSRAspectDescriptor {
    /**
     * Only for the exact concept, not for super concepts.
     */
    fun getRenderersForConcept(concept: ConceptReference): List<IReactNodeRenderer>
}

abstract class ReactSSRAspectDescriptorBase : IReactSSRAspectDescriptor {
    private val renderers: MutableMap<ConceptReference, List<IReactNodeRenderer>> = HashMap()
    override fun getRenderersForConcept(concept: ConceptReference): List<IReactNodeRenderer> {
        return renderers[concept] ?: emptyList()
    }

    protected fun addRenderer(concept: ConceptReference, renderer: IReactNodeRenderer) {
        renderers[concept] = (renderers[concept] ?: emptyList()) + renderer
    }
}

interface IReactNodeRenderer {
    fun isApplicable(node: INode): Boolean
    fun render(node: INode, context: IRenderContext): IComponentOrList
}

interface IRenderContext {
    fun getIncrementalEngine(): IIncrementalEngine
    fun renderNode(node: INode): IComponentOrList
    fun getState(id: String, defaultValue: String?): String?
    fun setState(id: String, value: String?): String?
    fun getState(id: String, defaultValue: Boolean): Boolean
    fun setState(id: String, value: Boolean): Boolean
}
