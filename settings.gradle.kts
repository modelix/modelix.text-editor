pluginManagement {
    repositories {
        mavenLocal()
        gradlePluginPortal()
        maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
        mavenCentral()
    }
    dependencyResolutionManagement {
        repositories {
            mavenLocal()
            gradlePluginPortal()
            maven { url = uri("https://artifacts.itemis.cloud/repository/maven-mps/") }
            mavenCentral()
        }
        versionCatalogs {
            create("coreLibs") {
                from("org.modelix:core-version-catalog:3.13.1")
            }
        }
    }
}

rootProject.name = "modelix.text-editor"

include("kernelf-angular-demo")
include("kernelf-editor")
include("kernelf-apigen")
include("projectional-editor")

