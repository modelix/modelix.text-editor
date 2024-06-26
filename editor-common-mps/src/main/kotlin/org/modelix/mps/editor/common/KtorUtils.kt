package org.modelix.mps.editor.common

import io.ktor.server.application.Application
import io.ktor.server.engine.ApplicationEngine
import io.ktor.server.engine.EngineConnectorBuilder
import io.ktor.server.engine.applicationEngineEnvironment
import io.ktor.server.netty.Netty
import io.ktor.util.logging.KtorSimpleLogger
import kotlinx.coroutines.GlobalScope

fun embeddedServer(port: Int, classLoader: ClassLoader? = null, module: Application.() -> Unit): ApplicationEngine {
    val portParam = port
    val classLoaderParam = classLoader
    val moduleParam = module
    val environment = applicationEngineEnvironment {
        if (classLoaderParam != null) this.classLoader = classLoaderParam
        this.parentCoroutineContext = GlobalScope.coroutineContext
        this.log = KtorSimpleLogger("ktor.application")
        this.watchPaths = emptyList()
        this.module(moduleParam)
        this.connectors += EngineConnectorBuilder().also { it.port = portParam }
    }
    return io.ktor.server.engine.embeddedServer(factory = Netty, environment = environment, configure = {})
}
