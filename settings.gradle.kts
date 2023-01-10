pluginManagement {
    val kotlinVersion: String by settings
    plugins {
        kotlin("multiplatform") version kotlinVersion apply false
        kotlin("plugin.serialization") version kotlinVersion apply false
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

rootProject.name = "modelix.kernelf"

include("kernelf-angular-demo")
include("kernelf-editor")
include("kernelf-apigen")

