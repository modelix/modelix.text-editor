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
                val modelixCoreVersion = file("gradle/libs.versions.toml").readLines()
                    .first { it.startsWith("modelixCore = ") }
                    .substringAfter('"')
                    .substringBefore('"')
                from("org.modelix:core-version-catalog:$modelixCoreVersion")
            }
        }
    }
}

rootProject.name = "modelix.text-editor"

include("editor-common-mps")
include("kernelf-angular-demo")
include("kernelf-editor")
include("kernelf-apigen")
include("kernelf-ssr-demo")
include("projectional-editor")
include("mps")
include("mps-image-editor-server")
include("projectional-editor-ssr-client")
include("projectional-editor-ssr-client-lib")
include("projectional-editor-ssr-common")
include("projectional-editor-ssr-mps")
include("projectional-editor-ssr-mps-languages")
include("projectional-editor-ssr-server")
include("react-ssr-client")
include("react-ssr-mps")
include("react-ssr-server")
include("reverse-mpsadapters")
