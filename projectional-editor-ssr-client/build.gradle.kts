plugins {
    alias(coreLibs.plugins.kotlin.multiplatform)
    `maven-publish`
}

kotlin {
    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
        binaries.executable()
        generateTypeScriptDefinitions()
        useCommonJs()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(project(":projectional-editor"))
                implementation(project(":projectional-editor-ssr-common"))
                implementation(coreLibs.ktor.client.core)
                implementation(coreLibs.ktor.client.websockets)
                implementation(coreLibs.ktor.client.js)
                implementation(libs.kotlin.html)
                implementation(libs.modelix.model.api)
                implementation(libs.kotlin.logging)
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
    }
}
