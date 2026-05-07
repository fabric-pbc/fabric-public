import {
  Attempt,
} from "../activity"

import {
  BaseEvent,
  EventName,
} from "../base"

import {
  ContextAttempt,
} from "../context"

export type AttemptOperation = "progress" | "completed" | "updated"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface EventAttempt extends BaseEvent<
  EventName<"attempt", AttemptOperation>,
  ContextAttempt,
  Attempt,
  '0.1'
> {}

// type guards

const interactionEvents: EventAttempt['event'][] = [
  'attempt.progress',
  'attempt.completed',
  'attempt.updated',
]

export function isAttemptEvent(ev: {event: string}): ev is EventAttempt {
  return interactionEvents.includes(ev.event as EventAttempt['event'])
}
