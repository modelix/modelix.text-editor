import com.github.gradle.node.npm.task.NpmInstallTask

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

val copyGithubToken = tasks.create("copyGithubToken") {
  val token = if (rootProject.hasProperty("gpr.token")) {
    "" + rootProject.property("gpr.token")
  } else {
    System.getenv("GITHUB_TOKEN")
  }
  if (!token.isNullOrEmpty()) {
    projectDir.resolve(".env").writeText("GITHUB_TOKEN=$token")
  }
}

tasks.withType<NpmInstallTask> {
  dependsOn(copyGithubToken)
  dependsOn(":kernelf-editor:generateMetaModelSources")
  dependsOn(":kernelf-editor:jsBrowserDistribution")
}
