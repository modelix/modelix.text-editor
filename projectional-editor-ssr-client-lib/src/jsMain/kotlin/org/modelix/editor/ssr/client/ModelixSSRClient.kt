package org.modelix.editor.ssr.client

import io.github.oshai.kotlinlogging.KLogger
import io.github.oshai.kotlinlogging.KotlinLogging
import io.ktor.client.HttpClient
import io.ktor.client.plugins.websocket.DefaultClientWebSocketSession
import io.ktor.client.plugins.websocket.webSocket
import io.ktor.websocket.Frame
import io.ktor.websocket.readText
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import org.modelix.editor.ssr.common.MessageFromClient
import org.modelix.editor.ssr.common.MessageFromServer
import org.modelix.model.api.INodeReference
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement

private val LOG = KotlinLogging.logger { }

class ModelixSSRClient(private val httpClient: HttpClient, private val url: String) {

    private val coroutineScope = CoroutineScope(Dispatchers.Default)

    private var websocketSession: DefaultClientWebSocketSession? = null
    private val editors = ClientSideEditors(::sendMessage)

    fun sendMessage(msg: MessageFromClient) {
        websocketSession?.outgoing?.trySend(Frame.Text(msg.toJson()))
    }

    fun dispose() {
        coroutineScope.cancel("Disposed")
    }

    fun createEditor(rootNodeReference: INodeReference, existingContainerElement: HTMLDivElement? = null): HTMLElement {
        return editors.createEditor(rootNodeReference, existingContainerElement)
    }

    fun connect(callback: suspend () -> Unit = {}) {
        coroutineScope.launchLogging {
            httpClient.webSocket(urlString = url) {
                websocketSession = this
                callback()
                for (wsMessage in incoming) {
                    try {
                        when (wsMessage) {
                            is Frame.Text -> editors.processMessage(MessageFromServer.fromJson(wsMessage.readText()))
                            else -> {}
                        }
                    } catch (ex: Throwable) {
                        LOG.error(ex) { "Failed to process message: $wsMessage" }
                    }
                }
            }
        }
    }
}

inline fun <R> KLogger.logExceptions(body: () -> R): R {
    try {
        return body()
    } catch (ex: Throwable) {
        error(ex) { "Uncaught exception" }
        throw ex
    }
}

fun CoroutineScope.launchLogging(body: suspend () -> Unit): Job {
    return launch {
        LOG.logExceptions { body() }
    }
}
