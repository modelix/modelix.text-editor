buildscript {
    repositories {
        mavenLocal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
    }
    dependencies {
        classpath(libs.modelix.model.api)
        classpath("com.charleskorn.kaml:kaml:0.57.0")
    }
}

plugins {
    kotlin("multiplatform")
    `maven-publish`
    alias(libs.plugins.modelix.model.api.gen)
    alias(coreLibs.plugins.modelix.mps.buildtools)
}

val generatorOutputDir = buildDir.resolve("apigen").resolve("src_gen")
val tsGeneratorOutputDir = file("../kernelf-angular-demo/src/gen")

kotlin {
    jvm()
    js(IR) {
        browser {}
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
                implementation(libs.modelix.model.api.gen.runtime)
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

mpsBuild {
    mpsVersion("2022.2.1")
    externalModules("org.iets3:opensource:2022.2.6365.50b1f50")
}

metamodel {
    mpsHeapSize = "2g"
    dependsOn("copyDependencies")
    mpsHome = buildDir.resolve("mpsbuild/mps/mps-2022.2.1.zip")
    modulesFrom(buildDir.resolve("mpsbuild/dependencies"))
    includeNamespace("org.iets3.core.expr")
    includeLanguage("org.modelix.model.repositoryconcepts")
    includeLanguage("de.slisson.mps.richtext")
    includeConcept("jetbrains.mps.lang.test.TestInfo")
    kotlinProject = project
    kotlinDir = generatorOutputDir
    typescriptDir = tsGeneratorOutputDir
    registrationHelperName = "org.modelix.kernelf.KernelfLanguages"
    //exportModules("jetbrains.mps.baseLanguage")
}