import com.github.gradle.node.npm.task.NpmInstallTask
import com.github.gradle.node.task.NodeTask

plugins {
  base
  id("com.github.node-gradle.node") version "3.4.0"
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

val githubTokenToNpmrc = tasks.create("githubTokenToNpmrc") {
  val token = if (rootProject.hasProperty("gpr.token")) rootProject.property("gpr.token") else null
  val file = projectDir.resolve(".npmrc")
  var lines = file.readText().lines()
  lines = lines.filter { !it.startsWith("//npm.pkg.github.com/") }
  lines += "//npm.pkg.github.com/:_authToken=$token"
  file.writeText(lines.joinToString("\n"))
}

tasks.withType<NpmInstallTask> {
  dependsOn(githubTokenToNpmrc)
  dependsOn(":kernelf-editor:generateMetaModelSources")
  dependsOn(":kernelf-editor:jsBrowserDistribution")
}
