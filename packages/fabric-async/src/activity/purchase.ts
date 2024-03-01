import {
  BaseRecord,
} from "../base"

export interface PurchaseLineItem {
  productId: string
  quantity: number
}

export interface BasePurchase <T> extends BaseRecord<T> {
  items: PurchaseLineItem[]
}

export interface PurchaseMoney extends BasePurchase<"money"> {}
export interface PurchasePoints extends BasePurchase<"points"> {}

export type Purchase =
  | PurchaseMoney
  | PurchasePoints
