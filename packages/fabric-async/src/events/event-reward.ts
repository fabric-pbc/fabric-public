import {
  BaseEvent,
  ContextSession,
  EventName,
  RewardOperation,
} from "../base"

import {
  Reward,
} from "../activity"

export interface EventReward extends BaseEvent<
  EventName<"reward", RewardOperation>,
  ContextSession,
  Reward
> {}
