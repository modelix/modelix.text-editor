package org.modelix.editor.kernelf

import com.mbeddr.core.base.L_com_mbeddr_core_base
import it.unibo.tuprolog.core.Atom
import it.unibo.tuprolog.core.Constant
import it.unibo.tuprolog.core.Fact
import it.unibo.tuprolog.core.Scope
import it.unibo.tuprolog.core.Struct
import it.unibo.tuprolog.core.Substitution
import it.unibo.tuprolog.core.Term
import it.unibo.tuprolog.core.TermVisitor
import it.unibo.tuprolog.core.Var
import it.unibo.tuprolog.core.exception.SubstitutionApplicationException
import it.unibo.tuprolog.core.toAtom
import it.unibo.tuprolog.dsl.theory.logicProgramming
import it.unibo.tuprolog.solve.ExecutionContext
import it.unibo.tuprolog.solve.Signature
import it.unibo.tuprolog.solve.Solution
import it.unibo.tuprolog.solve.classic.ClassicSolverFactory
import it.unibo.tuprolog.solve.library.Library
import it.unibo.tuprolog.solve.library.Runtime
import it.unibo.tuprolog.solve.primitive.Primitive
import it.unibo.tuprolog.solve.primitive.Solve
import it.unibo.tuprolog.unify.CachedUnificator
import it.unibo.tuprolog.unify.Unificator
import org.iets3.core.expr.base.C_ICollectionType
import org.iets3.core.expr.base.C_ITypeSupportsDefaultValue
import org.iets3.core.expr.base.C_Type
import org.iets3.core.expr.collections.C_ListType
import org.iets3.core.expr.collections.C_SetType
import org.iets3.core.expr.simpleTypes.C_NumberLiteral
import org.iets3.core.expr.simpleTypes.C_NumberType
import org.iets3.core.expr.simpleTypes.C_StringType
import org.iets3.core.expr.simpleTypes.L_org_iets3_core_expr_simpleTypes
import org.iets3.core.expr.simpleTypes._C_UntypedImpl_NumberLiteral
import org.modelix.metamodel.ITypedConcept
import org.modelix.model.api.IConcept
import org.modelix.model.api.getAllConcepts
import org.modelix.model.api.getAllSuperConcepts
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.time.ExperimentalTime
import kotlin.time.measureTime

@OptIn(ExperimentalTime::class)
class PrologSandbox {
    val conceptsAsAtoms = ConceptsAsAtoms()

    val superConceptSignature = Signature("superConcept", 2)
    fun superConcept(request: Solve.Request<ExecutionContext>): Sequence<Solve.Response> {
        val subType = request.arguments[0]
        val superType = request.arguments[1]
        if (subType !is Atom) return emptySequence()
        val subConcept = conceptsAsAtoms.getConcept(subType) ?: return emptySequence()
        if (superType is Var) {
            return subConcept.getAllConcepts().asSequence()
                .map { request.replyWith(Substitution.of(superType, conceptsAsAtoms.toTerm(it))) }
        }
        val superConcept = conceptsAsAtoms.getConcept(superType)
        return if (superConcept != null && subConcept.isSubConceptOf(superConcept)) {
            sequenceOf(request.replySuccess())
        } else {
            sequenceOf(request.replyFail())
        }
    }
    val mostSpecificCommonSuperConceptSignature = Signature("mostSpecificCommonSuperConcept", 3)
    fun mostSpecificCommonSuperConcept(request: Solve.Request<ExecutionContext>): Sequence<Solve.Response> {
        val superType = request.arguments[0]
        val subType1 = request.arguments[1]
        val subType2 = request.arguments[2]
        val subConcept1 = conceptsAsAtoms.getConcept(subType1) ?: return emptySequence()
        val subConcept2 = conceptsAsAtoms.getConcept(subType2) ?: return emptySequence()
        // TODO ensure the operation is commutative
        val common = mostSpecificCommonSuperConcepts(subConcept1, subConcept2)
        return if (superType is Var) {
            common.asSequence().map {
                request.replyWith(Substitution.of(superType, conceptsAsAtoms.toTerm(it)))
            }
        } else {
            val superConcept = conceptsAsAtoms.getConcept(superType)
            return if (superConcept != null && common.contains(superConcept)) {
                sequenceOf(request.replySuccess())
            } else {
                sequenceOf(request.replyFail())
            }
        }
    }
    val mostSpecificCommonSuperConceptsSignature = Signature("mostSpecificCommonSuperConcepts", 3)
    fun mostSpecificCommonSuperConcepts(request: Solve.Request<ExecutionContext>): Sequence<Solve.Response> {
        val superType = request.arguments[0]
        val subType1 = request.arguments[1]
        val subType2 = request.arguments[2]
        val subConcept1 = conceptsAsAtoms.getConcept(subType1) ?: return emptySequence()
        val subConcept2 = conceptsAsAtoms.getConcept(subType2) ?: return emptySequence()
        // TODO ensure the operation is commutative
        val common = mostSpecificCommonSuperConcepts(subConcept1, subConcept2)
        return if (superType is Var) {
            sequenceOf(request.replyWith(Substitution.of(superType, it.unibo.tuprolog.core.List.from(common.map { conceptsAsAtoms.toTerm(it) }))))
        } else {
            val superConcept = conceptsAsAtoms.getConcept(superType)
            return if (superConcept != null && common.contains(superConcept)) {
                sequenceOf(request.replySuccess())
            } else {
                sequenceOf(request.replyFail())
            }
        }
    }

