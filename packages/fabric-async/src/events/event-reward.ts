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

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface EventReward extends BaseEvent<
  EventName<"reward", RewardOperation>,
  ContextSpaceActivity,
  Reward[],
  '0.1'
> {}
