/* eslint-disable @typescript-eslint/no-empty-object-type */

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

export interface PurchaseGift extends BasePurchase<"gift"> {}

export type Purchase =
  | PurchaseMoney
  | PurchaseGift
