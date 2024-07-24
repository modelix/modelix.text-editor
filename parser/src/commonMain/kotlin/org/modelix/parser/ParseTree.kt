package org.modelix.parser

import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink

sealed class ParseTreeNode(val children: List<ParseTreeNode>)
open class ConceptParseTreeNode(val concept: IConcept, children: List<ParseTreeNode>) : ParseTreeNode(children)
class ChildParseTreeNode(val link: IChildLink, concept: IConcept, children: List<ParseTreeNode>) : ConceptParseTreeNode(concept, children)
class PropertyParseTreeNode(val property: IProperty, val value: String) : ParseTreeNode(emptyList())
class ReferenceParseTreeNode(val link: IReferenceLink, val targetPresentation: String) : ParseTreeNode(emptyList())
class OptionalParseTreeNode(child: ParseTreeNode) : ParseTreeNode(listOf(child))
class ConstantParseTreeNode(val value: String) : ParseTreeNode(emptyList())
