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
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.components.Service
import com.intellij.openapi.components.service
import com.intellij.openapi.project.Project
import com.intellij.openapi.startup.ProjectActivity
import io.ktor.server.application.Application
import io.ktor.server.application.call
import io.ktor.server.application.install
import io.ktor.server.engine.ApplicationEngine
import io.ktor.server.engine.embeddedServer
import io.ktor.server.html.respondHtml
import io.ktor.server.http.content.staticResources
import io.ktor.server.netty.Netty
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.websocket.WebSockets
import io.ktor.server.websocket.pingPeriod
import io.ktor.server.websocket.timeout
import jetbrains.mps.core.aspects.constraints.rules.Rule
import jetbrains.mps.core.aspects.constraints.rules.kinds.CanBeAncestorContext
import jetbrains.mps.core.aspects.constraints.rules.kinds.ContainmentContext
import jetbrains.mps.project.MPSProject
import jetbrains.mps.scope.Scope
import jetbrains.mps.smodel.constraints.ConstraintsCanBeFacade
import jetbrains.mps.smodel.constraints.ModelConstraints
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
import org.jetbrains.mps.openapi.language.SAbstractConcept
import org.jetbrains.mps.openapi.language.SContainmentLink
import org.jetbrains.mps.openapi.language.SProperty
import org.jetbrains.mps.openapi.language.SReferenceLink
import org.jetbrains.mps.openapi.model.SNode
import org.modelix.constraints.ConstraintsAspect
import org.modelix.constraints.IConstraintViolation
import org.modelix.constraints.IConstraintsChecker
import org.modelix.editor.ExistingNode
import org.modelix.editor.INonExistingNode
import org.modelix.editor.ancestors
import org.modelix.editor.ssr.server.ModelixSSRServer
import org.modelix.model.api.BuiltinLanguages
import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.ILanguageRepository
import org.modelix.model.api.INode
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink
import org.modelix.model.api.NodeReference
import org.modelix.model.api.runSynchronized
import org.modelix.model.mpsadapters.MPSChangeTranslator
import org.modelix.model.mpsadapters.MPSChildLink
import org.modelix.model.mpsadapters.MPSConcept
import org.modelix.model.mpsadapters.MPSLanguageRepository
import org.modelix.model.mpsadapters.MPSNode
import org.modelix.model.mpsadapters.MPSProperty
import org.modelix.model.mpsadapters.MPSReferenceLink
import org.modelix.model.mpsadapters.MPSRepositoryAsNode
import org.modelix.scopes.IScope
import org.modelix.scopes.IScopeProvider
import org.modelix.scopes.ScopeAspect
import java.net.URLEncoder
import java.nio.charset.StandardCharsets
import java.time.Duration
import java.util.Collections

@Service(Service.Level.PROJECT)
class ModelixSSRServerForMPSProject(private val project: Project) : Disposable {

    init {
        ApplicationManager.getApplication().service<ModelixSSRServerForMPS>().registerProject(project)
    }

    override fun dispose() {
        ApplicationManager.getApplication().service<ModelixSSRServerForMPS>().unregisterProject(project)
    }
}

@Service(Service.Level.APP)
class ModelixSSRServerForMPS : Disposable {

    private var ssrServer: ModelixSSRServer? = null
    private var ktorServer: ApplicationEngine? = null
    private var aspectsFromMPS: LanguageAspectsFromMPSModules? = null
    private var mpsChangeTranslator: MPSChangeTranslator? = null
    private var mpsLanguageRepository: MPSLanguageRepository? = null
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

            val repository = getMPSProjects().first().repository
            mpsLanguageRepository = MPSLanguageRepository(repository)
            ILanguageRepository.register(mpsLanguageRepository!!)
            mpsChangeTranslator = MPSChangeTranslator()
            mpsChangeTranslator!!.start(repository)
            val ssrServer = ModelixSSRServer((getRootNode() ?: return).getArea())
            this.ssrServer = ssrServer
            aspectsFromMPS = LanguageAspectsFromMPSModules(repository)
            ScopeAspect.registerScopeProvider(MPSScopeProvider)
            ConstraintsAspect.checkers.add(MPSConstraints)
            ssrServer.editorEngine.addRegistry(aspectsFromMPS!!)
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
            ssrServer?.dispose()
            ssrServer = null