    val cache = HashMap<Pair<IConcept, IConcept>, Set<IConcept>>()
    fun mostSpecificCommonSuperConcepts(concept1: IConcept, concept2: IConcept): Set<IConcept> {
        return cache.getOrPut(Pair(concept1, concept2)) {
            val allCommonTypes = concept1.getAllConcepts().intersect(concept2.getAllConcepts().toSet())
            val lessSpecific = allCommonTypes.asSequence().flatMap { it.getAllSuperConcepts() }.toSet()
            val mostSpecific = allCommonTypes - lessSpecific
            mostSpecific
        }
    }

    @Test
    fun test2() {
        val unificator1 = Unificator.cached(Unificator.default, 10000)
        logicProgramming(unificator1) {

            val theory = theoryOf(
                rule { "supertype"("SubT", "SuperT") impliedBy "superConcept"("SubT", "SuperT") },
                rule {
                    "supertype"("annotatedType"("SubBase", "SubElement"), "annotatedType"("SuperBase", "SuperElement")) impliedBy (
                            "supertype"("SubBase", "SuperBase") and
                                    "supertype"("SubElement", "SuperElement")
                            )},
                rule {
                    "supertype"("annotatedType"("Base", "SubElement"), "annotatedType"("Base", "SuperElement")) impliedBy (
                                "supertype"("SubElement", "SuperElement")
                            )},
                rule {
                    "supertype"("annotatedType"("SubBase", "Element"), "annotatedType"("SuperBase", "Element")) impliedBy (
                                "supertype"("SubBase", "SuperBase")
                            )},
            )


            val solver = ClassicSolverFactory.solverWithDefaultBuiltins(
                otherLibraries = Runtime.of(Library.of("modelix.supertypes", mapOf(
                    superConceptSignature to Primitive(::superConcept),
                    mostSpecificCommonSuperConceptSignature to Primitive(::mostSpecificCommonSuperConcept),
                    mostSpecificCommonSuperConceptsSignature to Primitive(::mostSpecificCommonSuperConcepts),
                ))),
                staticKb = theory,
                unificator = unificator1
            )

//            val query = "supertype"(
//                "annotatedType"(conceptsAsAtoms.toTerm(C_SetType), conceptsAsAtoms.toTerm(C_NumberType)),
//                "CommonSupertype"
//            ) and "supertype"(
//                "annotatedType"(conceptsAsAtoms.toTerm(C_ListType), conceptsAsAtoms.toTerm(C_StringType)),
//                "CommonSupertype"
//            )
            val query = "mostSpecificCommonSuperConcept"(
                "SuperType",
                conceptsAsAtoms.toTerm(C_NumberType),
                conceptsAsAtoms.toTerm(C_ListType),
            )
            val query2 = "mostSpecificCommonSuperConcept"(
                "SuperType",
                conceptsAsAtoms.toTerm(C_ListType),
                conceptsAsAtoms.toTerm(C_NumberType),
            )
            solver.solve(query).toList()
            solver.solve(query2).toList()
            val solutions: List<Solution>
            val time = measureTime {
                solutions = solver.solve(query).toList()
            }
            solutions.forEach {
                when (it) {
                    is Solution.No -> println("no.\n")
                    is Solution.Yes -> {
                        println("yes: ${it.solvedQuery}")
                        for (assignment in it.substitution) {
                            println("\t${assignment.key} / ${assignment.value}")
                        }
                        println()
                    }
                    is Solution.Halt -> {
                        println("halt: ${it.exception.message}")
                        for (err in it.exception.logicStackTrace) {
                            println("\t $err")
                        }
                    }
                }
            }
            assertEquals(
                setOf(C_Type.untyped(), C_ITypeSupportsDefaultValue.untyped()),
                solutions.map { conceptsAsAtoms.getConcept(it.substitution.getByName("SuperType")!!) }.toSet()
            )
            println("time: $time")
            println(unificator1 as CachedUnificator)
        }
    }

}

