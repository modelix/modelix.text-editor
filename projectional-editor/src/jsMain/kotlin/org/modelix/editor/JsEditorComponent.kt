package org.modelix.editor

import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent

class JsEditorComponent(engine: EditorEngine, rootCellCreator: (EditorState) -> Cell) : EditorComponent(engine, JSDom(), rootCellCreator), IProducesHtml {
    init {
        (virtualDom as JSDom).originElement = getHtmlElement().unwrap()
        getHtmlElement().unwrap().addEventListener("click", { event: Event ->
            (event as? MouseEvent)?.let { processMouseEvent(it.convert(JSMouseEventType.CLICK, getHtmlElement().unwrap())) }
        })
        getHtmlElement().unwrap().addEventListener("keydown", { event: Event ->
            (event as? KeyboardEvent)?.let { if (processKeyDown(it.convert(JSKeyboardEventType.KEYDOWN))) event.preventDefault() }
        })
        getHtmlElement().unwrap().addEventListener("keyup", { event: Event ->
            (event as? KeyboardEvent)?.let { if (processKeyDown(it.convert(JSKeyboardEventType.KEYUP))) event.preventDefault() }
        })
    }
}