            mpsLanguageRepository?.let { ILanguageRepository.unregister(it) }
            mpsLanguageRepository = null

            ScopeAspect.unregisterScopeProvider(MPSScopeProvider)
            ConstraintsAspect.checkers.remove(MPSConstraints)
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

object MPSScopeProvider : IScopeProvider {
    override fun getScope(sourceNode: INonExistingNode, link: IReferenceLink): IScope {
        val mpsSourceNode = sourceNode.getNode() as? MPSNode
        val descriptor = if (mpsSourceNode == null) {
            val contextNode: SNode = sourceNode.getExistingAncestor().toMPS()!!
            val containmentLink: SContainmentLink = sourceNode.getContainmentLink().toMPS()!!
            val index = sourceNode.index()
            val association: SReferenceLink = link.toMPS()!!
            val concept: SAbstractConcept = (sourceNode.getNode()?.concept ?: sourceNode.expectedConcept()).toMPS()!!
            ModelConstraints.getReferenceDescriptor(
                contextNode,
                containmentLink,
                index,
                association,
                concept,
            )
        } else {
            ModelConstraints.getReferenceDescriptor(mpsSourceNode.node, link.toMPS()!!)
        }
        return MPSScope(descriptor.getScope())
    }
}

class MPSScope(val scope: Scope) : IScope {
    override fun getVisibleElements(node: INonExistingNode, link: IReferenceLink): List<INonExistingNode> {
        return scope.getAvailableElements("").map { ExistingNode(MPSNode(it)) }
    }
}

object MPSConstraints : IConstraintsChecker {
    override fun check(node: INonExistingNode): List<IConstraintViolation> {
        // Constraints only prevent creating a node. If it already exists, it's handled by the model checker.
        if (node.getNode() != null) return emptyList()

        // ConstraintsCanBeFacade.checkCanBeRoot()

        val containmentContext = ContainmentContext.Builder()
            .parentNode(node.getParent()?.getNode().toMPS())
            .link(node.getContainmentLink().toMPS())
            .childConcept(node.expectedConcept().toMPS()!!)
            .build()

        val ancestorViolations = node.ancestors().flatMap { ancestor ->
            val ancestorNode = ancestor.getNode().toMPS() ?: return@flatMap emptyList()

            ConstraintsCanBeFacade.checkCanBeAncestor(
                CanBeAncestorContext.Builder()
                    .ancestorNode(ancestorNode)
                    .parentNode(node.getParent()?.getNode().toMPS())
                    .childConcept(node.expectedConcept().toMPS()!!)
                    .descendantNode(node.getNode().toMPS())
                    .link(node.getContainmentLink().toMPS())
                    .build(),
            )
        }
        val parentViolations = ConstraintsCanBeFacade.checkCanBeParent(containmentContext).asSequence()
        val childViolations = ConstraintsCanBeFacade.checkCanBeChild(containmentContext).asSequence()
        return (ancestorViolations + parentViolations + childViolations).map { MPSConstraintViolation(it) }.toList() +
            (node.getParent()?.let { check(it) } ?: emptyList())
    }
}

fun INode?.toMPS(): SNode? = if (this is MPSNode) this.node else null
fun IChildLink?.toMPS(): SContainmentLink? = if (this is MPSChildLink) this.link else null
fun IReferenceLink?.toMPS(): SReferenceLink? = if (this is MPSReferenceLink) this.link else null
fun IProperty?.toMPS(): SProperty? = if (this is MPSProperty) this.property else null
fun IConcept?.toMPS(): SAbstractConcept? = if (this is MPSConcept) this.concept else null

class MPSConstraintViolation(val rule: Rule<*>) : IConstraintViolation
