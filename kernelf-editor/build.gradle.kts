import org.jetbrains.kotlin.com.google.gson.JsonPrimitive
import org.jetbrains.kotlin.com.google.gson.JsonParser

buildscript {
    repositories {
        mavenLocal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
    }
    dependencies {
        val modelixCoreVersion: String by rootProject
    }
}

plugins {
    kotlin("multiplatform")
    `maven-publish`
}

val modelixCoreVersion: String by rootProject
val kotlinLoggingVersion: String by rootProject
val kotlinCoroutinesVersion: String by rootProject
val kotlinxHtmlVersion: String by rootProject

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
        binaries.executable()
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
                implementation("org.modelix:model-api-gen-runtime:$modelixCoreVersion")
                implementation(project(":projectional-editor"))
                implementation(project(":language-aspects"))
                implementation(project(":behavior-aspect"))
                implementation(kotlin("stdlib-common"))
                implementation("io.github.microutils:kotlin-logging:$kotlinLoggingVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:$kotlinCoroutinesVersion")
                implementation("org.modelix:light-model-client:$modelixCoreVersion")
                implementation("org.modelix:model-client:$modelixCoreVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-html:$kotlinxHtmlVersion")
                implementation(project(":kernelf-apigen"))
            }
            kotlin.srcDir(generatorOutputDir)
        }
        val commonTest by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:$kotlinCoroutinesVersion")
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
                implementation(project(":kernelf-apigen"))
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-swing:$kotlinCoroutinesVersion")
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation("org.modelix:model-api-gen-runtime:$modelixCoreVersion")
                implementation(kotlin("test"))
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting {
            dependencies {
                api("org.modelix:model-api:$modelixCoreVersion")

                val localPath = rootDir.parentFile.resolve("modelix.core").resolve("ts-model-api")
                if (localPath.exists()) {
                    implementation(npm("@modelix/ts-model-api", localPath))
                } else {
                    implementation(npm("@modelix/ts-model-api", modelixCoreVersion))
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
    dependsOn("jsDevelopmentExecutableCompileSync")
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
tasks.named("jsBrowserDevelopmentWebpack") {
    dependsOn(fixSourceMaps)
}