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

