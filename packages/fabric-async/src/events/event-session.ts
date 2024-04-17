import {
  EventName,
  BaseEvent,
} from "../base"

import {
  ContextSession,
} from "../context"

export type SessionOperation = "signup" | "signin" | "entered_space"

export interface EventSession extends BaseEvent<
  EventName<"session", SessionOperation>,
  ContextSession,
  object
> {
}
