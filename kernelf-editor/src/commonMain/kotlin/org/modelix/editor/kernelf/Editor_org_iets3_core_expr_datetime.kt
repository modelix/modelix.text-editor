package org.modelix.editor.kernelf

import org.iets3.core.expr.datetime.L_org_iets3_core_expr_datetime
import org.iets3.core.expr.simpleTypes.L_org_iets3_core_expr_simpleTypes
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor

val Editor_org_iets3_core_expr_datetime = languageAspects(L_org_iets3_core_expr_datetime) {
    BaseConcept_alias.implement(language.DateDeltaType) { "datedelta" }
    BaseConcept_alias.implement(language.DaysDeltaType) { "days" }
    BaseConcept_alias.implement(language.MonthsDeltaType) { "months" }
    BaseConcept_alias.implement(language.WeeksDeltaType) { "weeks" }
    BaseConcept_alias.implement(language.YearsDeltaType) { "years" }
    BaseConcept_alias.implement(language.TimeDeltaType) { "timedelta" }
    BaseConcept_alias.implement(language.HoursDeltaType) { "hours" }
    BaseConcept_alias.implement(language.MinutesDeltaType) { "minutes" }
    BaseConcept_alias.implement(language.SecondsDeltaType) { "seconds" }

}