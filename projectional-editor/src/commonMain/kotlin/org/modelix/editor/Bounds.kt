package org.modelix.editor

import kotlinx.serialization.Serializable

@Serializable
data class Bounds(val x: Double, val y: Double, val width: Double, val height: Double) {
    fun maxX() = x + width
    fun maxY() = y + height
    fun minX() = x
    fun minY() = y
}