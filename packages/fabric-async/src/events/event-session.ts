import {
  EventName,
  SessionOperation,
  BaseEvent,
  ContextSession,
} from "../base"

export interface EventSession extends BaseEvent<
  EventName<"session", SessionOperation>,
  ContextSession,
  object
> {
}
