plugins {
    kotlin("multiplatform")
    `maven-publish`
}

val modelixCoreVersion: String by rootProject
val modelixIncrementalVersion: String by rootProject
val kotlinVersion: String by rootProject
val kotlinCoroutinesVersion: String by rootProject
val ktorVersion: String by rootProject
val kotlinLoggingVersion: String by rootProject
val kotlinxHtmlVersion: String by rootProject

kotlin {
    jvm()
    js(IR) {
        browser {}
        nodejs {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.modelix:model-api:$modelixCoreVersion")
                implementation("org.modelix:model-api-gen-runtime:$modelixCoreVersion")
                implementation(kotlin("stdlib-common"))
                implementation("io.github.microutils:kotlin-logging:$kotlinLoggingVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:$kotlinCoroutinesVersion")
                api("org.modelix:incremental:$modelixIncrementalVersion")
                api("org.jetbrains.kotlinx:kotlinx-html:$kotlinxHtmlVersion")
                implementation(project(":language-aspects"))
                implementation(project(":behavior-aspect"))
            }
        }
        val commonTest by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:$kotlinCoroutinesVersion")
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-swing:$kotlinCoroutinesVersion")
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting {
            dependencies {
            }
        }
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
                implementation(npm("jsdom-global", "3.0.2"))
                implementation(npm("jsdom", "20.0.2"))
            }
        }
    }
}