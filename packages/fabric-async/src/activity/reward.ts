import {
  BaseRecord,
} from "../base"

export interface RewardProduct extends BaseRecord<"product"> {
  productId: string
  inventoryId: string
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
  | RewardProduct
  | RewardPoint

export function isRewardProduct(reward: Reward): reward is RewardProduct {
  return reward.type === 'product'
}

export function isRewardPoint(reward: Reward): reward is RewardPoint {
  return reward.type === 'point'
}
