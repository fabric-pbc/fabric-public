import {
  EventName,
  BaseEventNoObj,
} from "../base"

import {
  ContextSession,
} from "../context"

export type SessionOperation = "signup" | "signin" | "entered_space"

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface EventSession extends BaseEventNoObj<
  EventName<"session", SessionOperation>,
  ContextSession,
  '0.1'
> {
}
