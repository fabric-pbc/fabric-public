
export interface IdP {
  idpId: string
  userId: string
}

export interface LocationInfo {
  lat: number
  lng: number
}

export interface SpaceEvent {
  timestamp: number
  spaceId: string
  orgId: string
}

export interface GeospatialEvent extends SpaceEvent {
  location: LocationInfo
}

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

export interface ContextSessionAssessment extends ContextSessionFab {
  attemptId: string
  contentId: string
}

export type ContextUserActivity =
  | ContextSession
  | ContextSessionFab
  | ContextSessionAssessment
