import org.modelix.metamodel.generator.*

buildscript {
    repositories {
        mavenLocal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
    }
    dependencies {
        val modelixCoreVersion: String by rootProject
        classpath("org.modelix:metamodel-generator:$modelixCoreVersion")
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

kotlin {
    jvm()
    js(IR) {
        browser {}
        binaries.executable()
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
                implementation("org.modelix:metamodel-runtime:$modelixCoreVersion")
                implementation("org.modelix:editor-runtime:$modelixCoreVersion")
                implementation(kotlin("stdlib-common"))
                implementation("io.github.microutils:kotlin-logging:$kotlinLoggingVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:$kotlinCoroutinesVersion")
                implementation("org.modelix:model-client:$modelixCoreVersion")
                //implementation("org.jetbrains.kotlinx:kotlinx-html:$kotlinxHtmlVersion")
            }
            kotlin.srcDir(generatorOutputDir)
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
                implementation("org.modelix:metamodel-generator:$modelixCoreVersion")
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
            }
        }
    }
}

val generateMetaModelSources = tasks.create("generateMetaModelSources") {
    val languagesDir = file("languages")
    inputs.dir(languagesDir)
    outputs.dir(generatorOutputDir)
    doLast {
        val languages = languagesDir.walk()
            .filter { it.extension.toLowerCase() == "yaml" }
            .map { LanguageData.fromFile(it) }
            .toList()
        val generator = MetaModelGenerator(generatorOutputDir.toPath())
        generator.generate(languages)
        generator.generateRegistrationHelper("org.modelix.kernelf.KernelfLanguages")
    }
}

val cleanGeneratedMetaModelSources = tasks.create("cleanGeneratedMetaModelSources") {
    doLast {
        generatorOutputDir.deleteRecursively()
    }
}

tasks.matching { it.name.matches(Regex("""(.*compile.*Kotlin.*|.*[sS]ourcesJar.*)""")) }.configureEach {
    dependsOn(generateMetaModelSources)
}

tasks.named("clean") {
    dependsOn(cleanGeneratedMetaModelSources)
}

