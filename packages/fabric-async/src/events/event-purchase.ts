import {
  Purchase,
} from "../activity"

import {
  BaseSessionEvent,
  EventName,
  PurchaseOperation,
} from "../base"

export interface EventPurchase extends BaseSessionEvent<
  EventName<"purchase", PurchaseOperation>,
  Purchase
> {}
