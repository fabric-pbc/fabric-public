
import {
  EventGamify,
  EventLeaderboard,
} from "./event-gamify"

import {
  EventAttempt,
} from "./event-attempt"

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
  | EventGamify
  | EventAttempt


// type guards

const purchaseEvents: EventPurchase['event'][] = [
  'purchase.payment_completed',
  'purchase.payment_refunded',
]

export function isEventPurchase(ev: ActivityEvent): ev is EventPurchase {
  return purchaseEvents.includes(ev.event as EventPurchase['event'])
}

const rewardEvents: EventReward['event'][] = [
  'reward.provisioned',
  'reward.fulfilled',
]

export function isEventReward(ev: ActivityEvent): ev is EventReward {
  return rewardEvents.includes(ev.event as EventReward['event'])
}

const sessionEvents: EventSession['event'][] = [
  'session.signup',
  'session.signin',
  'session.entered_space',
]

export function isEventSession(ev: ActivityEvent): ev is EventSession {
  return sessionEvents.includes(ev.event as EventSession['event'])
}

const leaderboardEvents: EventLeaderboard['event'][] = [
  'leaderboard.updated',
]

export function isEventLeaderboard(ev: ActivityEvent): ev is EventLeaderboard {
  return leaderboardEvents.includes(ev.event as EventLeaderboard['event'])
}

const attemptEvents: EventAttempt['event'][] = [
  'attempt.completed',
  'attempt.progress',
  'attempt.updated',
]

export function isEventAttempt(ev: ActivityEvent): ev is EventAttempt {
  return attemptEvents.includes(ev.event as EventAttempt['event'])
}
