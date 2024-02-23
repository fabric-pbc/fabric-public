
export interface BaseRecord <T> {
  type: T
  id: string
}

export interface SpaceEvent {
  spaceId: string
  orgId: string
}

export interface BaseDataEvent <ET, OT> extends SpaceEvent {
  event: ET
  object: OT
}

export interface LocationInfo {
  lat: number
  lng: number
}

export interface GeospatialEvent extends SpaceEvent {
  timestamp: number
  location: LocationInfo
}

export interface IdP {
  idpId: string
  userId: string
}

export interface BaseSessionEvent <ET, OT> extends GeospatialEvent {
  event: ET
  object: OT
  idp: IdP
  sessionId: string
}

export type RecordOperation = "created" | "updated" | "deleted"
export type PurchaseOperation = "payment_completed" | "payment_refunded"
export type SessionOperation = "signup" | "signin" | "entered_space"

export type EventName <DT extends string, OT extends string> = `${DT}.${OT}`
