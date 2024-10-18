package org.modelix.interpreter.vm.core

class CallInstruction(val entryPoint: Instruction, val parameterSourceKey: List<MemoryKey<*>>, val resultTargetKeys: List<MemoryKey<*>>) : Instruction() {

    override fun execute(state: VMState): VMState {
        val newFrame = StackFrame(returnTo = next, resultTargetKeys = resultTargetKeys)
        var newState = state.copy(callStack = state.callStack.pushFrame(newFrame), nextInstruction = entryPoint)
        parameterSourceKey.forEachIndexed { index, key ->
            newState = newState.writeMemory(ParameterKey(index), state.readMemory(key))
        }
        return newState
    }
}

class ReturnInstruction(val returnValues: List<MemoryKey<*>>) : Instruction() {
    override fun execute(state: VMState): VMState {
        val (newCallStack, currentFrame) = state.callStack.popFrame()
        check(currentFrame.resultTargetKeys.size == returnValues.size) {
            "Caller expected ${currentFrame.resultTargetKeys.size} return values, but function returns ${returnValues.size} values"
        }
        var newState = state.copy(nextInstruction = currentFrame.returnTo, callStack = newCallStack)
        returnValues.forEachIndexed { index, key ->
            newState = newState.writeMemory(currentFrame.resultTargetKeys[index] as MemoryKey<Any?>, state.readMemory(key))
        }
        return newState
    }
}

class LoadConstantInstruction<E>(val value: E, val target: MemoryKey<in E>) : Instruction() {
    override fun execute(state: VMState): VMState {
        return state.writeMemory(target, value)
    }
}

abstract class BinaryOperationInstruction<Arg1, Arg2, Result>(val arg1: MemoryKey<out Arg1>, val arg2: MemoryKey<out Arg2>, val result: MemoryKey<in Result>) : Instruction() {

    abstract fun apply(arg1: Arg1, arg2: Arg2): Result

    override fun execute(state: VMState): VMState {
        return state.writeMemory(result, apply(state.readMemory(arg1), state.readMemory(arg2)))
    }
}

class AddIntegersInstruction(arg1: MemoryKey<out Int>, arg2: MemoryKey<out Int>, result: MemoryKey<in Int>) : BinaryOperationInstruction<Int, Int, Int>(arg1, arg2, result) {
    override fun apply(arg1: Int, arg2: Int): Int {
        return arg1 + arg2
    }
}

class MultiplyIntegersInstruction(arg1: MemoryKey<out Int>, arg2: MemoryKey<out Int>, result: MemoryKey<in Int>) : BinaryOperationInstruction<Int, Int, Int>(arg1, arg2, result) {
    override fun apply(arg1: Int, arg2: Int): Int {
        return arg1 * arg2
    }
}

class JumpInstruction(val target: Instruction) : Instruction() {
    override fun execute(state: VMState): VMState {
        return state.copy(nextInstruction = target)
    }
}

class ConditionalJumpInstruction(val condition: MemoryKey<out Boolean>, val target: Instruction) : Instruction() {
    override fun execute(state: VMState): VMState {
        return if (state.readMemory(condition)) state.copy(nextInstruction = target) else state
    }
}

class MoveInstruction<E>(val source: MemoryKey<out E>, val target: MemoryKey<in E>) : Instruction() {
    override fun execute(state: VMState): VMState {
        return state.writeMemory(target, state.readMemory(source))
    }
}

class NoOpInstruction : Instruction() {
    override fun execute(state: VMState): VMState {
        return state
    }
}

data class NamedGlobalVarKey<E>(val name: String) : MemoryKey<E>(MemoryType.GLOBAL, name)
data class NamedLocalVarKey<E>(val name: String) : MemoryKey<E>(MemoryType.LOCAL, name)
data class ParameterKey<E>(val index: Int) : MemoryKey<E>(MemoryType.LOCAL, "parameter" + index)
data class ReturnValueKey<E>(val index: Int) : MemoryKey<E>(MemoryType.LOCAL, "returnValue" + index)
