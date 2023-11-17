package org.modelix.editor

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.DOMRect
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import org.w3c.dom.asList
import org.w3c.dom.events.MouseEvent
import kotlin.math.max
import kotlin.math.min

fun HTMLElement.getAbsoluteBounds(): Bounds {
    return getBoundingClientRect().toBounds().translated(window.scrollX, window.scrollY)
}

fun HTMLElement.setBounds(bounds: Bounds) {
    with(style) {
        left = "${bounds.x}px"
        top = "${bounds.y}px"
        width = "${bounds.width}px"
        height = "${bounds.height}px"
    }
}

fun HTMLElement.getAbsoluteInnerBounds(): Bounds {
    return (getClientRects().asSequence().firstOrNull()?.toBounds()?.translated(window.scrollX, window.scrollY) ?: ZERO_BOUNDS)
}

fun DOMRect.toBounds() = Bounds(x, y, width, height)

private fun getBodyAbsoluteBounds() = document.body?.getBoundingClientRect()?.toBounds() ?: ZERO_BOUNDS
fun MouseEvent.getAbsolutePositionX() = clientX - getBodyAbsoluteBounds().x
fun MouseEvent.getAbsolutePositionY() = clientY - getBodyAbsoluteBounds().y

fun Node.descendants(): Sequence<Node> = childNodes.asList().asSequence().flatMap { sequenceOf(it) + it.descendants() }
