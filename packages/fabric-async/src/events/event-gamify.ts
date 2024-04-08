import {
  BaseEvent,
  ContextSpace,
  EventName,
  RecordOperation,
} from "../base"

import {
  Leaderboard,
} from "../activity"

export interface EventLeaderboard extends BaseEvent<
  EventName<"leaderboard", RecordOperation>,
  ContextSpace,
  Leaderboard
> {}
