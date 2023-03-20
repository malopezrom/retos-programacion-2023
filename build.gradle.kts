import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    application
    kotlin("jvm") version "1.8.10"
}

val mainScript = file("Reto #10 - LA API [Media]/kotlin/malopezrom.kts")

dependencies {
    testImplementation(kotlin("test"))
    implementation(kotlin("stdlib-jdk8"))
    implementation(kotlin("script-runtime"))
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
    implementation 'com.google.code.gson:gson:2.8.8'
}

tasks.register("runScript") {
    dependsOn("build")
    doLast {
        javaexec {
            main = "org.jetbrains.kotlin.cli.jvm.K2JVMCompiler"
            classpath = configurations.getByName("runtimeClasspath")
            args = listOf("-script", mainScript.absolutePath)
        }
    }
}

repositories {
    mavenCentral()
}
val compileKotlin: KotlinCompile by tasks
compileKotlin.kotlinOptions {
    jvmTarget = "1.8"
}

val compileTestKotlin: KotlinCompile by tasks
compileTestKotlin.kotlinOptions {
    jvmTarget = "1.8"
}