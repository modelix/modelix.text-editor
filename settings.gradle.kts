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
                from("org.modelix:core-version-catalog:3.14.2-4-gf102fe4-SNAPSHOT")
            }
        }
    }
}

rootProject.name = "modelix.text-editor"

include("kernelf-angular-demo")
include("kernelf-editor")
include("kernelf-apigen")
include("kernelf-ssr-demo")
include("projectional-editor")
include("projectional-editor-ssr-client")
include("projectional-editor-ssr-common")
include("projectional-editor-ssr-mps")
include("projectional-editor-ssr-server")

