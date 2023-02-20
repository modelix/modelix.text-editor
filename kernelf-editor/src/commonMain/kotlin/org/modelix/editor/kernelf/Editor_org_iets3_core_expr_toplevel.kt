package org.modelix.editor.kernelf

import org.iets3.core.expr.toplevel.L_org_iets3_core_expr_toplevel
import org.iets3.core.expr.toplevel.N_EnumDeclaration
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor
import org.modelix.metamodel.typed
import org.modelix.metamodel.untyped

val Editor_org_iets3_core_expr_toplevel = languageAspects(L_org_iets3_core_expr_toplevel) {
    conceptEditor(language.AbstractFunctionAdapter) {
        concept.`fun`.cell()
    }
    conceptEditor(language.AbstractFunctionLikeAdapter) {
        concept.functionLike.cell()
    }
    conceptEditor(language.AbstractToplevelExprAdapter) {
        concept.toplevelExprContent.cell()
    }
    conceptEditor(language.AllLitList) {
        "literals".constant()
        noSpace()
        squareBrackets {
            concept.enumType.cell()
        }
    }
//    conceptEditor(language.BuilderExpression) {
//        //TODO
//    }
    conceptEditor(language.Constant) {
        "val".constant {
            iets3keyword()
        }
        concept.name.cell()
        optional {
            ":".constant()
            concept.type.cell()
        }
        "=".constant()
        concept.value.cell()
    }
    conceptEditor(language.ConstantRef) {
        concept.constant.cell({ name })
    }
    conceptEditor(language.EmptyMember) {
        "".constant()
    }
    conceptEditor(language.EmptyToplevelContent) {
        constant("")
    }
//    conceptEditor(language.EnumDeclaration) {
//        //TODO
//    }
    conceptEditor(language.EnumIndexOp) {
        "index".constant()
    }
    conceptEditor(language.EnumIsInSelector) {
        concept.literal.cell({ name })
    }
    conceptEditor(language.EnumIsInTarget) {
        "isIn".constant()
        noSpace()
        parentheses {
            concept.selectors.horizontal(",")
        }
    }
    conceptEditor(language.EnumIsTarget) {
        "is".constant()
        noSpace()
        parentheses {
            concept.literal.cell({ name })
        }
    }
    conceptEditor(language.EnumLiteral) {
        concept.name.cell()
        withNode {
            if (node.untyped().parent!!.typed<N_EnumDeclaration>().type.isSet()) {
                "->".constant()
                concept.value.cell()
            }
        }
    }
    conceptEditor(language.EnumLiteralRef) {
        concept.literal.cell({
            val enumDecl = untyped().parent!!.typed<N_EnumDeclaration>()
            if (enumDecl.qualified) {
                enumDecl.name + ":" + name
            } else {
                name
            }
        })
    }
    conceptEditor(language.EnumType) {
        concept.enum.cell({ name })
    }
    conceptEditor(language.EnumValueAccessor) {
        "value".constant()
    }
    conceptEditor(language.ExtensionFunctionCall) {
        concept.extFun.cell({ name })
        //TODO effect descriptor
        noSpace()
        parentheses {
            concept.args.horizontal(",")
        }
    }
    conceptEditor(language.FieldSetter) {
        concept.field.cell({ name })
        concept.value.cell()
    }
    conceptEditor(language.Function) {
        concept.ext.flagCell("ext") {
            iets3keyword()
        }
        "fun".constant {
            iets3keyword()
        }
        concept.name.cell()
        optional {
            concept.effect.cell()
        }
        noSpace()
        parentheses {
            concept.args.horizontal(",")
        }
        optional {
            ":".constant()
            concept.type.cell()
        }
        optional {
            concept.contract.cell()
        }
        indented {
            concept.body.cell()
        }
        //TODO ? = for single line body
    }
    conceptEditor(language.FunctionCall) {
        concept.function.cell({ name })
        //TODO effect descriptor
        noSpace()
        parentheses {
            concept.args.horizontal()
        }
    }
    conceptEditor(language.FunRef) {
        ":".constant()
        noSpace()
        concept.`fun`.cell({ name })
    }
    conceptEditor(language.GroupKeyTarget) {
        "key".constant()
    }
    conceptEditor(language.GroupMembersTarget) {
        "members".constant()
    }
    conceptEditor(language.GroupType) {
        "group".constant()
        noSpace()
        angleBrackets {
            concept.keyType.cell()
            noSpace()
            ",".constant()
            concept.memberType.cell()
        }
    }
    conceptEditor(language.InlineRecordMemberAccess) {
        concept.name.cell()
    }
    conceptEditor(language.InlineRecordType) {
        "record".constant {
            iets3keyword()
        }
        noSpace()
        curlyBrackets {
            concept.members.horizontal(",")
        }
    }
    conceptEditor(language.Library) {
        //TODO custom cells
        "library".constant {
            iets3keyword()
        }
        concept.name.cell()
        indented {
            "imports:".constant()
            concept.imports.vertical()
        }
        emptyLine()
        concept.contents.vertical()
    }
    conceptEditor(language.NewValueSetter) {
        concept.member.cell({ name })
        optional {
            "=".constant()
            concept.newValue.cell()
        }
    }
    conceptEditor(language.OldMemberRef) {
        concept.member.cell({ name })
    }
    conceptEditor(language.OldValueExpr) {
        "old".constant()
    }
    conceptEditor(language.ProjectIt) {
        "it".constant()
    }
    conceptEditor(language.ProjectMember) {
        concept.name.cell()
        "=".constant()
        concept.expr.cell()
    }
    conceptEditor(language.ProjectOp) {
        "project".constant()
        noSpace()
        parentheses {
            concept.members.horizontal(",")
        }
    }
    conceptEditor(language.QualifierRef) {
        concept.enum.cell({ name })
        noSpace()
        ":".constant()
        noSpace()
        concept.lit.cell({ name })
    }
    conceptEditor(language.RecordChangeTarget) {
        "with".constant()
        noSpace()
        parentheses {
            concept.setters.horizontal(",")
        }
    }
    conceptEditor(language.RecordDeclaration) {
        optional {
            concept.refFlag.cell()
        }
        "record".constant {
            iets3keyword()
        }
        concept.name.cell()
        curlyBrackets {
            newLine()
            indented {
                concept.members.vertical()
            }
            newLine()
        }
        optional {
            concept.contract.cell()
        }
    }
    conceptEditor(language.RecordLiteral) {
        "#".constant()
        concept.type.cell()
        curlyBrackets {
            newLine()
            concept.memberValues.horizontal(",")
        }
    }
    conceptEditor(language.RecordMember) {
        concept.name.cell()
        ":".constant()
        concept.type.cell()
        optional {
            concept.contract.cell()
        }
    }
    conceptEditor(language.RecordMemberRefInConstraint) {
        concept.member.cell({ name })
    }
    conceptEditor(language.RecordType) {
        concept.record.cell({ name })
    }
    conceptEditor(language.RecordTypeAdapter) {
        concept.type.cell()
    }
    conceptEditor(language.ReferenceableFlag) {
        "referenceable".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.SectionMarker) {
        concept.label.cell()
        newLine()
        "-----------------------------------".constant()
    }
    conceptEditor(language.Typedef) {
        "type".constant {
            iets3keyword()
        }
        concept.name.cell()
        noSpace()
        ":".constant()
        concept.originalType.cell()
        optional {
            concept.contract.cell()
        }
    }
    conceptEditor(language.TypedefContractValExpr) {
        "it".constant()
    }
    conceptEditor(language.TypedefType) {
        concept.typedef.cell({ name })
    }

}