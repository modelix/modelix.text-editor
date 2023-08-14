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
            val modelixCoreVersion = "2.15.5-4-gd78d7ea.dirty-2-SNAPSHOT"
            create("libs")
            getByName("libs") {
                version("modelixCore", modelixCoreVersion)
            }
            create("coreLibs") {
                from("org.modelix:core-version-catalog:$modelixCoreVersion")
            }
        }
    }
}

rootProject.name = "modelix.text-editor"

include("kernelf-angular-demo")
include("kernelf-editor")
include("kernelf-apigen")
include("projectional-editor")
include("behavior-aspect")
include("language-aspects")

