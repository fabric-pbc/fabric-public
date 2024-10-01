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

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PurchaseMoney extends BasePurchase<"money"> {}

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface PurchasePoints extends BasePurchase<"points"> {}

export type Purchase =
  | PurchaseMoney
  | PurchasePoints
