package org.modelix.editor.transform

import org.modelix.editor.INonExistingNode
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink

interface IAstTransformation {
    fun apply(): INode

//    fun getConcept(): IConcept
//    fun getPropertyValue(role: IProperty): String?
//    fun getReferenceTarget(role: IReferenceLink): INode?
//    fun getChildren(role: IChildLink): List<INode>
}

class NodeAsAstTransformation(val node: INonExistingNode) : IAstTransformation {
    override fun apply(): INode {
        return node.getOrCreateNode()
    }
}

class ReplaceNodeTransformation(
    val location: INonExistingNode,
    val concept: IConcept
) : IAstTransformation {
    override fun apply(): INode {
        return location.replaceNode(concept)
    }
}

class CreateNodeTransformation(
    val location: INonExistingNode,
    val concept: IConcept,
) : IAstTransformation {
    override fun apply(): INode {
        return location.getOrCreateNode(concept)
    }
}

class SetPropertyTransformation(
    val node: IAstTransformation,
    val role: IProperty,
    val value: String?
) : IAstTransformation {
    override fun apply(): INode {
        return node.apply().also { it.setPropertyValue(role, value) }
    }
}

class SetReferenceTransformation(
    val node: IAstTransformation,
    val role: IReferenceLink,
    val target: INode?
) : IAstTransformation {
    override fun apply(): INode {
        return node.apply().also { it.setReferenceTarget(role, target) }
    }
}


