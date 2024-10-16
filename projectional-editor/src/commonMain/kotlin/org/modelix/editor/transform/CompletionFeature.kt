package org.modelix.editor.transform

import org.modelix.model.api.IChildLink
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink
import org.modelix.model.api.IRole

sealed class CompletionFeature
class NodeCompletionFeature : CompletionFeature()
sealed class RoleCompletionFeature : CompletionFeature() {
    abstract val role: IRole
}
class ChildCompletionFeature(override val role: IChildLink) : RoleCompletionFeature()
class PropertyCompletionFeature(override val role: IProperty) : RoleCompletionFeature()
class ReferenceCompletionFeature(override val role: IReferenceLink) : RoleCompletionFeature()
