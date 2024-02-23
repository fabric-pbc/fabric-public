import {
  BaseDataEvent,
  EventName,
  RecordOperation,
} from "../base"

import {
  Leaderboard,
} from "../activity"

export interface EventLeaderboard extends BaseDataEvent<
  EventName<"leaderboard", RecordOperation>,
  Leaderboard
> {}
