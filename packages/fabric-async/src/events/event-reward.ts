import {
  BaseEvent,
  EventName,
} from "../base"

import {
  ContextUserActivity,
} from "../context"

import {
  Reward,
} from "../activity"

export type RewardOperation = "provisioned" | "fulfilled"

export interface EventReward extends BaseEvent<
  EventName<"reward", RewardOperation>,
  ContextUserActivity,
  Reward[],
  '0.1'
> {}
