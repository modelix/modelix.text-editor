package org.modelix.editor

import kotlinx.html.div
import kotlinx.html.tabIndex
import org.modelix.model.area.IArea
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent

class JsEditorComponent(engine: EditorEngine, transactionManager: IArea?, rootCellCreator: (EditorState) -> Cell) : EditorComponent(engine, JSDom(), transactionManager, rootCellCreator), IProducesHtml {

    val containerElement: IVirtualDom.HTMLElement = virtualDom.create().div("js-editor-component") {
        tabIndex = "-1" // allows setting keyboard focus
    }

    init {
        (virtualDom as JSDom).originElement = containerElement.unwrap()
        containerElement.unwrap().addEventListener("click", { event: Event ->
            (event as? MouseEvent)?.let { processMouseEvent(it.convert(JSMouseEventType.CLICK, containerElement.unwrap())) }
        })
        containerElement.unwrap().addEventListener("keydown", { event: Event ->
            (event as? KeyboardEvent)?.let { if (processKeyDown(it.convert(JSKeyboardEventType.KEYDOWN))) event.preventDefault() }
        })
        containerElement.unwrap().addEventListener("keyup", { event: Event ->
            (event as? KeyboardEvent)?.let { if (processKeyDown(it.convert(JSKeyboardEventType.KEYUP))) event.preventDefault() }
        })
    }

    override fun editorElementChanged(newElement: IVirtualDom.HTMLElement) {
        super.editorElementChanged(newElement)
        containerElement.childNodes.forEach { it.remove() }
        containerElement.appendChild(newElement)
    }
}
