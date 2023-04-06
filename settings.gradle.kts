pluginManagement {
    val kotlinVersion: String by settings
    val modelixCoreVersion: String by settings
    plugins {
        kotlin("multiplatform") version kotlinVersion apply false
        kotlin("plugin.serialization") version kotlinVersion apply false
        id("org.modelix.model-api-gen") version modelixCoreVersion apply false
    }
    resolutionStrategy {
    }
    repositories {
        mavenLocal()
        gradlePluginPortal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
        mavenCentral()
    }
}

rootProject.name = "modelix.text-editor"

include("kernelf-angular-demo")
include("kernelf-editor")
include("kernelf-apigen")
include("projectional-editor")
include("behavior-aspect")
include("language-aspects")

