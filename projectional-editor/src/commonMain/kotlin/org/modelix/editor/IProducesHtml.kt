package org.modelix.editor

import kotlinx.html.Tag
import kotlinx.html.TagConsumer
import org.modelix.incremental.AtomicLong

interface IProducesHtml {
    var htmlGenerationId: String?
    fun isHtmlOutputValid(): Boolean = true
    fun <T> produceHtml(consumer: TagConsumer<T>)
}

private val idSequence = AtomicLong()
fun IProducesHtml.getInitializedId(): String {
    return htmlGenerationId ?: idSequence.incrementAndGet().toString(16).also { htmlGenerationId = it }
}

interface IIncrementalTagConsumer<E> : TagConsumer<E> {
    fun produce(producer: IProducesHtml): ()->E
}

fun Tag.produceChild(child: IProducesHtml?) {
    consumer.produceChild(child)
}

fun <T> TagConsumer<T>.produceChild(child: IProducesHtml?) {
    if (child == null) return
    if (this is IIncrementalTagConsumer) {
        produce(child)
    } else {
        child.produceHtml(this)
    }
}

fun <T> IProducesHtml.toHtml(consumer: TagConsumer<T>): T {
    return if (consumer is IIncrementalTagConsumer) {
        consumer.produce(this)()
    } else {
        produceHtml(consumer)
        consumer.finalize()
    }
}