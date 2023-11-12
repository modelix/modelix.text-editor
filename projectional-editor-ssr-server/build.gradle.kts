plugins {
    kotlin("jvm")
    `maven-publish`
}

dependencies {
    implementation(project(":projectional-editor"))
    implementation(coreLibs.ktor.server.core)
    implementation(coreLibs.ktor.server.websockets)
}

