
export interface BaseRecord <T> {
  type: T
  id: string
}

export interface SpaceEvent {
  timestamp: number
  spaceId: string
  orgId: string
}

export interface BaseEvent <ET, CT, OT> {
  event: ET
  context: CT
  object: OT
}

export interface LocationInfo {
  lat: number
  lng: number
}

export interface GeospatialEvent extends SpaceEvent {
  location: LocationInfo
}

export interface IdP {
  idpId: string
  userId: string
}

export type ChoiceOperation = "saved"
export type OutcomeOperation = "assigned" | "revealed" | "claimed"
export type RecordOperation = "created" | "updated" | "deleted"
export type RewardOperation = "provisioned" | "fulfilled"
export type PurchaseOperation = "payment_completed" | "payment_refunded"
export type SessionOperation = "signup" | "signin" | "entered_space"

export type EventName <DT extends string, OT extends string> = `${DT}.${OT}`

export type ContextSpace = SpaceEvent

export interface ContextSession extends GeospatialEvent {
  sessionId: string
  idp: IdP
}

export interface ContextSessionJourney extends ContextSession {
  journeyId: string
}

export interface ContextSessionFab extends ContextSessionJourney {
  fabId: string
  actionLogId: string
  action: string
}

export type ContextUserActivity =
  | ContextSession
  | ContextSessionFab
