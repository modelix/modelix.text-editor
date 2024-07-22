import org.modelix.mpsHomeDir

plugins {
    kotlin("jvm")
}

kotlin {
    jvmToolchain(17)
}

dependencies {
    implementation(libs.modelix.mps.model.adapters)
    compileOnly(
        fileTree(mpsHomeDir).matching {
            include("lib/*.jar")
        },
    )
}

tasks {
    compileKotlin {
        kotlinOptions {
            apiVersion = "1.6"
        }
    }
}

group = "org.modelix.mps"
