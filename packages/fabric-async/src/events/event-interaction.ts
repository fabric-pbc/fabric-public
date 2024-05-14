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

export type OutcomeOperation = "assigned" | "updated"
export type ChoiceOperation = "saved"
export type AssessmentOperation = "progress" | "completed"

export interface EventInteractionOutcome extends BaseEvent<
  EventName<Outcome['type'], OutcomeOperation>,
  ContextSessionFab,
  Outcome,
  '0.1'
> {}

export interface EventInteractionChoice extends BaseEvent<
  EventName<Choice['type'], ChoiceOperation>,
  ContextSessionFab,
  Choice,
  '0.1'
> {}

export interface EventInteractionAssessment extends BaseEvent<
  EventName<Assessment['type'], AssessmentOperation>,
  ContextSessionAssessment,
  Assessment,
  '0.1'
> {}

export type EventInteraction =
  | EventInteractionOutcome
  | EventInteractionChoice
  | EventInteractionAssessment


// type guards

const outcomeEvents: EventInteractionOutcome['event'][] = [
  'outcome.assigned',
  'outcome.updated',
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

