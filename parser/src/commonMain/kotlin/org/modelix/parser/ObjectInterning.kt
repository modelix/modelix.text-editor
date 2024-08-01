package org.modelix.parser

class ObjectInterning<E> {
    private val instances: MutableMap<E, E> = HashMap()

    fun deduplicate(obj: E) = instances.getOrPut(obj) { obj }
}
