package org.modelix.editor.kernelf

import org.iets3.core.expr.collections.L_org_iets3_core_expr_collections
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor

val Editor_org_iets3_core_expr_collections = languageAspects(L_org_iets3_core_expr_collections) {
    conceptEditor(language.AsSingletonList) {
        "toList".constant()
    }
    conceptEditor(language.BracketOp) {
        concept.expr.cell()
        noSpace()
        squareBrackets {
            concept.index.cell()
        }
    }
    conceptEditor(language.CollectionSizeSpec) {
        angleBrackets {
            concept.min.cell()
            "|".constant()
            concept.max.cell()
        }
    }
    conceptEditor(language.CollectionType) {
        "collection".constant()
        noSpace()
        angleBrackets {
            concept.baseType.cell()
        }
        optional {
            concept.sizeConstraint.cell()
        }
    }
    conceptEditor(language.ElementTypeConstraintMap) {
        noSpace()
        angleBrackets {
            concept.typeConstraint1.cell()
            noSpace()
            ",".constant()
            concept.typeConstraint2.cell()
        }
    }
    conceptEditor(language.ElementTypeConstraintSingle) {
        noSpace()
        angleBrackets {
            concept.typeConstraint.cell()
        }
    }
    conceptEditor(language.IndexExpr) {
        "index".constant()
    }
    conceptEditor(language.KeyValuePair) {
        concept.key.cell()
        noSpace()
        "->".constant()
        noSpace()
        concept.`val`.cell()
    }
    conceptEditor(language.ListInsertOp) {
        "insert".constant()
        noSpace()
        parentheses {
            concept.index.cell()
            noSpace()
            ",".constant()
            concept.arg.cell()
        }
    }
    conceptEditor(language.ListLiteral) {
        "list".constant()
        optional {
            concept.typeConstraint.cell()
        }
        noSpace()
        concept.elements.horizontal()
    }
    conceptEditor(language.ListPickOp) {
        "pick".constant()
        noSpace()
        squareBrackets {
            concept.selectorList.cell()
        }
    }
    conceptEditor(language.ListType) {
        "list".constant()
        noSpace()
        angleBrackets {
            concept.baseType.cell()
        }
        optional {
            concept.sizeConstraint.cell()
        }
    }
    conceptEditor(language.MaxOp) {
        "max".constant()
    }
    conceptEditor(language.MapKeysOp) {
        "keys".constant()
    }
    conceptEditor(language.MapLiteral) {
        "map".constant()
        optional {
            concept.typeConstraint.cell()
        }
        noSpace()
        parentheses {
            concept.elements.horizontal(",")
        }
    }
    conceptEditor(language.MapSizeOp) {
        "size".constant()
    }
    conceptEditor(language.MapType) {
        "map".constant()
        noSpace()
        angleBrackets {
            concept.keyType.cell()
            noSpace()
            ",".constant()
            concept.valueType.cell()

        }
    }
    conceptEditor(language.MapValuesOp) {
        "values".constant()
    }
    conceptEditor(language.MinOp) {
        "min".constant()
    }
    conceptEditor(language.SetLiteral) {
        "set".constant()
        optional {
            concept.typeConstraint.cell()
        }
        noSpace()
        parentheses {
            concept.elements.horizontal(",")
        }
    }
    conceptEditor(language.SetType) {
        "set".constant()
        noSpace()
        angleBrackets {
            concept.baseType.cell()
        }
    }
    conceptEditor(language.SimpleSortOp) {
        "sort".constant()
        noSpace()
        parentheses {
            concept.order.cell()
        }
    }
    conceptEditor(language.UpToTarget) {
        "upto".constant()
        noSpace()
        parentheses {
            concept.max.cell()
        }
    }
}