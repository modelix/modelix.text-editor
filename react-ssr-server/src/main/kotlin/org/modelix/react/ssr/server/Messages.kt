package org.modelix.react.ssr.server

import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonPrimitive

@Serializable
data class MessageFromClient(
    val messageId: String,
    val parameters: Map<String, JsonElement>? = null,
) {
    fun getStringProperty(name: String): String? {
        return parameters?.get(name)?.jsonPrimitive?.content
    }
}

@Serializable
data class MessageFromServer(
    val viewModel: ViewModel,
)

interface IComponentContainer {
    val children: List<ComponentOrText>?
}

@Serializable
data class ViewModel(
    override val children: List<ComponentOrText>? = null,
) : IComponentContainer {
    fun findHandler(id: String): ICustomMessageHandler? {
        return (children ?: return null).firstNotNullOfOrNull { it.findHandler(id) }
    }
}

@Serializable
data class Component(
    val type: String,
    val key: String? = null,
    val properties: JsonObject? = null,
    override val children: List<ComponentOrText>? = null,
    @Transient
    val customMessageHandlers: Map<String, ICustomMessageHandler>? = null,
) : IComponentContainer {
    fun findHandler(id: String): ICustomMessageHandler? {
        customMessageHandlers?.get(id)?.let { return it }
        return (children ?: return null).firstNotNullOfOrNull { it.findHandler(id) }
    }
}

interface ICustomMessageHandler {
    fun handle(parameters: ICustomMessageHandlerParameters)
}

interface ICustomMessageHandlerParameters {
    fun getString(name: String): String?
}

class JsonObjectAsCustomMessageHandlerParameters(val obj: JsonObject) : ICustomMessageHandlerParameters {
    override fun getString(name: String): String? = obj.get(name)?.jsonPrimitive?.content
}

@Serializable
data class ComponentOrText(
    val component: Component? = null,
    val text: String? = null,
) {
    fun findHandler(id: String): ICustomMessageHandler? {
        return component?.findHandler(id)
    }
}

@Serializable
data class JsCode(
    val jsCode: String,
)
