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
    alias(coreLibs.plugins.npm.publish)
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
        nodejs {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
        }
        binaries.library()
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
                implementation(project(":language-aspects"))
                implementation(project(":behavior-aspect"))
                implementation(kotlin("stdlib-common"))
                implementation(coreLibs.kotlin.logging)
                implementation(coreLibs.kotlin.coroutines.core)
                implementation(libs.modelix.light.model.client)
                implementation(libs.modelix.model.client)
                implementation(libs.kotlin.html)
                api(project(":kernelf-apigen"))
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

npmPublish {
//    registries {
//        register("itemis-npm-open") {
//            uri.set("https://artifacts.itemis.cloud/repository/npm-open")
//            System.getenv("NODE_AUTH_TOKEN").takeIf { !it.isNullOrBlank() }?.let {
//                authToken.set(it)
//            }
//        }
//    }
    packages {
        named("js") {
            packageJson {
                name.set("@modelix/kernelf-editor")
            }
        }
    }
}

tasks.named("assembleJsPackage") {
    println(this::class.java.name)
}
