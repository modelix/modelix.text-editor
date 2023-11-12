package org.modelix.editor.ssr.demo.kernelf

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.modelix.editor.ssr.server.ModelixSSRServer

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

fun Application.module() {
    val ssrServer = ModelixSSRServer()

    routing {
        get("/") {
            call.respondText("Hello, world!")
        }
        ssrServer.install(this)
    }
}