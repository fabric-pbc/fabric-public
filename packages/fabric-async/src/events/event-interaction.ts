import {
  Assessment,
  Choice,
  Outcome,
} from "../activity"

import {
  AssessmentOperation,
  BaseEvent,
  ChoiceOperation,
  ContextSessionAssessment,
  ContextSessionFab,
  EventName,
  OutcomeOperation,
} from "../base"

export interface EventInteractionOutcome extends BaseEvent<
  EventName<Outcome['type'], OutcomeOperation>,
  ContextSessionFab,
  Outcome
> {}

export interface EventInteractionChoice extends BaseEvent<
  EventName<Choice['type'], ChoiceOperation>,
  ContextSessionFab,
  Choice
> {}

export interface EventInteractionAssessment extends BaseEvent<
  EventName<Assessment['type'], AssessmentOperation>,
  ContextSessionAssessment,
  Assessment
> {}

export type EventInteraction =
  | EventInteractionOutcome
  | EventInteractionChoice
  | EventInteractionAssessment
