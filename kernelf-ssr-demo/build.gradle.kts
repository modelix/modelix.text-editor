plugins {
    kotlin("jvm")
    `maven-publish`
    application
}

dependencies {
    implementation(project(":kernelf-apigen"))
    implementation(project(":kernelf-editor"))
    implementation(project(":projectional-editor"))
    implementation(project(":projectional-editor-ssr-server"))
    implementation(libs.modelix.model.datastructure)
    implementation(coreLibs.ktor.server.core)
    implementation(coreLibs.ktor.server.netty)
    implementation(coreLibs.logback.classic)
    implementation("io.ktor:ktor-server-core-jvm:2.3.6")
    implementation("io.ktor:ktor-server-websockets-jvm:2.3.6")
}

application {
    mainClass.set("io.ktor.server.netty.EngineMain")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=true")
}