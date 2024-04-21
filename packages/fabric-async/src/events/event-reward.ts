import {
  BaseEvent,
  EventName,
} from "../base"

import {
  ContextSpaceActivity,
} from "../context"

import {
  Reward,
} from "../activity"

export type RewardOperation = "provisioned" | "fulfilled"

export interface EventReward extends BaseEvent<
  EventName<"reward", RewardOperation>,
  ContextSpaceActivity,
  Reward[],
  '0.1'
> {}