class ConceptsAsAtoms {
    private val map: MutableMap<String, IConcept> = HashMap()
    fun toTerm(concept: ITypedConcept) = toTerm(concept.untyped())
    fun toTerm(concept: IConcept): Atom {
        val key = getKey(concept)
        map.getOrPut(key) { concept }
        return key.toAtom()
    }
    fun getConcept(term: Term): IConcept? = (term as? Atom)?.let { map[it.value] }
    private fun getKey(concept: IConcept) = "concept/${concept.getLongName()}"
}

fun ITypedConcept.toTerm() = ("concept:" + untyped().getUID()).toAtom()

//data class ConceptTerm(val concept: IConcept) : Constant, Struct {
//    constructor(typed: ITypedConcept) : this(typed.untyped())
//
//    override fun apply(substitution: Substitution): Term = when {
//        substitution.isSuccess -> this
//        else -> throw SubstitutionApplicationException(this, substitution)
//    }
//
//    override val value: Any
//        get() = concept
//
//    override fun freshCopy() = this
//
//    override fun freshCopy(scope: Scope) = this
//
//    override fun <T> accept(visitor: TermVisitor<T>): T {
//        return visitor.visitConstant(this)
//    }
//
//    override fun equals(other: Term, useVarCompleteName: Boolean): Boolean {
//        return other is ConceptTerm && other.concept == concept
//    }
//
//    override fun structurallyEquals(other: Term): Boolean {
//        return other is ConceptTerm && other.concept == concept
//    }
//
//    override fun toString(): String {
//        return "conceptTerm[${concept.getLongName()}]"
//    }
//
//    override val variables: Sequence<Var>
//        get() = emptySequence()
//    override val tags: Map<String, Any>
//        get() = emptyMap()
//
//    override fun replaceTags(tags: Map<String, Any>): Term {
//        TODO("Not yet implemented")
//    }
//
//    // Struct implementations
//
//    override val args: List<Term>
//        get() = emptyList()
//    override val functor: String
//        get() = concept.getUID()
//    override val isFunctorWellFormed: Boolean
//        get() = Struct.isWellFormedFunctor(functor)
//
//    override fun addFirst(argument: Term): Struct {
//        TODO("Not yet implemented")
//    }
//
//    override fun addLast(argument: Term): Struct {
//        TODO("Not yet implemented")
//    }
//
//    override fun insertAt(index: Int, argument: Term): Struct {
//        TODO("Not yet implemented")
//    }
//
//    override fun setArgs(vararg args: Term): Struct {
//        TODO("Not yet implemented")
//    }
//
//    override fun setArgs(args: Iterable<Term>): Struct {
//        TODO("Not yet implemented")
//    }
//
//    override fun setArgs(args: Sequence<Term>): Struct {
//        TODO("Not yet implemented")
//    }
//
//    override fun setFunctor(functor: String): Struct {
//        TODO("Not yet implemented")
//    }
//}