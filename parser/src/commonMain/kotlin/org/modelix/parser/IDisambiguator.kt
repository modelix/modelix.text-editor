package org.modelix.parser

interface IDisambiguator {
    fun chooseActionIndex(actions: List<LRAction>): Int
}

fun IDisambiguator.chooseAction(actions: List<LRAction>): LRAction = actions[chooseActionIndex(actions)]

class IteratingDisambiguator : IDisambiguator {
    override fun chooseActionIndex(actions: List<LRAction>): Int {
        TODO("Not yet implemented")
    }
}

class ChooseFirstDisambiguator : IDisambiguator {
    override fun chooseActionIndex(actions: List<LRAction>): Int {
        return 0
    }
}
