import org.jetbrains.kotlin.gradle.targets.js.yarn.YarnLockMismatchReport
import org.jetbrains.kotlin.gradle.targets.js.yarn.YarnRootExtension
import org.semver.Version
import java.util.zip.ZipInputStream

buildscript {
    dependencies {
        classpath(coreLibs.semver)
    }
}

plugins {
    `maven-publish`
    id("com.palantir.git-version") version "3.0.0"
    id("com.dorongold.task-tree") version "2.1.1"
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
val tsModelApiVersion = "3.16.0" //if (tsModelApiPath.exists()) "file:${tsModelApiPath.absolutePath}" else libs.versions.modelixCore.get()
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
                    url = if (version.toString().contains("SNAPSHOT"))
                        uri("https://artifacts.itemis.cloud/repository/maven-mps-snapshots/")
                    else
                        uri("https://artifacts.itemis.cloud/repository/maven-mps-releases/")
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
}

rootProject.plugins.withType(org.jetbrains.kotlin.gradle.targets.js.yarn.YarnPlugin::class.java) {
    rootProject.the<YarnRootExtension>().yarnLockMismatchReport =
        YarnLockMismatchReport.WARNING // NONE | FAIL
    rootProject.the<YarnRootExtension>().reportNewYarnLock = false // true
    rootProject.the<YarnRootExtension>().yarnLockAutoReplace = false // true
}

// <editor-folding desc="download-mps">

// copied from https://github.com/modelix/modelix.mps-plugins/blob/d9bcc94cfe0bcbc02a0b61ffb88168d33b6502cd/build.gradle.kts#L125

val mpsVersion = project.findProperty("mps.version")?.toString()?.takeIf { it.isNotEmpty() }
    ?: "2023.2".also { ext["mps.version"] = it }
val mpsPlatformVersion = mpsVersion.replace(Regex("""20(\d\d)\.(\d+).*"""), "$1$2").toInt()
ext["mps.platform.version"] = mpsPlatformVersion
println("Building for MPS version $mpsVersion")

// Extract MPS during configuration phase, because using it in intellij.localPath requires it to already exist.
val mpsHome = project.layout.buildDirectory.dir("mps-$mpsVersion")
val mpsZip by configurations.creating
dependencies { mpsZip("com.jetbrains:mps:$mpsVersion") }
mpsHome.get().asFile.let { baseDir ->
    if (baseDir.exists()) return@let // content of MPS zip is not expected to change

    println("Extracting MPS ...")
    sync {
        from(zipTree({ mpsZip.singleFile }))
        into(mpsHome)
    }

    // The IntelliJ gradle plugin doesn't search in jar files when reading plugin descriptors, but the IDE does.
    // Copy the XML files from the jars to the META-INF folders to fix that.
    for (pluginFolder in (mpsHome.get().asFile.resolve("plugins").listFiles() ?: emptyArray())) {
        val jars = (pluginFolder.resolve("lib").listFiles() ?: emptyArray()).filter { it.extension == "jar" }
        for (jar in jars) {
            jar.inputStream().use {
                ZipInputStream(it).use { zip ->
                    val entries = generateSequence { zip.nextEntry }
                    for (entry in entries) {
                        if (entry.name.substringBefore("/") != "META-INF") continue
                        val outputFile = pluginFolder.resolve(entry.name)
                        if (outputFile.extension != "xml") continue
                        if (outputFile.exists()) {
                            println("already exists: $outputFile")
                            continue
                        }
                        outputFile.parentFile.mkdirs()
                        outputFile.writeBytes(zip.readAllBytes())
                        println("copied $outputFile")
                    }
                }
            }
        }
    }

    // The build number of a local IDE is expected to contain a product code, otherwise an exception is thrown.
    val buildTxt = mpsHome.get().asFile.resolve("build.txt")
    val buildNumber = buildTxt.readText()
    val prefix = "MPS-"
    if (!buildNumber.startsWith(prefix)) {
        buildTxt.writeText("$prefix$buildNumber")
    }

    println("Extracting MPS done.")
}

// </editor-folding>