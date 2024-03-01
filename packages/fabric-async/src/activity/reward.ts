import {
  BaseRecord,
} from "../base"

export interface RewardBadge extends BaseRecord<"badge"> {
  bucketId: string
  badgeId: string
}

export interface PointStatus {
  balance: number
  experience: number
}

export interface RewardPoint extends BaseRecord<"point"> {
  bucketId: string
  value: number
  current: PointStatus
}

export type Reward =
  | RewardBadge
  | RewardPoint

