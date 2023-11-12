import com.github.gradle.node.npm.task.NpmInstallTask
import com.github.gradle.node.npm.task.NpmSetupTask
import com.github.gradle.node.npm.task.NpmTask

plugins {
    base
    id("com.github.node-gradle.node") version "7.0.1"
}

node {
    version.set("18.3.0")
    npmVersion.set("8.11.0")
    download.set(true)
}

tasks.named("npm_run_build") {
    inputs.dir("src")
    inputs.file("package.json")
    inputs.file("package-lock.json")

    outputs.dir("dist")
}

tasks.named("assemble") {
    dependsOn("npm_run_build")
}

tasks.withType<NpmSetupTask> {
    dependsOn(":kernelf-apigen:generateMetaModelSources")
    dependsOn(":kernelf-editor:packJsPackage")
}

val updateTask = tasks.register<NpmTask>("updateOwnDependencies") {
    args = listOf("update", "@modelix/kernelf-editor")
}

tasks.withType<NpmInstallTask> {
    dependsOn(updateTask)
}
