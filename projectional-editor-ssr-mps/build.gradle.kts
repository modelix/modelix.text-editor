import com.jetbrains.plugin.structure.intellij.utils.JDOMUtil
import org.jdom2.Element
import org.jetbrains.intellij.transformXml

buildscript {
    dependencies {
        classpath(coreLibs.semver)
    }
}

plugins {
    kotlin("jvm")
    id("org.jetbrains.intellij") version "1.16.0"
}

kotlin {
    jvmToolchain(11)
}

dependencies {
    implementation(project(":projectional-editor"))
    implementation(project(":projectional-editor-ssr-server"))
    implementation(libs.modelix.mps.model.adapters)

    implementation(coreLibs.ktor.server.core)
    implementation(coreLibs.ktor.server.netty)
    implementation(coreLibs.ktor.server.websockets)
    implementation(coreLibs.ktor.server.html.builder)
    implementation(coreLibs.logback.classic)
    implementation(coreLibs.kotlin.logging)
}

tasks.processResources {
    dependsOn(project(":projectional-editor-ssr-client").tasks.named("jsBrowserDistribution"))
}

sourceSets {
    main {
        resources {
            srcDir(project(":projectional-editor-ssr-client").layout.buildDirectory.dir("dist"))
        }
    }
}

val mpsVersion = project.findProperty("mps.version").toString()
val mpsPlatformVersion = project.findProperty("mps.platform.version").toString().toInt()
val mpsHome = rootProject.layout.buildDirectory.dir("mps-$mpsVersion")

// Configure Gradle IntelliJ Plugin
// Read more: https://plugins.jetbrains.com/docs/intellij/tools-gradle-intellij-plugin.html
intellij {
    localPath = mpsHome.map { it.asFile.absolutePath }
    instrumentCode = false
}

tasks {
    compileKotlin {
        kotlinOptions {
            apiVersion = "1.6"
        }
    }
    patchPluginXml {
        sinceBuild.set("232.10072.781")
        untilBuild.set("232.10072.781")
    }

    buildSearchableOptions {
        enabled = false
    }

//    signPlugin {
//        certificateChain.set(System.getenv("CERTIFICATE_CHAIN"))
//        privateKey.set(System.getenv("PRIVATE_KEY"))
//        password.set(System.getenv("PRIVATE_KEY_PASSWORD"))
//    }
//
//    publishPlugin {
//        token.set(System.getenv("PUBLISH_TOKEN"))
//    }

    runIde {
        autoReloadPlugins.set(true)
    }


    val stubsSolutionName = "org.modelix.mps.editor.ssr.stubs"
    val patchedStubsSolutionDir = project.layout.buildDirectory.dir(stubsSolutionName)
    val patchedStubsSolutionFile = project.layout.buildDirectory.file("$stubsSolutionName/$stubsSolutionName.msd")
    val patchStubsSolution = register("patchStubsSolution") {
        outputs.file(patchedStubsSolutionFile)
        doLast {
            val ownJar: File = prepareSandbox.get().pluginJar.get().asFile

            val originalFile = project(":mps").layout.projectDirectory.file("$stubsSolutionName/$stubsSolutionName.msd").asFile
            val xml = originalFile.inputStream().use { JDOMUtil.loadDocument(it) }

            val modelRoot = xml.descendants.filterIsInstance<org.jdom2.Element>().first { it.name == "modelRoot" }
            val javaFacet = xml.descendants.filterIsInstance<org.jdom2.Element>().first { it.name == "facet" }
            modelRoot.removeChildren("sourceRoot")
            javaFacet.removeChildren("library")
            val runtimeJars = configurations.getByName(JavaPlugin.RUNTIME_CLASSPATH_CONFIGURATION_NAME).resolvedConfiguration.files + ownJar
            runtimeJars.forEach { file ->
                javaFacet.addContent(Element("library").also { it.setAttribute("location", "\${module}/../../../../lib/" + file.name) })
            }
            val stubModelJars =
                configurations.getByName(JavaPlugin.RUNTIME_CLASSPATH_CONFIGURATION_NAME).resolvedConfiguration.resolvedArtifacts.filter {
                    it.moduleVersion.id.group.startsWith("org.modelix")
                }.map { it.file } + ownJar
            stubModelJars.forEach { file ->
                modelRoot.addContent(Element("sourceRoot").also { it.setAttribute("location", file.name) })
            }

            transformXml(xml, patchedStubsSolutionFile.get().asFile.toPath())
        }
    }

    val packageStubsSolution = register("packageStubsSolution", Zip::class.java) {
        dependsOn(patchStubsSolution)
        from(patchedStubsSolutionDir)
            .into("modules/$stubsSolutionName")
        archiveFileName = "$stubsSolutionName.jar"
    }

    val mpsPluginDir = project.findProperty("mps232.plugins.dir")?.toString()?.let { file(it) }
    if (mpsPluginDir != null && mpsPluginDir.isDirectory) {
        create<Sync>("installMpsPlugin") {
            dependsOn(prepareSandbox)
            from(project.layout.buildDirectory.dir("idea-sandbox/plugins/${project.name}"))
            into(mpsPluginDir.resolve(project.name))
        }
    }

    prepareSandbox {
        dependsOn(packageStubsSolution)
        dependsOn(project(":mps").tasks.named("packageMpsPublications"))
        intoChild(pluginName.map { "$it/languages" })
            .from(packageStubsSolution.map { it.archiveFile })
        intoChild(pluginName.map { "$it/languages" })
            .from(zipTree({ project(":mps").layout.buildDirectory.file("mpsbuild/publications/editor-languages.zip") }))
            .eachFile {
                path = path.replaceFirst("packaged-modules/", "")
            }
    }
}

group = "org.modelix.mps"

publishing {
    publications {
        create<MavenPublication>("maven") {
            artifact(tasks.buildPlugin) {
                extension = "zip"
            }
        }
    }
}
