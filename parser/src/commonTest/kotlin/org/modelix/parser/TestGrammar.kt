package org.modelix.parser

import org.modelix.model.api.IConcept
import org.modelix.model.api.SimpleConcept

object TestGrammar {
    val expression = SimpleConcept("Expression")
    val plusExpression = SimpleConcept("PlusExpression", directSuperConcepts = listOf(expression))
    val mulExpression = SimpleConcept("MulExpression", directSuperConcepts = listOf(expression))
    val parensExpression = SimpleConcept("ParensExpression", directSuperConcepts = listOf(expression))
    val listLiteral = SimpleConcept("ListLiteral", directSuperConcepts = listOf(expression))
    val stringLiteral = SimpleConcept("StringLiteral", directSuperConcepts = listOf(expression))
    val integerLiteral = SimpleConcept("IntegerLiteral", directSuperConcepts = listOf(expression))
    val ternaryExpression = SimpleConcept("TernaryExpression", directSuperConcepts = listOf(expression))

    val statement = SimpleConcept("Statement")
    val localVariableDeclaration = SimpleConcept("LocalVariableDeclaration")
    val localVariableDeclarationStatement = SimpleConcept("LocalVariableDeclarationStatement", directSuperConcepts = listOf(statement))

    val type = SimpleConcept("Type")
    val integerType = SimpleConcept("IntegerType", directSuperConcepts = listOf(type))

    val rules = ArrayList<ProductionRule>()

    init {
        addRule(integerLiteral, PropertySymbol(Regex("[0-9]+")))
        addRule(plusExpression, NodeSymbol(expression), ConstantSymbol("+"), NodeSymbol(expression))
        addRule(mulExpression, NodeSymbol(expression), ConstantSymbol("*"), NodeSymbol(expression))
        addRule(parensExpression, ConstantSymbol("("), NodeSymbol(expression), ConstantSymbol(")"))
        addRule(listLiteral, ConstantSymbol("list"), ConstantSymbol("["), ListSymbol(NodeSymbol(expression), ConstantSymbol(",")), ConstantSymbol("]"))
        addRule(stringLiteral, ConstantSymbol("\""), PropertySymbol(Regex("""[^"]*""")), ConstantSymbol("\""))
        addRule(ternaryExpression, NodeSymbol(expression), ConstantSymbol("?"), NodeSymbol(expression), ConstantSymbol(":"), NodeSymbol(expression))

        addRule(localVariableDeclarationStatement, NodeSymbol(localVariableDeclaration), ConstantSymbol(";"))
        addRule(
            localVariableDeclaration,
            NodeSymbol(type),
            PropertySymbol(Regex("[_a-zA-Z][_a-zA-Z0-9]*")),
            OptionalSymbol(
                ConstantSymbol("="),
                NodeSymbol(expression)
            )
        )

        addRule(integerType, ConstantSymbol("int"))
    }

    fun getGrammar() = Grammar(rules)

    fun getParser(startConcept: IConcept, disambiguator: IDisambiguator = ChooseFirstDisambiguator()): LRParser {
        val closureTable = LRClosureTable(TestGrammar.getGrammar(), startConcept)
        closureTable.load()
        val parsingTable = LRTable()
        parsingTable.load(closureTable)
        return LRParser(parsingTable, disambiguator)
    }

    fun addRule(concept: IConcept, vararg symbols: ISymbol) {
        rules.add(ProductionRule(NodeSymbol(concept), symbols.toList()))
    }
}
