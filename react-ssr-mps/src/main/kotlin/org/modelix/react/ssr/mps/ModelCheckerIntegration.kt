package org.modelix.react.ssr.mps

import com.jetbrains.rd.generator.nova.PredefinedType
import io.ktor.util.*
import jetbrains.mps.checkers.ConstraintsChecker
import jetbrains.mps.errors.item.NodeReportItem
import jetbrains.mps.errors.messageTargets.MessageTarget
import jetbrains.mps.errors.messageTargets.PropertyMessageTarget
import jetbrains.mps.errors.messageTargets.ReferenceMessageTarget
import jetbrains.mps.progress.EmptyProgressMonitor
import jetbrains.mps.smodel.MPSModuleRepository
import jetbrains.mps.typesystemEngine.checker.NonTypesystemChecker
import jetbrains.mps.typesystemEngine.checker.TypesystemChecker
import org.jetbrains.mps.openapi.model.SNode
import org.jetbrains.mps.openapi.util.Consumer
import org.modelix.incremental.incrementalFunction
import org.modelix.model.api.BuiltinLanguages
import org.modelix.model.api.INode
import org.modelix.model.api.INodeReference
import org.modelix.model.mpsadapters.MPSNodeReference
import org.modelix.model.mpsadapters.tomps.ModelixNodeAsMPSNode
import org.modelix.react.ssr.server.IRenderer

object ModelCheckerIntegration {

    private val checkRootNode = incrementalFunction<List<NodeReportItem>, INode>("check") { context, node ->
        runCheck(ModelixNodeAsMPSNode.toMPSNode(node))
    }

    @JvmStatic
    fun getMessages(node: INode): List<NodeReportItem> {
        return checkRoot(getRootNode(node))[node.reference] ?: emptyList()
    }

    @JvmStatic
    fun getMessages(node: SNode): List<NodeReportItem> {
        return getMessages(ModelixNodeAsMPSNode.toModelixNode(node))
    }

    @JvmStatic
    fun getMessages(node: SNode, onlyGlobal: Boolean, featureName: String?): String {
        var messages = getMessages(node)
        System.err.println("--------")
        System.err.println("node: "+node.toString())
        System.err.println("only global: "+onlyGlobal)
        System.err.println("feature name: "+featureName)
        System.err.println("all messages: "+messages)
        if (onlyGlobal) {
            messages = messages.filter { roleName(it.messageTarget) == null }
            System.err.println("filtered only global: "+messages)
        } else if (!featureName.isNullOrBlank()) {
            messages = messages.filter { featureName.equals(roleName(it.messageTarget))}
            System.err.println("filtered f feature: "+messages)
        }
        val str = messages.joinToString(" # ") { it.severity.toString() + ": " + it.message.split(":")[1] }
        System.err.println("result: "+str)
        return str
    }

    private fun roleLabel(t: MessageTarget): String {
        val roleName = roleName(t) ?: return ""
        return "($roleName)"
    }

    private fun roleName(t: MessageTarget): String? {
        if (t is PropertyMessageTarget) {
            System.err.println("   "+t.role)
            return t.role
        }
        if (t is ReferenceMessageTarget) {
            System.err.println("   "+t.role)
            return t.role
        }
        return null;
    }

    private fun checkRoot(rootNode: INode): Map<INodeReference, List<NodeReportItem>> {
        val messages: List<NodeReportItem> = checkRootNode(rootNode).bind(IRenderer.contextIncrementalEngine.getValue()).invoke()
        return messages.groupBy { MPSNodeReference(it.node) }
    }

    private fun getRootNode(node: INode): INode {
        if (node.getContainmentLink()?.getUID() == BuiltinLanguages.MPSRepositoryConcepts.Model.rootNodes.getUID()) {
            return node
        } else {
            return getRootNode(node.parent ?: return node)
        }
    }

    private fun runCheck(root: SNode): List<NodeReportItem> {
        val items = ArrayList<NodeReportItem>()
        val consumer: Consumer<NodeReportItem> = object : Consumer<NodeReportItem> {
            override fun consume(item: NodeReportItem) {
                items.add(item)
            }
        }

        @Suppress("removal")
        val repository = MPSModuleRepository.getInstance()
        TypesystemChecker().check(root, repository, consumer, EmptyProgressMonitor())
        NonTypesystemChecker().check(root, repository, consumer, EmptyProgressMonitor())
        ConstraintsChecker(null).asRootChecker().check(root, repository, consumer, EmptyProgressMonitor())
        return items
    }
}
