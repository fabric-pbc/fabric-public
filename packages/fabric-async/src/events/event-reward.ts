import {
  BaseSessionEvent,
  EventName,
  RecordOperation,
} from "../base"

import {
  Reward,
} from "../activity"

export interface EventReward extends BaseSessionEvent<
  EventName<"reward", RecordOperation>,
  Reward
> {}
