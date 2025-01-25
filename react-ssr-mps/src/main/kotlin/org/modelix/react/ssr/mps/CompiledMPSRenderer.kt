package org.modelix.react.ssr.mps

import com.intellij.openapi.Disposable
import com.intellij.openapi.application.EDT
import com.intellij.openapi.util.Disposer
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import org.jetbrains.mps.openapi.module.SRepository
import org.modelix.incremental.IIncrementalEngine
import org.modelix.incremental.TrackableValue
import org.modelix.incremental.incrementalFunction
import org.modelix.model.api.ConceptReference
import org.modelix.model.api.INode
import org.modelix.model.api.NodeReference
import org.modelix.model.api.getAllConcepts
import org.modelix.model.mpsadapters.MPSArea
import org.modelix.react.ssr.mps.aspect.CompositeReactSSRAspectDescriptor
import org.modelix.react.ssr.mps.aspect.IReactSSRAspectDescriptor
import org.modelix.react.ssr.mps.aspect.IRenderContext
import org.modelix.react.ssr.mps.aspect.ReactSSRAspectDescriptors
import org.modelix.react.ssr.server.GenericNodeRenderer
import org.modelix.react.ssr.server.IComponentOrList
import org.modelix.react.ssr.server.IRenderer
import org.modelix.react.ssr.server.IRendererFactory
import org.modelix.react.ssr.server.ViewModel
import org.modelix.react.ssr.server.buildViewModel

class MPSRendererFactory(val repository: () -> SRepository) : IRendererFactory, Disposable {
    val useInterpreter = TrackableValue<Boolean>(false)
    private val descriptors = ReactSSRAspectDescriptors().also { Disposer.register(this, it) }

    override fun dispose() {}

    override fun createRenderer(
        incrementalEngine: IIncrementalEngine,
        nodeRef: String,
        parameters: Map<String, List<String>>,
        coroutineScope: CoroutineScope,
    ): IRenderer {
        return if (useInterpreter.getValue()) {
            InterpretedMPSRenderer(incrementalEngine, repository, nodeRef, coroutineScope)
        } else {
            CompiledMPSRenderer(incrementalEngine, repository, nodeRef, coroutineScope, descriptors)
        }
    }
}

class CompiledMPSRenderer(
    incrementalEngine: IIncrementalEngine,
    val repository: () -> SRepository,
    nodeRef: String,
    coroutineScope: CoroutineScope,
    val descriptors: ReactSSRAspectDescriptors,
) : GenericNodeRenderer(incrementalEngine, NodeReference(nodeRef), coroutineScope) {
    override fun resolveNode(nodeRef: NodeReference): INode? {
        return MPSArea(repository()).resolveNode(nodeRef)
    }

    override suspend fun <R> runWrite(body: () -> R): R {
        var result: R? = null
        withContext(Dispatchers.EDT) {
            repository().modelAccess.executeCommand {
                result = body()
            }
        }
        return result as R
    }

    override fun <R> runRead(body: () -> R): R {
        return repository().modelAccess.computeRead {
            body()
        }
    }

    fun getDescriptor() = CompositeReactSSRAspectDescriptor(descriptors.findDescriptors(repository()).toSet())

    override fun renderNodeEditor(node: INode): ViewModel {
        return buildViewModel {
            child(renderMPSNode(node, getDescriptor()))
        }
    }

    fun renderMPSNode(node: INode, descriptor: IReactSSRAspectDescriptor): IComponentOrList = renderMPSNodeIncremental(node, descriptor)
    private val renderMPSNodeIncremental: (INode, IReactSSRAspectDescriptor) -> IComponentOrList = incremenentalEngine.incrementalFunction("renderMPSNode") { _, node: INode, descriptor: IReactSSRAspectDescriptor ->
        val renderers = node.concept!!.getAllConcepts().asSequence().flatMap {
            descriptor.getRenderersForConcept(node.concept!!.getReference() as ConceptReference).filter { it.isApplicable(node) }
        }
        val renderer = renderers.firstOrNull() // TODO resolve conflict if multiple renderers are applicable
            ?: return@incrementalFunction renderNode(node)
        renderer.render(
            node,
            object : IRenderContext {
                override fun getIncrementalEngine(): IIncrementalEngine = incrementalEngine

                override fun renderNode(node: INode): IComponentOrList {
                    return renderMPSNode(node, descriptor)
                }

                override fun getState(id: String, defaultValue: Boolean): Boolean {
                    return (allStates[id] as? JsonPrimitive)?.booleanOrNull ?: defaultValue
                }

                override fun getState(id: String, defaultValue: String?): String? {
                    return (allStates[id] as? JsonPrimitive)?.content ?: defaultValue
                }

                override fun setState(id: String, value: String?): String? {
                    if (value == null) {
                        allStates.remove(id)
                    } else {
                        allStates[id] = JsonPrimitive(value)
                    }
                    return value
                }

                override fun setState(id: String, value: Boolean): Boolean {
                    allStates[id] = JsonPrimitive(value)
                    return value
                }
            }
        )
    }
}
