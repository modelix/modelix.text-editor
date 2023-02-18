package org.modelix.aspects.behavior

import org.modelix.metamodel.IConceptOfTypedNode
import org.modelix.metamodel.ITypedConcept
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.untypedConcept
import kotlin.reflect.KProperty


fun polymorphicFunction() = PolymorphicFunctionBuilder()
class PolymorphicFunctionBuilder {
    fun <ConceptT : ITypedConcept> forConcept(): ForConcept<ConceptT> {
        return ForConcept()
    }
    fun <NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> forNode(concept: ConceptT): ForNode<NodeT, ConceptT> {
        return ForNode()
    }

    inner class ForConcept<ConceptT : ITypedConcept> {
        fun <ReturnT> returns(): WithReturnType<ReturnT> = WithReturnType()

        inner class WithReturnType<ReturnT> {
            private var name = ""
            private val instance by lazy { PolymorphicFunction(name) }
            operator fun getValue(
                nothing: Nothing?,
                property: KProperty<*>
            ): PolymorphicFunction {
                this.name = property.name
                return instance
            }

            inner class PolymorphicFunction(name: String) {
                private var polymorphicValue: PolymorphicValue<(ConceptT) -> ReturnT> = PolymorphicValue(name)
                operator fun invoke(concept: ConceptT): ReturnT {
                    return polymorphicValue.getValue(concept.untyped())(concept)
                }

                fun <SubConceptT : ConceptT> implement(concept: SubConceptT, body: (SubConceptT) -> ReturnT) {
                    polymorphicValue.addImplementation(concept.untyped()) { concept -> body(concept as SubConceptT) }
                }
            }
        }
    }

    inner class ForNode<NodeT : ITypedNode, ConceptT : IConceptOfTypedNode<NodeT>> {
        fun <ReturnT> returns(): WithReturnType<ReturnT> = WithReturnType()

        inner class WithReturnType<ReturnT> {
            private var name = ""
            private val instance by lazy { PolymorphicFunction(name) }
            operator fun getValue(
                nothing: Nothing?,
                property: KProperty<*>
            ): PolymorphicFunction {
                this.name = property.name
                return instance
            }

            inner class PolymorphicFunction(name: String) {
                private var polymorphicValue: PolymorphicValue<(NodeT) -> ReturnT> = PolymorphicValue(name)
                operator fun invoke(node: NodeT): ReturnT {
                    return polymorphicValue.getValue(node.untypedConcept())(node)
                }

                fun <SubNodeT : NodeT, SubConceptT : IConceptOfTypedNode<SubNodeT>> implement(concept: SubConceptT, body: (SubNodeT) -> ReturnT) {
                    polymorphicValue.addImplementation(concept.untyped()) { node -> body(node as SubNodeT) }
                }
            }
        }
    }
}