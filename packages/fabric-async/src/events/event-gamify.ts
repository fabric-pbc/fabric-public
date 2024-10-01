import {
  BaseEvent,
  EventName,
} from "../base"

import {
  Leaderboard,
  StatusLevel,
} from "../activity"

import {
  ContextSpace,
  ContextSession,
} from "../context"

export type LeaderboardOperation = "updated"

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface EventLeaderboard extends BaseEvent<
  EventName<"leaderboard", LeaderboardOperation>,
  ContextSpace,
  Leaderboard,
  '0.1'
> {}

export type StatusLevelOperation = "milestone"

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface EventStatusLevel extends BaseEvent<
  EventName<"status_level", StatusLevelOperation>,
  ContextSession,
  StatusLevel,
  '0.1'
> {}

export type EventGamify =
  | EventLeaderboard
  | EventStatusLevel
