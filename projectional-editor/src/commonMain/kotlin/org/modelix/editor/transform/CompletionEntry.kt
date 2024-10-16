package org.modelix.editor.transform

import org.modelix.model.api.IChildLink
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink
import org.modelix.model.api.IRole

class CompletionEntry(
    val tokens: List<CompletionToken>,
    val outputType: String
)

sealed class CompletionToken {
    val alternatives: MutableList<CompletionEntry> = ArrayList()
}

sealed class RoleToken : CompletionToken() {
    abstract val role: IRole
}
class ChildCompletionToken(override val role: IChildLink) : RoleToken()
class PropertyCompletionToken(override val role: IProperty) : RoleToken()
class ReferenceCompletionToken(override val role: IReferenceLink) : RoleToken()

class ConstantCompletionToken(val text: String) : CompletionToken()



