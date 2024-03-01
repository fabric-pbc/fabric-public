import {
  Choice,
  Outcome,
} from "../activity"

import {
  BaseEvent,
  ChoiceOperation,
  ContextSessionJourney,
  EventName,
  OutcomeOperation,
} from "../base"

export interface EventInteractionOutcome extends BaseEvent<
  EventName<"outcome", OutcomeOperation>,
  ContextSessionJourney,
  Outcome
> {}

export interface EventInteractionChoice extends BaseEvent<
  EventName<"choice", ChoiceOperation>,
  ContextSessionJourney,
  Choice
> {}

export type EventInteraction =
  | EventInteractionOutcome
  | EventInteractionChoice
