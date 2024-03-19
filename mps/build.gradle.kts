import org.gradle.internal.jvm.Jvm

plugins {
    base
    `maven-publish`
    alias(libs.plugins.modelix.mps.buildtools)
}

val mpsVersion = project.findProperty("mps.version").toString()
val mpsPlatformVersion = project.findProperty("mps.platform.version").toString().toInt()
val mpsHomeDir = rootProject.layout.buildDirectory.dir("mps-$mpsVersion")

mpsBuild {
    mpsHome = mpsHomeDir.get().asFile.absolutePath
    javaHome = Jvm.current().javaHome

    search(".")
    publication("editor-languages") {
        module("org.modelix.mps.webaspect.devkit")
    }
    publication("already-packaged-modules") {
        module("org.modelix.mps.editor.ssr.stubs")
    }
}

// val ssrStubs: Configuration by configurations.creating
//
// dependencies {
//    ssrStubs(project(":projectional-editor-ssr-mps"))
// }
//
// val copyStubs = tasks.register("copySSRStubs", Sync::class) {
//    from(ssrStubs)
//    into(project.layout.projectDirectory.dir("org.modelix.mps.editor.ssr.stubs/lib"))
//
// }
