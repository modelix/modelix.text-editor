package org.modelix.editor

interface IVirtualDom {
    interface Node {
        var parent: IVirtualDom.Node?
        val childNodes: MutableList<IVirtualDom.Node>
        fun getUserObject(key: String): Any?
        fun putUserObject(key: String, value: Any?)
        fun insertBefore(newNode: IVirtualDom.Node, referenceNode: IVirtualDom.Node?): IVirtualDom.Node
        fun appendChild(child: IVirtualDom.Node): IVirtualDom.Node
        fun replaceChild(newChild: IVirtualDom.Node, oldChild: IVirtualDom.Node): IVirtualDom.Node
        fun removeChild(child: IVirtualDom.Node): IVirtualDom.Node
    }
    interface Element : Node {
        val tagName: String
        fun getAttributeNames(): Array<String>
        fun getAttribute(qualifiedName: String): String?
        fun setAttribute(qualifiedName: String, value: String)
        fun removeAttribute(qualifiedName: String)
    }
    interface HTMLElement : Element
    interface Text : Node {
        var textContent: String?
    }

    fun createElement(localName: String): IVirtualDom.Element
    fun createTextNode(data: String): IVirtualDom.Text

    companion object {
        fun newInstance(): IVirtualDom = VirtualDom()
    }
}

private class VirtualDom : IVirtualDom {
    override fun createElement(localName: String): Element {
        return HTMLElement(localName)
    }
    override fun createTextNode(data: String): Text {
        return Text().also { it.textContent = data }
    }

    open inner class Node : IVirtualDom.Node {
        private val userObjects: MutableMap<String, Any> = HashMap()
        var id: String? = null
        override var parent: IVirtualDom.Node? = null
        override val childNodes: MutableList<IVirtualDom.Node> = ArrayList()

        override fun getUserObject(key: String): Any? = userObjects[key]

        override fun putUserObject(key: String, value: Any?) {
            if (value == null) {
                userObjects.remove(key)
            } else {
                userObjects[key] = value
            }
        }

        override fun insertBefore(newNode: IVirtualDom.Node, referenceNode: IVirtualDom.Node?): IVirtualDom.Node {
            if (referenceNode == null) return appendChild(newNode)
            val index = childNodes.indexOf(referenceNode)
            require(index >= 0) { "$referenceNode is not a child of $this" }
            childNodes.add(index, newNode)
            return newNode
        }
        override fun appendChild(child: IVirtualDom.Node): IVirtualDom.Node {
            childNodes += child
            return child
        }
        override fun replaceChild(newChild: IVirtualDom.Node, oldChild: IVirtualDom.Node): IVirtualDom.Node {
            val index = childNodes.indexOf(oldChild)
            require(index >= 0) { "$oldChild is not a child of $this" }
            childNodes[index] = newChild
            return oldChild
        }
        override fun removeChild(child: IVirtualDom.Node): IVirtualDom.Node {
            require(childNodes.remove(child)) { "$child is not a child of $this" }
            return child
        }
    }

    open inner class Element(override val tagName: String) : Node(), IVirtualDom.Element {
        private val attributes: MutableMap<String, String> = LinkedHashMap()
        override fun getAttributeNames(): Array<String> = attributes.keys.toTypedArray()
        override fun getAttribute(qualifiedName: String): String? = attributes[qualifiedName]
        override fun setAttribute(qualifiedName: String, value: String) { attributes[qualifiedName] = value }
        override fun removeAttribute(qualifiedName: String) { attributes.remove(qualifiedName) }
    }

    inner class HTMLElement(tagName: String) : Element(tagName), IVirtualDom.HTMLElement {
    }

    inner class Text : Node(), IVirtualDom.Text {
        override var textContent: String? = null
    }

}
