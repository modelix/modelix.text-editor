package org.modelix.parser

import net.akehurst.language.api.sppt.SpptDataNode
import net.akehurst.language.api.sppt.SpptDataNodeInfo
import net.akehurst.language.api.sppt.SpptWalker

class ParseTreeConverter : SpptWalker {
    var root: ConceptParseTreeNode? = null
    val stack = ArrayList<ParseTreeNode>()

    override fun beginTree() {
        stack.clear()
        root = null
    }

    override fun beginBranch(nodeInfo: SpptDataNodeInfo) {
        nodeInfo.node.rule
    }

    override fun beginEmbedded(nodeInfo: SpptDataNodeInfo) {
        TODO("Not yet implemented")
    }

    override fun endBranch(nodeInfo: SpptDataNodeInfo) {
        TODO("Not yet implemented")
    }

    override fun endEmbedded(nodeInfo: SpptDataNodeInfo) {
        TODO("Not yet implemented")
    }

    override fun endTree() {
        TODO("Not yet implemented")
    }

    override fun error(msg: String, path: () -> List<SpptDataNode>) {
        TODO("Not yet implemented")
    }

    override fun leaf(nodeInfo: SpptDataNodeInfo) {
        TODO("Not yet implemented")
    }

    override fun skip(startPosition: Int, nextInputPosition: Int) {
        TODO("Not yet implemented")
    }
}
