import {
  Purchase,
} from "../activity"

import {
  BaseEvent,
  ContextSession,
  EventName,
  PurchaseOperation,
} from "../base"

export interface EventPurchase extends BaseEvent<
  EventName<"purchase", PurchaseOperation>,
  ContextSession,
  Purchase
> {}
