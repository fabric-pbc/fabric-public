import {
  BaseEvent,
  EventName,
} from "../base"

import {
  Leaderboard,
} from "../activity"

import {
  ContextSpace,
} from "../context"

export type LeaderboardOperation = "updated"

export interface EventLeaderboard extends BaseEvent<
  EventName<"leaderboard", LeaderboardOperation>,
  ContextSpace,
  Leaderboard,
  '0.1'
> {}
