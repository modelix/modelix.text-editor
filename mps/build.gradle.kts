import org.gradle.internal.jvm.Jvm
import org.modelix.mpsHomeDir

plugins {
    base
    `maven-publish`
    alias(libs.plugins.modelix.mps.buildtools)
}

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
