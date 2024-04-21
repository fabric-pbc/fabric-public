
export interface IdP {
  idpId: string
  userId: string
}

export interface LocationInfo {
  lat: number
  lng: number
}

export interface SpaceEvent {
  secondsSinceEpoch: number
  spaceId: string
  orgId: string
}

export interface GeospatialEvent extends SpaceEvent {
  location: LocationInfo
}

export type ContextSpace = SpaceEvent

export interface ContextSession extends GeospatialEvent {
  sessionId: string
  userId: string
  idp?: IdP
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

export type ContextSpaceActivity =
  | ContextSpace
  | ContextSession
  | ContextSessionFab
  | ContextSessionAssessment


// type guards

export function isContextSession(ctx: ContextSpaceActivity): ctx is ContextSession {
  return !!(ctx as ContextSession).sessionId
}

export function isContextSessionFab(ctx: ContextSpaceActivity): ctx is ContextSessionFab {
  return !!(ctx as ContextSessionFab).fabId
}

export function isContextSessionAssessment(ctx: ContextSpaceActivity): ctx is ContextSessionAssessment {
  return !!(ctx as ContextSessionAssessment).contentId
}
