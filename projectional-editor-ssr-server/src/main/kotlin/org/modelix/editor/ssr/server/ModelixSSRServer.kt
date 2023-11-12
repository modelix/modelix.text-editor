package org.modelix.editor.ssr.server

import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*

class ModelixSSRServer {

    fun install(route: Route) {
        route.installRoutes()
    }

    private fun Route.installRoutes() {
        route("client") {

        }
        webSocket("ws") {
            for (msg in incoming) {
                when (msg) {
                    is Frame.Text -> handleMessage(msg.readText())
                    else -> {}
                }
            }
        }
    }

    private fun DefaultWebSocketServerSession.handleMessage(msg: String) {

    }
}