package org.modelix.interpreter.vm.core

import kotlin.test.Test
import kotlin.test.assertEquals

class InterpreterTest {

    @Test
    fun addition() {
        val a = MemoryKey<Int>(MemoryType.LOCAL, "a")
        val b = MemoryKey<Int>(MemoryType.LOCAL, "b")
        val c = MemoryKey<Int>(MemoryType.GLOBAL, "c")

        val entryPoint = ProgramBuilder().buildFunction("main") {
            addInstruction(LoadConstantInstruction(10, a))
            addInstruction(LoadConstantInstruction(20, b))
            addInstruction(AddIntegersInstruction(a, b, c))
        }.getEntryPoint()

        val finalState = InterpreterVM(entryPoint).run()
        val computationResult = finalState.readMemory(c)

        assertEquals(10 + 20, computationResult)
    }

    @Test
    fun additionOnProgramParameters() {
        val a = ParameterKey<Int>(0)
        val b = ParameterKey<Int>(1)
        val c = MemoryKey<Int>(MemoryType.GLOBAL, "c")

        val entryPoint = ProgramBuilder().buildFunction("main") {
            addInstruction(AddIntegersInstruction(a, b, c))
        }.getEntryPoint()

        val vm = InterpreterVM(entryPoint)
        vm.writeMemory(a, 10)
        vm.writeMemory(b, 20)
        val finalState = vm.run()
        val computationResult = finalState.readMemory(c)

        assertEquals(10 + 20, computationResult)
    }

    @Test
    fun functionCall() {
        val entryPoint = ProgramBuilder().run {
            val plusFunction = buildFunction("plus") {
                val r = NamedLocalVarKey<Int>("result")
                addInstruction(AddIntegersInstruction(ParameterKey<Int>(0), ParameterKey<Int>(1), r))
                addInstruction(ReturnInstruction(listOf(r)))
            }
            val mulFunction = buildFunction("mul") {
                val r = NamedLocalVarKey<Int>("result")
                addInstruction(MultiplyIntegersInstruction(ParameterKey<Int>(0), ParameterKey<Int>(1), r))
                addInstruction(ReturnInstruction(listOf(r)))
            }
            buildFunction("main") {
                val a by variable<Int>()
                val b by variable<Int>()
                val c by variable<Int>()
                val product by variable<Int>()
                val sum by variable<Int>()

                load(7, a)
                load(13, b)
                load(31, c)
                addInstruction(CallInstruction(plusFunction.getEntryPoint(), listOf(a, b), listOf(sum)))
                addInstruction(CallInstruction(mulFunction.getEntryPoint(), listOf(sum, c), listOf(product)))
                addInstruction(MoveInstruction<Int>(product, NamedGlobalVarKey<Int>("finalResult")))
            }.getEntryPoint()
        }

        val vm = InterpreterVM(entryPoint)
        val finalState = vm.run()
        val computationResult = finalState.readMemory(NamedGlobalVarKey<Int>("finalResult"))

        assertEquals((7 + 13) * 31, computationResult)
    }
}
