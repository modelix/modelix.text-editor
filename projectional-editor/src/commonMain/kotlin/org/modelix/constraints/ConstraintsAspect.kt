package org.modelix.constraints

import org.modelix.editor.INonExistingNode

object ConstraintsAspect {
    val checkers: MutableSet<IConstraintsChecker> = HashSet()

    fun check(node: INonExistingNode) = checkers.flatMap { it.check(node) }

    fun canCreate(node: INonExistingNode) = check(node).isEmpty()
}

interface IConstraintsChecker {
    fun check(node: INonExistingNode): List<IConstraintViolation>
}

interface IConstraintViolation
