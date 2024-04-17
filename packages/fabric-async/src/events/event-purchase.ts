import {
  Purchase,
} from "../activity"

import {
  BaseEvent,
  EventName,
} from "../base"

import {
  ContextSession,
} from "../context"

export type PurchaseOperation = "payment_completed" | "payment_refunded"

export interface EventPurchase extends BaseEvent<
  EventName<"purchase", PurchaseOperation>,
  ContextSession,
  Purchase
> {}
