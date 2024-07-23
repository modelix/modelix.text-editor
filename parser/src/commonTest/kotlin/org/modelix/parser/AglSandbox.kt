package org.modelix.parser

import net.akehurst.language.agl.grammar.grammar.asm.GrammarBuilderDefault
import net.akehurst.language.agl.grammar.grammar.asm.NamespaceDefault
import net.akehurst.language.agl.grammar.grammar.asm.PreferenceOptionDefault
import net.akehurst.language.agl.grammar.grammar.asm.PreferenceRuleDefault
import net.akehurst.language.agl.processor.Agl
import net.akehurst.language.api.grammar.PreferenceOption
import kotlin.test.Test

class AglSandbox {

    @Test
    fun grammarAsString() {
        val grammarStr = """
            namespace test
            grammar Test {
                skip WS="\s+" ;
                S=Expression ;
                leaf DECIMAL_NUMERAL = "(0|[1-9]([0-9_]*[0-9])?)" ;
                Expression 
                    = PlusExpression
                    | DECIMAL_NUMERAL
                    | MulExpression
                    | DivExpression
                    | MinusExpression
                    ;
                PlusExpression = Expression '+' Expression ;
                MulExpression = Expression '*' Expression ;
                DivExpression = Expression '/' Expression ;
                MinusExpression = Expression '-' Expression ;
                
                preference Expression {
                    PlusExpression on '+' left
                    MinusExpression on '-' left
                    MulExpression on '*' left
                }
            }
        """
        val processor = Agl.processorFromStringDefault(grammarStr)
        val result = processor.processor?.parse("10 + 20 * 30 - 40")
        println(result?.sppt?.toStringAll)
    }

    @Test
    fun grammarBuilder() {
        val gb = GrammarBuilderDefault(NamespaceDefault("org.modelix"), "test")
        gb.skip("WHITESPACE", true).concatenation(gb.terminalPattern("""\s+"""))
        gb.leaf("DECIMAL_NUMERAL").concatenation(gb.terminalPattern("(0|[1-9]([0-9_]*[0-9])?)"))
        gb.rule("PlusExpression").concatenation(gb.nonTerminal("Expression"), gb.terminalLiteral("+"), gb.nonTerminal("Expression"))
        gb.rule("MinusExpression").concatenation(gb.nonTerminal("Expression"), gb.terminalLiteral("-"), gb.nonTerminal("Expression"))
        gb.rule("MulExpression").concatenation(gb.nonTerminal("Expression"), gb.terminalLiteral("*"), gb.nonTerminal("Expression"))
        gb.rule("DivExpression").concatenation(gb.nonTerminal("Expression"), gb.terminalLiteral("/"), gb.nonTerminal("Expression"))
        gb.rule("ParenExpression").concatenation(gb.terminalLiteral("("), gb.nonTerminal("Expression"), gb.terminalLiteral(")"))
        gb.rule("Expression").choiceLongestFromConcatenation(
            gb.concatenation(gb.nonTerminal("ParenExpression")),
            gb.concatenation(gb.nonTerminal("MulExpression")),
            gb.concatenation(gb.nonTerminal("DivExpression")),
            gb.concatenation(gb.nonTerminal("PlusExpression")),
            gb.concatenation(gb.nonTerminal("MinusExpression")),
            gb.concatenation(gb.nonTerminal("DECIMAL_NUMERAL"))
        )
        gb.grammar.preferenceRule.add(PreferenceRuleDefault(
            gb.grammar,
            gb.nonTerminal("Expression"),
            listOf<PreferenceOption>(
                PreferenceOptionDefault(gb.nonTerminal("PlusExpression"), 0, listOf(gb.terminalLiteral("+")), PreferenceOption.Associativity.LEFT),
                PreferenceOptionDefault(gb.nonTerminal("MinusExpression"), 0, listOf(gb.terminalLiteral("-")), PreferenceOption.Associativity.LEFT),
                PreferenceOptionDefault(gb.nonTerminal("MulExpression"), 0, listOf(gb.terminalLiteral("*")), PreferenceOption.Associativity.LEFT),
                PreferenceOptionDefault(gb.nonTerminal("DivExpression"), 0, listOf(gb.terminalLiteral("/")), PreferenceOption.Associativity.LEFT),
            )
        ))
        println(gb.grammar)

        val config = Agl.configuration(Agl.configurationDefault()) {
            this.defaultGoalRuleName("Expression")
        }
        val processor = Agl.processorFromGrammar(gb.grammar, config)
        val result = processor.parse("10 + 20 * 30 - 40")
        println(result.issues)
        println(result.sppt?.toStringAll)
    }

}
