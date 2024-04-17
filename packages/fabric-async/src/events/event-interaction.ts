import {
  Assessment,
  Choice,
  Outcome,
} from "../activity"

import {
  BaseEvent,
  EventName,
} from "../base"

import {
  ContextSessionAssessment,
  ContextSessionFab,
} from "../context"

export type OutcomeOperation = "assigned" | "revealed" | "claimed"
export type ChoiceOperation = "saved"
export type AssessmentOperation = "progress" | "completed"

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
