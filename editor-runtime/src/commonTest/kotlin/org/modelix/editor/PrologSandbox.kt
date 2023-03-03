package org.modelix.editor

import it.unibo.tuprolog.core.Atom
import it.unibo.tuprolog.core.Constant
import it.unibo.tuprolog.core.Fact
import it.unibo.tuprolog.core.Scope
import it.unibo.tuprolog.core.Substitution
import it.unibo.tuprolog.core.Term
import it.unibo.tuprolog.core.TermVisitor
import it.unibo.tuprolog.core.Var
import it.unibo.tuprolog.core.exception.SubstitutionApplicationException
import it.unibo.tuprolog.dsl.theory.logicProgramming
import it.unibo.tuprolog.solve.ExecutionContext
import it.unibo.tuprolog.solve.Signature
import it.unibo.tuprolog.solve.Solution
import it.unibo.tuprolog.solve.Solver
import it.unibo.tuprolog.solve.classic.ClassicSolverFactory
import it.unibo.tuprolog.solve.primitive.Solve
import it.unibo.tuprolog.unify.CachedUnificator
import it.unibo.tuprolog.unify.Unificator
import kotlin.reflect.KClass
import kotlin.test.Test
import kotlin.time.ExperimentalTime
import kotlin.time.measureTime

@OptIn(ExperimentalTime::class)
class PrologSandbox {

    @Test
    fun test() {
        logicProgramming {
            fun directSupertype(subtype: String, supertype: String): Fact {
                return fact { "directSupertype"(subtype, supertype) }
            }

            val theory = theoryOf(
                directSupertype("arrayList", "list"),
                directSupertype("list", "collection"),
                directSupertype("collection", "iterable"),
                directSupertype("iterable", "object"),
                directSupertype("int", "number"),
                directSupertype("number", "serializable"),
                rule { "supertype"("SubT", "SuperT") impliedBy "directSupertype"("SubT", "SuperT") },
                rule { "supertype"("SubT", "SuperT") impliedBy (
                        "directSupertype"("SubT", "Intermediate") and
                                "supertype"("Intermediate", "SuperT")
                        )},
                rule {
                    "supertype"("annotatedType"("SubBase", "SubElement"), "annotatedType"("SuperBase", "SuperElement")) impliedBy (
                            "supertype"("SubBase", "SuperBase") and
                                    "supertype"("SubElement", "SuperElement")
                            )},
                rule {
                    "supertype"("annotatedType"("SubBase", "SubElement"), "annotatedType"("SuperBase", "SuperElement")) impliedBy (
                            ("SubBase" eq "SuperBase") and
                                    "supertype"("SubElement", "SuperElement")
                            )},
                rule {
                    "supertype"("annotatedType"("SubBase", "SubElement"), "annotatedType"("SuperBase", "SuperElement")) impliedBy (
                            ("SubElement" eq "SuperElement") and
                                    "supertype"("SubBase", "SuperBase")
                            )},
//        rule { "supertype"("annotatedType"("BaseT", "AnnotationT")) impliedBy fail },
            )
            val solver = ClassicSolverFactory.solverWithDefaultBuiltins(
                staticKb = theory
            )

//    val query = "supertype"("arrayList".toAtom(), "SuperType")
//    val query = "supertype"("annotatedType"("arrayList", "int"), "SuperType")
            val query = "supertype"("SubT", "annotatedType"("list", "number"))
            solver.solve(query)
            val time = measureTime {
                solver.solve(query).forEach {
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
            }
            println("time: $time")
        }
    }

}
