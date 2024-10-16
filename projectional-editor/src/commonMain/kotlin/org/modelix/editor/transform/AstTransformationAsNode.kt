package org.modelix.editor.transform

import kotlinx.coroutines.flow.Flow
import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.IConceptReference
import org.modelix.model.api.INode
import org.modelix.model.api.INodeReference
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink
import org.modelix.model.area.IArea

class AstTransformationAsNode : INode {
    override fun addNewChild(role: String?, index: Int, concept: IConcept?): INode = TODO("Not yet implemented")
    override val allChildren: Iterable<INode> get() = TODO("Not yet implemented")
    override val concept: IConcept? get() = TODO("Not yet implemented")
    override val isValid: Boolean get() = TODO("Not yet implemented")
    override val parent: INode? get() = TODO("Not yet implemented")
    override val reference: INodeReference get() = TODO("Not yet implemented")
    override val roleInParent: String? get() = TODO("Not yet implemented")
    override fun getArea(): IArea = TODO("Not yet implemented")
    override fun getChildren(role: String?): Iterable<INode> = TODO("Not yet implemented")
    override fun getConceptReference(): IConceptReference? = TODO("Not yet implemented")
    override fun getPropertyRoles(): List<String> = TODO("Not yet implemented")
    override fun getPropertyValue(role: String): String? = TODO("Not yet implemented")
    override fun getReferenceRoles(): List<String> = TODO("Not yet implemented")
    override fun getReferenceTarget(role: String): INode? = TODO("Not yet implemented")
    override fun moveChild(role: String?, index: Int, child: INode): Unit = TODO("Not yet implemented")
    override fun removeChild(child: INode): Unit = TODO("Not yet implemented")
    override fun setPropertyValue(role: String, value: String?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(role: String, target: INode?): Unit = TODO("Not yet implemented")
    override fun addNewChild(role: IChildLink, index: Int, concept: IConcept?): INode = TODO("Not yet implemented")
    override fun addNewChild(role: IChildLink, index: Int, concept: IConceptReference?): INode = TODO("Not yet implemented")
    override fun addNewChild(role: String?, index: Int, concept: IConceptReference?): INode = TODO("Not yet implemented")
    override fun addNewChildren(link: IChildLink, index: Int, concepts: List<IConceptReference?>): List<INode> = TODO("Not yet implemented")
    override fun addNewChildren(role: String?, index: Int, concepts: List<IConceptReference?>): List<INode> = TODO("Not yet implemented")
    override fun getAllChildrenAsFlow(): Flow<INode> = TODO("Not yet implemented")
    override fun getAllProperties(): List<Pair<IProperty, String>> = TODO("Not yet implemented")
    override fun getAllReferenceTargetRefs(): List<Pair<IReferenceLink, INodeReference>> = TODO("Not yet implemented")
    override fun getAllReferenceTargetRefsAsFlow(): Flow<Pair<IReferenceLink, INodeReference>> = TODO("Not yet implemented")
    override fun getAllReferenceTargets(): List<Pair<IReferenceLink, INode>> = TODO("Not yet implemented")
    override fun getAllReferenceTargetsAsFlow(): Flow<Pair<IReferenceLink, INode>> = TODO("Not yet implemented")
    override fun getChildren(link: IChildLink): Iterable<INode> = TODO("Not yet implemented")
    override fun getChildrenAsFlow(role: IChildLink): Flow<INode> = TODO("Not yet implemented")
    override fun getContainmentLink(): IChildLink? = TODO("Not yet implemented")
    override fun getDescendantsAsFlow(includeSelf: Boolean): Flow<INode> = TODO("Not yet implemented")
    override fun getOriginalReference(): String? = TODO("Not yet implemented")
    override fun getParentAsFlow(): Flow<INode> = TODO("Not yet implemented")
    override fun getPropertyLinks(): List<IProperty> = TODO("Not yet implemented")
    override fun getPropertyValue(property: IProperty): String? = TODO("Not yet implemented")
    override fun getPropertyValueAsFlow(role: IProperty): Flow<String?> = TODO("Not yet implemented")
    override fun getReferenceLinks(): List<IReferenceLink> = TODO("Not yet implemented")
    override fun getReferenceTarget(link: IReferenceLink): INode? = TODO("Not yet implemented")
    override fun getReferenceTargetAsFlow(role: IReferenceLink): Flow<INode> = TODO("Not yet implemented")
    override fun getReferenceTargetRef(role: IReferenceLink): INodeReference? = TODO("Not yet implemented")
    override fun getReferenceTargetRef(role: String): INodeReference? = TODO("Not yet implemented")
    override fun getReferenceTargetRefAsFlow(role: IReferenceLink): Flow<INodeReference> = TODO("Not yet implemented")
    override fun moveChild(role: IChildLink, index: Int, child: INode): Unit = TODO("Not yet implemented")
    override fun removeReference(role: IReferenceLink): Unit = TODO("Not yet implemented")
    override fun setPropertyValue(property: IProperty, value: String?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(link: IReferenceLink, target: INode?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(role: IReferenceLink, target: INodeReference?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(role: String, target: INodeReference?): Unit = TODO("Not yet implemented")
    override fun tryGetConcept(): IConcept? = TODO("Not yet implemented")
    override fun usesRoleIds(): Boolean = TODO("Not yet implemented")
}
