package org.modelix.editor

import kotlinx.browser.document
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import org.w3c.dom.Text
import org.w3c.dom.asList

class JSDom(private val originElement: Element) : IVirtualDom, IVirtualDomUI {
    private fun getOrigin() = originElement.getAbsoluteBounds()

    override val ui: IVirtualDomUI
        get() = this

    override fun getOuterBounds(element: IVirtualDom.Element): Bounds {
        return element.unwrap().getAbsoluteBounds().relativeTo(getOrigin())
    }

    override fun getInnerBounds(element: IVirtualDom.Element): Bounds {
        return element.unwrap().getAbsoluteInnerBounds().relativeTo(getOrigin())
    }

    override fun getElementsAt(x: Double, y: Double): List<IVirtualDom.Element> {
        return document.elementsFromPoint(x, y).map { it.wrap() }
    }

    override fun createElement(localName: String): IVirtualDom.Element {
        return document.createElement(localName).wrap()
    }

    override fun createTextNode(data: String): IVirtualDom.Text {
        return document.createTextNode(data).wrap()
    }

    private fun wrap(node: Node): IVirtualDom.Node {
        return when (node) {
            is HTMLElement -> HTMLElementWrapper(node)
            is Element -> ElementWrapper(node)
            is Text -> TextNodeWrapper(node)
            else -> NodeWrapper(node)
        }
    }

    fun Node.wrap(): IVirtualDom.Node = wrap(this)
    fun Element.wrap(): IVirtualDom.Element = wrap(this) as IVirtualDom.Element
    fun HTMLElement.wrap(): IVirtualDom.HTMLElement = wrap(this) as IVirtualDom.HTMLElement
    fun Text.wrap(): IVirtualDom.Text = wrap(this) as IVirtualDom.Text

    open inner class NodeWrapper(private val node: Node) : IVirtualDom.Node {
        open fun getWrappedNode(): Node = node

        override val parent: IVirtualDom.Node?
            get() = node.parentNode?.wrap()
        override val childNodes: List<IVirtualDom.Node>
            get() = node.childNodes.asList().map { it.wrap() }

        override fun getUserObject(key: String): Any? {
            return node.asDynamic()["key"]
        }

        override fun putUserObject(key: String, value: Any?) {
            node.asDynamic()["key"] = value
        }

        override fun insertBefore(newNode: IVirtualDom.Node, referenceNode: IVirtualDom.Node?): IVirtualDom.Node {
            return node.insertBefore(newNode.unwrap(), referenceNode?.unwrap()).wrap()
        }

        override fun appendChild(child: IVirtualDom.Node): IVirtualDom.Node {
            return node.appendChild(child.unwrap()).wrap()
        }

        override fun replaceChild(newChild: IVirtualDom.Node, oldChild: IVirtualDom.Node): IVirtualDom.Node {
            return node.replaceChild(newChild.unwrap(), oldChild.unwrap()).wrap()
        }

        override fun removeChild(child: IVirtualDom.Node): IVirtualDom.Node {
            return node.removeChild(child.unwrap()).wrap()
        }

        override fun remove() {
            node.parentNode?.removeChild(node)
        }
    }

    open inner class TextNodeWrapper(node: Text) : NodeWrapper(node), IVirtualDom.Text {
        override fun getWrappedNode() = super.getWrappedNode() as Text
        override var textContent: String?
            get() = getWrappedNode().textContent
            set(value) { getWrappedNode().textContent = value }
    }

    open inner class ElementWrapper(node: Element) : NodeWrapper(node), IVirtualDom.Element {
        override fun getWrappedNode() = super.getWrappedNode() as Element
        override val tagName: String
            get() = getWrappedNode().nodeName

        override fun getAttributeNames(): Array<String> {
            return getWrappedNode().getAttributeNames()
        }

        override fun getAttribute(qualifiedName: String): String? {
            return getWrappedNode().getAttribute(qualifiedName)
        }

        override fun setAttribute(qualifiedName: String, value: String) {
            return getWrappedNode().setAttribute(qualifiedName, value)
        }

        override fun removeAttribute(qualifiedName: String) {
            return getWrappedNode().removeAttribute(qualifiedName)
        }

        override fun getInnerBounds(): Bounds {
            return getWrappedNode().getAbsoluteInnerBounds().relativeTo(getOrigin())
        }

        override fun getOuterBounds(): Bounds {
            return getWrappedNode().getAbsoluteBounds().relativeTo(getOrigin())
        }
    }
    inner class HTMLElementWrapper(node: HTMLElement) : ElementWrapper(node), IVirtualDom.HTMLElement {
        override fun getWrappedNode() = super.getWrappedNode() as HTMLElement
    }
}


fun IVirtualDom.HTMLElement.unwrap(): HTMLElement = (this as JSDom.HTMLElementWrapper).getWrappedNode()
fun IVirtualDom.Element.unwrap(): Element = (this as JSDom.ElementWrapper).getWrappedNode()
fun IVirtualDom.Node.unwrap(): Node = (this as JSDom.NodeWrapper).getWrappedNode()
