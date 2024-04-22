import {
  EventName,
  BaseEventNoObj,
} from "../base"

import {
  ContextSession,
} from "../context"

export type SessionOperation = "signup" | "signin" | "entered_space"

export interface EventSession extends BaseEventNoObj<
  EventName<"session", SessionOperation>,
  ContextSession,
  '0.1'
> {
}
