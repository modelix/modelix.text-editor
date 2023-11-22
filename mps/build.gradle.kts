plugins {
    base
    `maven-publish`
}

//val ssrStubs: Configuration by configurations.creating
//
//dependencies {
//    ssrStubs(project(":projectional-editor-ssr-mps"))
//}
//
//val copyStubs = tasks.register("copySSRStubs", Sync::class) {
//    from(ssrStubs)
//    into(project.layout.projectDirectory.dir("org.modelix.mps.editor.ssr.stubs/lib"))
//
//}
