import org.modelix.gradle.mpsbuild.MPSBuildSettings

buildscript {
    repositories {
        mavenLocal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
    }
    dependencies {
        val modelixCoreVersion: String by rootProject
        classpath("org.modelix:model-api:$modelixCoreVersion")
        classpath("org.modelix:metamodel-generator:$modelixCoreVersion")
        classpath("com.charleskorn.kaml:kaml:0.48.0")
        classpath("org.modelix.mpsbuild:gradle-mpsbuild-plugin:1.0.8")
    }
}

plugins {
    kotlin("multiplatform")
    `maven-publish`
    id("org.modelix.metamodel.gradle")
}

apply(plugin = "modelix-gradle-mpsbuild-plugin")

val modelixCoreVersion: String by rootProject
val kotlinLoggingVersion: String by rootProject
val kotlinCoroutinesVersion: String by rootProject
val kotlinxHtmlVersion: String by rootProject

val generatorOutputDir = buildDir.resolve("apigen").resolve("src_gen")
val tsGeneratorOutputDir = file("../kernelf-angular-demo/src/gen")

kotlin {
    jvm()
    js(IR) {
        browser {}
        binaries.executable()
//        nodejs {
//            testTask {
//                useMocha {
//                    timeout = "10s"
//                }
//            }
//        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.modelix:metamodel-runtime:$modelixCoreVersion")
                implementation(kotlin("stdlib-common"))
            }
            kotlin.srcDir(generatorOutputDir)
        }
        val commonTest by getting {
            dependencies {
            }
        }
        val jvmMain by getting {
            dependencies {
            }
        }
        val jvmTest by getting {
            dependencies {
            }
        }
        val jsMain by getting {
            dependencies {
            }
        }
        val jsTest by getting {
            dependencies {
            }
        }
    }
}

extensions.configure<MPSBuildSettings> {
    //dependsOn(copyLibs)
    mpsVersion("2021.1.4")
    externalModules("org.iets3:opensource:2021.1.5939.+")
}

metamodel {
    mpsHeapSize = "2g"
    dependsOn("copyDependencies")
    mpsHome = buildDir.resolve("mpsbuild/mps/mps-2021.1.4.zip")
    modulesFrom(buildDir.resolve("mpsbuild/dependencies"))
    includeNamespace("org.iets3.core.expr")
    includeLanguage("org.modelix.model.repositoryconcepts")
    includeLanguage("de.slisson.mps.richtext")
    includeConcept("jetbrains.mps.lang.test.TestInfo")
    kotlinProject = project
    kotlinDir = generatorOutputDir
    typescriptDir = tsGeneratorOutputDir
    //exportModules("jetbrains.mps.baseLanguage")
}