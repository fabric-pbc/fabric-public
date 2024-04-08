import {
  Choice,
  Outcome,
} from "../activity"

import {
  BaseEvent,
  ChoiceOperation,
  ContextSessionFab,
  EventName,
  OutcomeOperation,
} from "../base"

export interface EventInteractionOutcome extends BaseEvent<
  EventName<"outcome", OutcomeOperation>,
  ContextSessionFab,
  Outcome
> {}

export interface EventInteractionChoice extends BaseEvent<
  EventName<"choice", ChoiceOperation>,
  ContextSessionFab,
  Choice
> {}

export type EventInteraction =
  | EventInteractionOutcome
  | EventInteractionChoice
