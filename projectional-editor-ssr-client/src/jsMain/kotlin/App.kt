import io.github.oshai.kotlinlogging.KLogger
import io.github.oshai.kotlinlogging.KotlinLogging
import io.github.oshai.kotlinlogging.KotlinLoggingConfiguration
import io.github.oshai.kotlinlogging.Level
import io.ktor.client.*
import io.ktor.client.plugins.websocket.*
import kotlinx.browser.document
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.modelix.editor.ssr.client.ModelixSSRClient
import org.modelix.model.api.NodeReference
import org.w3c.dom.asList

private val LOG = KotlinLogging.logger {  }

fun main() {
    KotlinLoggingConfiguration.logLevel = Level.TRACE
    LOG.info { "App started" }

    val httpClient = HttpClient() {
        install(WebSockets)
    }

    LOG.trace { "Coroutine in GlobalScope started" }
    val client = ModelixSSRClient(httpClient, "ws://localhost:8593/ws")
    client.connect {
        LOG.trace { "Connected" }
        for (ref in listOf("pnode:888800000003@ssr-demo", "pnode:8888000001d1@ssr-demo")) {
            val editorDom = client.createEditor(NodeReference(ref))
            LOG.trace { "Editor created for $ref" }
            document.getElementsByTagName("body").asList().first().append(editorDom)
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
