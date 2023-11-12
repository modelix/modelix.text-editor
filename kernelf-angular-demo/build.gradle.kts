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

val updateTsModelApiVersion = tasks.create("updateTsModelApiVersion") {
  doLast {
    val localPath = rootDir.parentFile.resolve("modelix.core").resolve("ts-model-api")
    val packageJsonFile = projectDir.resolve("package.json")
    var text = packageJsonFile.readText()
    println("ts-model-api path: $localPath")
    val replacement = if (localPath.exists()) {
      """"@modelix/ts-model-api": "file:${localPath.relativeTo(projectDir)}""""
    } else {
      """"@modelix/ts-model-api": "${libs.versions.modelixCore.get()}""""
    }
    println("ts-model-api version: $replacement")
    text = text.replace(Regex(""""@modelix/ts-model-api": ".*""""), replacement)
    packageJsonFile.writeText(text)
  }
}

tasks.withType<NpmSetupTask> {
    dependsOn(updateTsModelApiVersion)
    dependsOn(":kernelf-apigen:generateMetaModelSources")
    dependsOn(":kernelf-editor:packJsPackage")
}

val updateTask = tasks.register<NpmTask>("updateOwnDependencies") {
    args = listOf("update", "@modelix/kernelf-editor")
}

tasks.withType<NpmInstallTask> {
    dependsOn(updateTask)
}
