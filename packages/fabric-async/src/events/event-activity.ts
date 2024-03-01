
import {
  EventLeaderboard,
} from "./event-gamify"

import {
  EventPurchase,
} from "./event-purchase"

import {
  EventReward,
} from "./event-reward"

import {
  EventSession,
} from "./event-session"

export type ActivityEvent =
  | EventPurchase
  | EventReward
  | EventSession
  | EventLeaderboard
