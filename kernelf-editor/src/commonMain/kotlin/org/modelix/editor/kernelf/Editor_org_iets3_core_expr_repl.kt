package org.modelix.editor.kernelf

import org.iets3.core.expr.repl.L_org_iets3_core_expr_repl
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor

val Editor_org_iets3_core_expr_repl = languageAspects(L_org_iets3_core_expr_repl) {
    val borderCellStyles = mapOf(
        language.BottomBorderCellStyle to "bottom border",
        language.LeftBorderCellStyle to "left border",
        language.RightBorderCellStyle to "right border",
        language.TopBorderCellStyle to "top border"
    )
    conceptEditor(language.BorderCellStyle) {
        val alias = borderCellStyles[concept]
            ?: "Unknown BorderCellStyle: ${concept.untyped().getLongName()}"
        alias.constant()
        concept.width.cell()
    }
//    conceptEditor(language.Cell) {
//        //TODO
//    }
    conceptEditor(language.CellArg) {
        concept.name.cell()
        noSpace()
        optional {
            concept.type.cell()
        }
    }
    conceptEditor(language.CellArgRef) {
        concept.arg.cell({ name })
    }
    conceptEditor(language.CellConstraint) {
        "type:".constant()
        concept.type.cell()
        newLine()
        "where".constant()
        concept.constraint.cell()
    }
    conceptEditor(language.CellConstraintIt) {
        "it".constant()
    }
    conceptEditor(language.CellLabel) {
        concept.name.cell()
        noSpace()
        ":".constant()
    }
    conceptEditor(language.CoordCellRef) {
        "$".constant()
        noSpace()
        optional {
            concept.finder.cell()
            noSpace()
            "/".constant()
        }
        concept.cell.cell()
        //TODO argList if needActuals
    }
//    conceptEditor(language.DefaultEntry) {
//        //TODO
//    }
    val fontStyles = mapOf(
        language.FontBoldStyle to "font-bold"
    )
    conceptEditor(language.FontStyle) {
        val alias = fontStyles[concept] ?: "Unknown font style: ${concept.untyped().getLongName()}"
        alias.constant()
    }
    conceptEditor(language.LabelExpression) {
        "'".constant()
        noSpace()
        concept.text.cell()
    }
    conceptEditor(language.MakeListExpr) {
        "makeList".constant()
        noSpace()
        squareBrackets {
            concept.from.cell()
            noSpace()
            "..".constant()
            noSpace()
            concept.to.cell()
        }
    }
    conceptEditor(language.MakeRecordExpr) {
        "makeRecord".constant()
        noSpace()
        angleBrackets {
            concept.record.cell()
        }
        noSpace()
        squareBrackets {
            concept.from.cell()
            noSpace()
            "..".constant()
            noSpace()
            concept.to.cell()
        }
    }
    conceptEditor(language.NamedCellRef) {
        concept.label.cell({ name })
        //TODO argList if needActuals
    }
    conceptEditor(language.NamedSheetFinder) {
        concept.sheet.cell({ name })
    }
    conceptEditor(language.QuoteExpr) {
        "quote".constant()
        noSpace()
        parentheses {
            concept.cell.cell()
        }
    }
//    conceptEditor(language.REPL) {
//        //TODO
//    }
//    conceptEditor(language.ReplEntryRef) {
//        //TODO
//    }
    conceptEditor(language.ReplEntryRefByName) {
        concept.entry.cell({ optionalName }) {
            textColor("blue")
        }
    }
//    conceptEditor(language.Sheet) {
//        //TODO
//    }
    conceptEditor(language.SheetEmbedExpr) {
        ifEmpty(concept.sheet) {
            "new sheet from".constant {
                iets3keyword()
            }
            concept.template.cell({ name })
            "will be".constant {
                iets3keyword()
            }
            concept.cols.cell()
            "cols and".constant {
                iets3keyword()
            }
            concept.rows.cell()
            "rows".constant {
                iets3keyword()
            }
        }
        ifNotEmpty(concept.sheet) {
            concept.sheet.cell()
        }
    }
    conceptEditor(language.SheetTestItem) {
        ifEmpty(concept.sheet) {
            "new sheet will be".constant()
            concept.cols.cell()
            "cols and".constant {
                iets3keyword()
            }
            concept.rows.cell()
            "rows".constant {
                iets3keyword()
            }
        }
        ifNotEmpty(concept.sheet) {
            concept.sheet.cell()
        }
    }
    conceptEditor(language.SheetType) {
        "sheet".constant()
        noSpace()
        angleBrackets {
            concept.template.cell({ name })
        }
    }
//    conceptEditor(language.TopLevelSheet) {
//        //TODO
//    }
    conceptEditor(language.UpwardsSheetFinder) {
        "..".constant()
    }
}
