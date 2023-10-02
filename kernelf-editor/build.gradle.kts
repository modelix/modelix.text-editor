import org.jetbrains.kotlin.com.google.gson.JsonPrimitive
import org.jetbrains.kotlin.com.google.gson.JsonParser

buildscript {
    repositories {
        mavenLocal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
    }
    dependencies {
    }
}

plugins {
    kotlin("multiplatform")
    `maven-publish`
}

val generatorOutputDir = file("src/commonMain/kotlin_gen")
val tsGeneratorOutputDir = file("../kernelf-angular-demo/src/gen")

kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "11"
        }
    }
    js(IR) {
        browser {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
        }
        binaries.library()
        nodejs {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
        }
        generateTypeScriptDefinitions()
    }

    sourceSets {
        all {
            languageSettings.optIn("kotlin.js.ExperimentalJsExport")
        }
        val commonMain by getting {
            dependencies {
                implementation(libs.modelix.model.api.gen.runtime)
                implementation(project(":projectional-editor"))
                implementation(kotlin("stdlib-common"))
                implementation(coreLibs.kotlin.logging)
                implementation(coreLibs.kotlin.coroutines.core)
                implementation(libs.modelix.light.model.client)
                implementation(libs.modelix.model.client)
                implementation(libs.kotlin.html)
                implementation(project(":kernelf-apigen"))
            }
            kotlin.srcDir(generatorOutputDir)
        }
        val commonTest by getting {
            dependencies {
                implementation(coreLibs.kotlin.coroutines.test)
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
                implementation(project(":kernelf-apigen"))
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation(coreLibs.kotlin.coroutines.swing)
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation(libs.modelix.model.api.gen.runtime)
                implementation(kotlin("test"))
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting {
            dependencies {
                api(libs.modelix.model.api)

                val localPath = rootDir.parentFile.resolve("modelix.core").resolve("ts-model-api")
                if (localPath.exists()) {
                    implementation(npm("@modelix/ts-model-api", localPath))
                } else {
                    implementation(npm("@modelix/ts-model-api", libs.versions.modelixCore.get()))
                }
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
                implementation(npm("jsdom", "20.0.1"))
                implementation(npm("@types/jsdom", "20.0.1"))
            }
        }
    }
}

fun fixSourceMap(sourcesDir: File, sourceMapFile: File) {
    if (!sourcesDir.exists()) return
    if (!sourceMapFile.exists()) return
    val json = JsonParser.parseString(sourceMapFile.readText()).asJsonObject
    val correctPaths = sourcesDir.walk().associateBy { it.name }
    val wrongPaths = json.getAsJsonArray("sources")
    wrongPaths.forEachIndexed { index, wrongPath ->
        val fileName = wrongPath.asString.substringAfterLast('/')
        val resolvedFile = correctPaths[fileName]
        if (resolvedFile != null) {
            wrongPaths.set(index, JsonPrimitive(resolvedFile.absolutePath))
        }
    }

    sourceMapFile.writeText(json.toString())
}

val fixSourceMaps by tasks.registering {
    dependsOn("jsDevelopmentLibraryCompileSync")
    doLast {
//        fixSourceMap(
//            rootDir.resolve("../modelix.core/editor-runtime/src").canonicalFile,
//            rootDir.resolve("build/js/packages/modelix.kernelf-kernelf-editor/kotlin/modelix.core-editor-runtime.js.map")
//        )
        fixSourceMap(
            rootDir.resolve("../modelix.core/model-api/src").canonicalFile,
            rootDir.resolve("build/js/packages/modelix.kernelf-kernelf-editor/kotlin/modelix.core-model-api-js-ir.js.map")
        )
        fixSourceMap(
            rootDir.resolve("../modelix.core/model-api-gen-runtime/src").canonicalFile,
            rootDir.resolve("build/js/packages/modelix.kernelf-kernelf-editor/kotlin/modelix.core-model-api-gen-runtime-js-ir.js.map")
        )
        fixSourceMap(
            rootDir.resolve("../modelix.core/model-client/src").canonicalFile,
            rootDir.resolve("build/js/packages/modelix.kernelf-kernelf-editor/kotlin/modelix.core-model-client-js-ir.js.map")
        )
        fixSourceMap(
            rootDir.resolve("../incremental/src").canonicalFile,
            rootDir.resolve("build/js/packages/modelix.kernelf-kernelf-editor/kotlin/incremental.js.map")
        )

    }
}
tasks.named("jsBrowserDevelopmentLibraryDistribution") {
    dependsOn(fixSourceMaps)
}

listOf("jsBrowserDevelopmentLibraryPrepare", "jsBrowserProductionLibraryPrepare", "jsNodeDevelopmentLibraryPrepare", "jsNodeProductionLibraryPrepare").forEach {
    tasks.named(it) {
        // because it uses build/js/packages/modelix.text-editor-kernelf-editor/kotlin
        dependsOn("jsDevelopmentLibraryCompileSync")
        dependsOn("jsProductionLibraryCompileSync")
    }
}
