import {
  BaseEvent,
  EventName,
  RecordOperation,
} from "../base"

import {
  Leaderboard,
} from "../activity"

import {
  ContextSpace,
} from "../context"

export interface EventLeaderboard extends BaseEvent<
  EventName<"leaderboard", RecordOperation>,
  ContextSpace,
  Leaderboard
> {}
