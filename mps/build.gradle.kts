import org.gradle.internal.jvm.Jvm
import org.modelix.mpsHomeDir

plugins {
    base
    `maven-publish`
    alias(libs.plugins.modelix.mps.buildtools)
}

mpsBuild {
    dependsOn(":projectional-editor-ssr-mps:buildPlugin")
    mpsHome = mpsHomeDir.get().asFile.absolutePath
    javaHome = Jvm.current().javaHome

    search("../projectional-editor-ssr-mps/build/idea-sandbox/plugins/projectional-editor-ssr-mps")
    search("modules")
    publication("editor-languages") {
        module("org.modelix.mps.webaspect.devkit")
        module("org.modelix.mps.webaspect.genplan")
        module("org.modelix.mps.baseLanguage2kotlin")
        module("org.modelix.mps.notation")
    }
    publication("baseLanguage-notation") {
        module("org.modelix.mps.notation.impl.baseLanguage")
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
