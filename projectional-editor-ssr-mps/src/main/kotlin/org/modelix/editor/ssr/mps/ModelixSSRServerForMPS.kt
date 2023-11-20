/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.modelix.editor.ssr.mps

import com.intellij.openapi.Disposable
import com.intellij.openapi.components.Service
import com.intellij.openapi.components.service
import com.intellij.openapi.project.Project
import com.intellij.openapi.startup.ProjectActivity
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.html.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import jetbrains.mps.project.MPSProject
import kotlinx.html.a
import kotlinx.html.base
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.head
import kotlinx.html.li
import kotlinx.html.link
import kotlinx.html.script
import kotlinx.html.title
import kotlinx.html.ul
import org.modelix.editor.ssr.server.ModelixSSRServer
import org.modelix.model.api.BuiltinLanguages
import org.modelix.model.api.INode
import org.modelix.model.api.NodeReference
import org.modelix.model.api.runSynchronized
import org.modelix.model.mpsadapters.MPSLanguageRepository
import org.modelix.model.mpsadapters.MPSRepositoryAsNode
import java.net.URLEncoder
import java.nio.charset.StandardCharsets
import java.time.Duration
import java.util.*

@Service(Service.Level.PROJECT)
class ModelixSSRServerForMPSProject(private val project: Project) : Disposable {

    init {
        service<ModelixSSRServerForMPS>().registerProject(project)
    }

    override fun dispose() {
        service<ModelixSSRServerForMPS>().unregisterProject(project)
    }
}

@Service(Service.Level.APP)
class ModelixSSRServerForMPS : Disposable {

    private var ssrServer: ModelixSSRServer? = null
    private var ktorServer: ApplicationEngine? = null
    private val projects: MutableSet<Project> = Collections.synchronizedSet(HashSet())

    fun registerProject(project: Project) {
        projects.add(project)
        ensureStarted()
    }

    fun unregisterProject(project: Project) {
        projects.remove(project)
    }

    private fun getMPSProjects(): List<MPSProject> {
        return runSynchronized(projects) {
            projects.mapNotNull { it.getComponent(MPSProject::class.java) }
        }
    }

    private fun getRootNode(): INode? {
        return getMPSProjects().asSequence().map {
            MPSRepositoryAsNode(it.repository)
        }.firstOrNull()
    }

    fun ensureStarted() {
        runSynchronized(this) {
            if (ktorServer != null) return

            println("starting modelix SSR server")

            val ssrServer = ModelixSSRServer((getRootNode() ?: return).getArea())
            ktorServer = embeddedServer(Netty, port = 43593) {
                initKtorServer(ssrServer)
            }
            ktorServer!!.start()
        }
    }

    private fun Application.initKtorServer(ssrServer: ModelixSSRServer) {
        install(WebSockets) {
            pingPeriod = Duration.ofSeconds(15)
            timeout = Duration.ofSeconds(15)
            maxFrameSize = Long.MAX_VALUE
            masking = false
        }
        routing {
            get("/") {
                call.respondHtml {
                    val repository = getRootNode()!!
                    repository.getArea().executeRead {
                        body {
                            ul {
                                repository.getChildren(BuiltinLanguages.MPSRepositoryConcepts.Repository.modules).forEach {
                                    li {
                                        a {
                                            href = "module/${URLEncoder.encode(it.reference.serialize(), StandardCharsets.UTF_8)}/"
                                            +(it.getPropertyValue(BuiltinLanguages.jetbrains_mps_lang_core.INamedConcept.name) ?: "<no name>")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            get("/module/{moduleRef}/") {
                call.respondHtml {
                    val moduleRef = call.parameters["moduleRef"]!!
                    val repository = getRootNode()!!
                    repository.getArea().executeRead {
                        val module = repository.getArea().resolveNode(NodeReference(moduleRef))!!
                        body {
                            ul {
                                module.getChildren(BuiltinLanguages.MPSRepositoryConcepts.Module.models).forEach {
                                    li {
                                        a {
                                            href = "../../model/${URLEncoder.encode(it.reference.serialize(), StandardCharsets.UTF_8)}/"
                                            +(it.getPropertyValue(BuiltinLanguages.jetbrains_mps_lang_core.INamedConcept.name) ?: "<no name>")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            get("/model/{modelRef}/") {
                call.respondHtml {
                    val modelRef = call.parameters["modelRef"]!!
                    val repository = getRootNode()!!
                    repository.getArea().executeRead {
                        val model = repository.getArea().resolveNode(NodeReference(modelRef))!!
                        body {
                            ul {
                                model.getChildren(BuiltinLanguages.MPSRepositoryConcepts.Model.rootNodes).forEach {
                                    li {
                                        a {
                                            href = "../../editor/${URLEncoder.encode(it.reference.serialize(), StandardCharsets.UTF_8)}/"
                                            +(it.getPropertyValue(BuiltinLanguages.jetbrains_mps_lang_core.INamedConcept.name) ?: "<no name>")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            get("/editor/{nodeRef}/") {
                call.respondHtml {
                    head {
                        title("Modelix Text Editor")
                        base {
                            href = "../.."
                        }
                        link {
                            rel = "stylesheet"
                            href = "editor.css"
                        }
                    }
                    body {
                        div(classes = "modelix-text-editor") {
                            attributes["nodeRef"] = requireNotNull(call.parameters["nodeRef"]) { "missing nodeRef parameter" }
                        }
                        script { src = "projectional-editor-ssr-client.js" }
                    }
                }
            }
            staticResources(remotePath = "/", basePackage = "js/productionExecutable")
            ssrServer.install(this)
        }
    }

    fun ensureStopped() {
        runSynchronized(this) {
            if (ktorServer == null) return
            println("stopping modelix SSR server")
            ktorServer?.stop()
            ktorServer = null
        }
    }

    override fun dispose() {
        ensureStopped()
    }
}

class ModelixSSRServerForMPSStartupActivity : ProjectActivity {
    override suspend fun execute(project: Project) {
        project.service<ModelixSSRServerForMPSProject>() // just ensure it's initialized
    }
}
