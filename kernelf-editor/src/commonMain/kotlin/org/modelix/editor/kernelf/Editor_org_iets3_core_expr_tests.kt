package org.modelix.editor.kernelf

import org.iets3.core.expr.tests.L_org_iets3_core_expr_tests
import org.modelix.editor.languageEditors

val Editor__org_iets3_core_expr_tests = languageEditors(L_org_iets3_core_expr_tests) {
    conceptEditor(language.AllExpressionsFilter) {
        "expressions everywhere".constant()
    }
    conceptEditor(language.AllNodesFilter) {
        "nodes everywhere".constant()
    }
    conceptEditor(language.AndMatcher) {
        concept.left.cell()
        "and".constant() {
            iets3keyword()
        }
        concept.right.cell()
    }
    conceptEditor(language.AssertOptionTestItem) {
        "assert-opt".constant {
            iets3keyword()
        }
        concept.actual.cell()
        "is".constant {
            iets3keyword()
        }
        concept.what.cell()
        //TODO editor component actualAndError
    }
    conceptEditor(language.AssertTestItem) {
        optional {
            concept.optionalName.cell()
            "=".constant()
        }
        "assert".constant {
            iets3keyword()
        }
        concept.actual.cell()
        concept.strict.flagCell()
        concept.op.cell()
        concept.expected.cell()
        withNode {
            if (node.isIgnored == "true") {
                "[ignored]".constant {
                    textColor("red")
                    backgroundColor("orange")
                }
            }
        }
    }
    conceptEditor(language.AssertThatTestItem) {
        optional {
            concept.optionalName.cell()
            "=".constant()
        }
        "assert-that".constant {
            iets3keyword()
        }
        concept.value.cell()
        "is".constant {
            iets3keyword()
        }
        concept.matcher.cell()
        //TODO editor component actualAndError
    }
    conceptEditor(language.ConstraintFailedTestItem) {
        "confail".constant {
            iets3keyword()
        }
        concept.actual.cell()
        optional {
            "with error".constant()
            concept.errmsg.cell()
        }
    }
    conceptEditor(language.ContainsString) {
        "a string containing".constant()
        concept.text.cell()
    }
    conceptEditor(language.EmptyProducer) {
        "empty".constant()
    }
    conceptEditor(language.EmptyTestItem) {
        "".constant()
    }
    conceptEditor(language.EqualsTestOp) {
        "equals".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.EvalAnythingExpr) {
        "evalanything".constant()
        squareBrackets {
            concept.anything.cell()
        }
    }
    conceptEditor(language.ForceCastExpr) {
        "forceCast".constant {
            iets3keyword()
        }
        noSpace()
        angleBrackets {
            concept.targetType.cell()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
    conceptEditor(language.FunctionSubjectAdapter) {
        "function".constant()
        concept.`fun`.cell({ name })
        newLine()
        "results:".constant()
        concept.checkResults.cell()
        ifNotEmpty(concept.mutator) {
            "mutator:".constant()
            concept.mutator.cell()
        }

    }
    conceptEditor(language.IgnoredConcept) {
        "concept".constant()
        noSpace()
        brackets(true, "/", "/") {
            concept.concept.cell({ name })
        }
    }
    conceptEditor(language.InputValue) {
        concept.value.cell()
    }
    conceptEditor(language.InterpreterCoverageAssResult) {
        concept.concept.cell({ name })
        concept.comment.cell()
    }
    conceptEditor(language.InterpreterCoverageAssSummary) {
        "coverage".constant()
        concept.coverageRatio.cell()
    }
    conceptEditor(language.InterpreterValueStat) {
        concept.label.cell()
        "=".constant()
        concept.value.cell()
    }
    conceptEditor(language.InterpreterValueSummary) {
        "value ranges".constant()
        newLine()
        indented {
            concept.valueStats.vertical()
        }
    }
    conceptEditor(language.InvalidInputOutcome) {
        "invalid input".constant()
        //TODO text color
    }
    conceptEditor(language.InvalidValueTestItem) {
        "inval".constant {
            concept.actual.cell()
            optional {
                "with error".constant() {
                    iets3keyword()
                }
                concept.errmsg.cell()
            }
        }
    }
    conceptEditor(language.IsInvalid) {
        "invalid".constant {
            iets3keyword()
        }
        optional {
            "with message".constant {
                iets3keyword()
            }
            concept.messageMatcher.cell()
        }
    }
    conceptEditor(language.IsValidRecord) {
        "a valid record".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.LanguageRef) {
        "language".constant()
        brackets(true, "/", ",") {
            concept.lang.cell()
        }
    }
    conceptEditor(language.MatcherForAnyRecordType) {
        "matcher-for-any-record-type".constant()
    }
    conceptEditor(language.MatcherForAnyType) {
        "macher-for-any-type".constant()
    }
    conceptEditor(language.MatcherType) {
        "matcher".constant()
        noSpace()
        angleBrackets {
            concept.forType.cell()
        }
    }
    conceptEditor(language.MeasureCoverageFor) {
        "concept".constant()
        brackets(true, "/", "/") {
            concept.concept.cell({ name })
        }
        "complete?".constant()
        //TODO checkbox
    }
//    conceptEditor(language.ModelsCoverageAssResult) {
//        //TODO
//    }
    conceptEditor(language.ModelsCoverageAssSummary) {
        "coverage".constant()
        concept.coverageRatio.cell()
    }
    conceptEditor(language.MutationEngine) {
        indented {
            "# of mutations".constant()
            concept.numberOfMutations.cell()
            newLine()
            "keep all:".constant()
            concept.keepAll.cell()
            newLine()
            ifNotEmpty(concept.logs) {
                concept.logs.vertical()
            }
        }
    }
    conceptEditor(language.MutationLog) {
        "->".constant()
        concept.newNode.cell({ concept.untyped().getShortName() })
    }
    conceptEditor(language.MuteEffect) {
        "mute".constant()
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
//    conceptEditor(language.OldNodeAnnotation) {
//        //TODO
//    }
    conceptEditor(language.NamedAssertRef) {
        concept.item.cell({ name })
    }
    conceptEditor(language.NoneExpr) {
        "none".constant()
        noSpace()
        angleBrackets {
            concept.expr.cell()
        }
    }
    conceptEditor(language.OptExpression) {
        "some".constant()
        noSpace()
        angleBrackets {
            concept.expr.cell()
        }
    }
    conceptEditor(language.OutputValue) {
        concept.value.cell()
    }
    conceptEditor(language.RealEqualsTestOp) {
        "real-equals".constant {
            iets3keyword()
        }
        noSpace()
        squareBrackets {
            concept.decimals.cell()
        }
    }
    conceptEditor(language.ReportTestItem) {
        "report".constant {
            iets3keyword()
        }
        concept.actual.cell()
        "=>".constant()
        //TODO model access
    }
//    conceptEditor(language.StackTraceElement) {
//        //TODO
//    }
    conceptEditor(language.StructuralCoverageAssQuery) {
        foldable("structural coverage {...}") {
            "structural coverage".constant()
            "in".constant()
            concept.scope.cell()
            newLine()
            indented {
                "limits:".constant()
                newLine()
                indented {
                    "min N    =".constant()
                    concept.minTestCount.cell()
                    newLine()
                    "min V    =".constant()
                    concept.minTestVolume.cell()
                    newLine()
                    "max MinH =".constant()
                    concept.maximalMinHetero.cell()
                    newLine()
                    "min MaxH =".constant()
                    concept.minimumMaxHetero.cell()
                }
                newLine()
                "show limit errors:".constant()
                //TODO checkbox
                newLine()
                "look outside suites:".constant()
                //TODO checkbox
                newLine()
                "track properties:".constant()
                //TODO checkbox
                newLine()
                "nodes filter:".constant()
                concept.nodesFilter.cell()
                newLine()
                "languages:".constant()
                concept.languages.vertical()
                newLine()
                "ignore".constant()
                concept.ignoredConcepts.vertical()
            }
        }
    }
    conceptEditor(language.StructuralCoverageAssResult) {
        concept.concept.cell({ name })
        concept.comment.cell()
    }
    conceptEditor(language.StructuralCoverageAssSummary) {
        "coverage".constant()
        concept.coverageRatio.cell()
    }
    conceptEditor(language.TestCase) {
        "test case".constant {
            iets3keyword()
        }
        concept.name.cell()
        foldable("{...}") {
            // TODO test status
            optional {
                "setup".constant()
                concept.setup.cell()
            }
            ifEmpty(concept.setup) {
                newLine()
            }
            curlyBrackets {
                concept.items.vertical()
            }
        }
    }
    conceptEditor(language.TestCoverageAssQuery) {
        foldable("test coverage {...}") {
            "test coverage".constant()
            "in".constant()
            concept.scope.cell()
            newLine()
            indented {
                "effective models:".constant()
                //TODO custom cell
                newLine()
                "problems only:".constant()
                //TODO checkbox
                newLine()
                "measure for:".constant()
                //TODO calculate number of concepts
                foldable("{X concepts}") {
                    concept.measureFor.vertical()
                }
                newLine()
                "ignore:".constant()
                foldable("{X ignored concepts") {
                    concept.ignoredConcepts.vertical()
                }
            }
        }
    }
//    conceptEditor(language.TestItemVectorCollection) {
//        //TODO
//    }
    conceptEditor(language.TestSuite) {
        "test suite".constant()
        concept.name.cell()
        emptyLine()
        "-----------------------------------".constant()
        emptyLine()
        concept.contents.vertical()
    }
    conceptEditor(language.ValidOutcome) {
        "valid".constant()
        //TODO text color
    }
    conceptEditor(language.VectorTestItem) {
        "vectors".constant {
            iets3keyword()
        }
        concept.subject.cell()
        "->".constant()
        concept.vectors.cell()
    }
}