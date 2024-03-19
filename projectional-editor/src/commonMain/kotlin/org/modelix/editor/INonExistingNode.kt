package org.modelix.editor

import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.NullChildLink
import org.modelix.model.api.index
import org.modelix.model.api.isInstanceOf
import org.modelix.model.api.isSubConceptOf
import org.modelix.model.api.remove

interface INonExistingNode {
    fun getExistingAncestor(): INode?
    fun getParent(): INonExistingNode?
    fun getContainmentLink(): IChildLink?
    fun index(): Int
    fun replaceNode(subConcept: IConcept?): INode
    fun getOrCreateNode(subConcept: IConcept? = null): INode
    fun getNode(): INode?
    fun expectedConcept(): IConcept?
}

fun INonExistingNode.ancestors(includeSelf: Boolean = false): Sequence<INonExistingNode> {
    return generateSequence(if (includeSelf) this else getParent()) { it.getParent() }
}

fun INonExistingNode.commonAncestor(otherNode: INonExistingNode): INonExistingNode? {
    val ancestors1 = HashSet<INonExistingNode>()
    val ancestors2 = HashSet<INonExistingNode>()

    for (ancestorPair in ancestors(true).zip(otherNode.ancestors(true))) {
        ancestors1.add(ancestorPair.first)
        ancestors2.add(ancestorPair.second)
        if (ancestors1.contains(ancestorPair.second)) return ancestorPair.second
        if (ancestors2.contains(ancestorPair.first)) return ancestorPair.first
    }
    return null
}

data class SpecializedNonExistingNode(val node: INonExistingNode, val subConcept: IConcept) : INonExistingNode {
    override fun getExistingAncestor(): INode? = node.getExistingAncestor()

    override fun getParent(): INonExistingNode? = node.getParent()

    override fun getContainmentLink(): IChildLink? = node.getContainmentLink()

    override fun index(): Int = node.index()

    override fun replaceNode(subConcept: IConcept?): INode {
        return node.replaceNode(coerceOutputConcept(subConcept))
    }

    override fun getOrCreateNode(subConcept: IConcept?): INode {
        return node.getOrCreateNode(coerceOutputConcept(subConcept))
    }

    override fun getNode(): INode? {
        return node.getNode()
    }

    override fun expectedConcept(): IConcept {
        return subConcept
    }
}

fun INonExistingNode.ofSubConcept(subConcept: IConcept): INonExistingNode {
    return if (expectedConcept().isSubConceptOf(subConcept)) {
        this
    } else {
        SpecializedNonExistingNode(this, subConcept)
    }
}

fun INonExistingNode.coerceOutputConcept(subConcept: IConcept?): IConcept? {
    val expectedConcept = expectedConcept()
    return if (subConcept != null) {
        require(subConcept.isSubConceptOf(expectedConcept)) {
            "$subConcept is not a sub-concept of $expectedConcept"
        }
        subConcept
    } else {
        expectedConcept
    }
}

data class ExistingNode(private val node: INode) : INonExistingNode {
    override fun getExistingAncestor(): INode = node

    override fun getParent(): INonExistingNode? = node.parent?.let { ExistingNode(it) }

    override fun getContainmentLink() = node.getContainmentLink()

    override fun index() = node.index()

    override fun replaceNode(subConcept: IConcept?): INode {
        val parent = node.parent ?: throw RuntimeException("cannot replace the root node")
        val newNode = parent.addNewChild(node.getContainmentLink() ?: NullChildLink, node.index(), coerceOutputConcept(subConcept))
        node.remove()
        return newNode
    }

    override fun getOrCreateNode(subConcept: IConcept?): INode {
        val outputConcept = coerceOutputConcept(subConcept)
        return if (node.isInstanceOf(outputConcept)) {
            node
        } else {
            replaceNode(subConcept)
        }
    }

    override fun getNode(): INode {
        return node
    }

    override fun expectedConcept(): IConcept? {
        return node.getContainmentLink()?.targetConcept
    }
}

fun INode.toNonExisting() = ExistingNode(this)

data class NonExistingChild(private val parent: INonExistingNode, val link: IChildLink, private val index: Int = 0) : INonExistingNode {
    override fun getExistingAncestor(): INode? = parent.getExistingAncestor()

    override fun getParent() = parent

    override fun getContainmentLink() = link

    override fun index(): Int = index

    override fun replaceNode(subConcept: IConcept?): INode {
        val parentNode = parent.getOrCreateNode(null)
        val existing = parentNode.getChildren(link).toList().getOrNull(index)
        val newNode = parentNode.addNewChild(link, index, coerceOutputConcept(subConcept))
        existing?.remove()
        return newNode
    }

    override fun getOrCreateNode(subConcept: IConcept?): INode {
        return replaceNode(subConcept)
    }

    override fun getNode(): INode? {
        return null
    }

    override fun expectedConcept(): IConcept {
        return link.targetConcept
    }
}

data class NonExistingNode(val concept: IConcept) : INonExistingNode {
    override fun getExistingAncestor(): INode? = null

    override fun getParent() = null

    override fun getContainmentLink() = null

    override fun index(): Int = 0

    override fun replaceNode(subConcept: IConcept?): INode {
        throw UnsupportedOperationException("Don't know where to create the node")
    }

    override fun getOrCreateNode(subConcept: IConcept?): INode {
        return replaceNode(subConcept)
    }

    override fun getNode(): INode? {
        return null
    }

    override fun expectedConcept(): IConcept {
        return concept
    }
}
