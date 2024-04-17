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


// type guards

const outcomeEvents: EventInteractionOutcome['event'][] = [
  'outcome.assigned',
  'outcome.claimed',
  'outcome.revealed',
]

export function isEventInteractionOutcome(ev: EventInteraction): ev is EventInteractionOutcome {
  return outcomeEvents.includes(ev.event as EventInteractionOutcome['event'])
}

const choiceEvents: EventInteractionChoice['event'][] = [
  'choice.saved',
]

export function isEventInteractionChoice(ev: EventInteraction): ev is EventInteractionChoice {
  return choiceEvents.includes(ev.event as EventInteractionChoice['event'])
}

const assessmentEvents: EventInteractionAssessment['event'][] = [
  'assessment.progress',
  'assessment.completed',
]

export function isEventInteractionAssessment(ev: EventInteraction): ev is EventInteractionAssessment {
  return assessmentEvents.includes(ev.event as EventInteractionAssessment['event'])
}

