import org.jetbrains.kotlin.gradle.dsl.KotlinJvmProjectExtension
import org.jetbrains.kotlin.gradle.dsl.KotlinMultiplatformExtension
import org.jetbrains.kotlin.gradle.plugin.KotlinMultiplatformPluginWrapper
import org.jetbrains.kotlin.gradle.plugin.KotlinPlatformJvmPlugin
import org.jetbrains.kotlin.gradle.targets.js.yarn.YarnLockMismatchReport
import org.jetbrains.kotlin.gradle.targets.js.yarn.YarnRootExtension
import org.modelix.copyMps
import org.semver.Version

buildscript {
    dependencies {
        classpath(coreLibs.semver)
    }
}

plugins {
    `maven-publish`
    id("com.palantir.git-version") version "3.1.0"
    id("com.dorongold.task-tree") version "4.0.0"
    alias(coreLibs.plugins.kotlin.multiplatform) apply false
    alias(coreLibs.plugins.kotlin.serialization) apply false
}

group = "org.modelix"
description = "KernelF editor implemented with Modelix "
version = computeVersion()
println("Version: $version")

fun computeVersion(): Any {
    val versionFile = file("version.txt")
    if (versionFile.exists()) return versionFile.readText().trim()

    val gitVersion: groovy.lang.Closure<String> by extra
    var version = if (versionFile.exists()) versionFile.readText().trim() else gitVersion()
    if (!versionFile.exists() && "true" != project.findProperty("ciBuild")) {
        version = "$version-SNAPSHOT"
    }

    // NPM requires a valid semantic version
    try {
        Version.parse(version)
    } catch (_: IllegalArgumentException) {
        version = "0.0.0-$version"
    }
    versionFile.writeText(version)

    return version
}

val tsModelApiPath = rootDir.parentFile.resolve("modelix.core").resolve("ts-model-api")
val tsModelApiVersion = "3.16.0" // if (tsModelApiPath.exists()) "file:${tsModelApiPath.absolutePath}" else libs.versions.modelixCore.get()
ext.set("ts-model-api.version", tsModelApiVersion)

subprojects {
    apply(plugin = "maven-publish")
    version = rootProject.version
    group = rootProject.group

    repositories {
        mavenLocal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
        maven { url = uri("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven") }
        mavenCentral()
    }

    publishing {
        repositories {
            if (project.hasProperty("artifacts.itemis.cloud.user")) {
                maven {
                    name = "itemis"
                    url = if (version.toString().contains("SNAPSHOT")) {
                        uri("https://artifacts.itemis.cloud/repository/maven-mps-snapshots/")
                    } else {
                        uri("https://artifacts.itemis.cloud/repository/maven-mps-releases/")
                    }
                    credentials {
                        username = project.findProperty("artifacts.itemis.cloud.user").toString()
                        password = project.findProperty("artifacts.itemis.cloud.pw").toString()
                    }
                }
            }
        }
    }
}

subprojects {
    val sourceFile = rootDir.resolve(".npmrc")
    val targetFile = projectDir.resolve(".npmrc")
    if (!targetFile.exists() && sourceFile.exists()) {
        sourceFile.copyTo(targetFile)
    }

    val kotlinApiVersion = org.jetbrains.kotlin.gradle.dsl.KotlinVersion.KOTLIN_1_6
    plugins.withType<JavaPlugin> {
        extensions.configure<JavaPluginExtension> {
            toolchain {
                languageVersion.set(JavaLanguageVersion.of(11))
            }
        }
    }

    plugins.withType<KotlinPlatformJvmPlugin> {
        extensions.configure<KotlinJvmProjectExtension> {
            jvmToolchain(11)
            sourceSets.all {
                if (!name.lowercase().contains("test")) {
                    languageSettings {
                        apiVersion = kotlinApiVersion.version
                    }
                }
            }
        }
    }

    plugins.withType<KotlinMultiplatformPluginWrapper> {
        extensions.configure<KotlinMultiplatformExtension> {
            jvmToolchain(11)
            sourceSets.all {
                if (!name.lowercase().contains("test")) {
                    languageSettings {
                        apiVersion = kotlinApiVersion.version
                    }
                }
            }
        }
    }
}

rootProject.plugins.withType(org.jetbrains.kotlin.gradle.targets.js.yarn.YarnPlugin::class.java) {
    rootProject.the<YarnRootExtension>().yarnLockMismatchReport =
        YarnLockMismatchReport.WARNING // NONE | FAIL
    rootProject.the<YarnRootExtension>().reportNewYarnLock = false // true
    rootProject.the<YarnRootExtension>().yarnLockAutoReplace = false // true
}

copyMps()
