import com.github.gradle.node.yarn.task.YarnSetupTask

plugins {
    base
    alias(coreLibs.plugins.node)
}

node {
    version.set("22.2.0")
    npmVersion.set("10.7.0")
    download.set(true)
}

tasks.withType(YarnSetupTask::class.java) {
    dependsOn(":projectional-editor-ssr-client-lib:packJsPackage")
}

tasks.named("yarn_run_build") {
    inputs.dir("src")
    inputs.file("package.json")
    inputs.file("yarn.lock")

    outputs.dir("dist")
}

tasks.named("assemble") {
    dependsOn("yarn_run_build")
}
