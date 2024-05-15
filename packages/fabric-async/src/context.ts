
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

export interface BaseContextSessionAction extends ContextSessionJourney {
  actionLogId: string
  action: string
}

export interface ContextSessionFab extends BaseContextSessionAction {
  fabId: string
}

export interface ContextSessionScan extends BaseContextSessionAction {
  scanId: string
}

export interface ContextSessionAssessment extends ContextSessionFab {
  attemptId: string
  contentId: string
}

export type ContextSpaceActivity =
  | ContextSpace
  | ContextSession
  | ContextSessionFab
  | ContextSessionScan
  | ContextSessionAssessment


// type guards

export function isContextSession(ctx: ContextSpaceActivity): ctx is ContextSession {
  return !!(ctx as ContextSession).sessionId
}

export function isContextSessionScan(ctx: ContextSpaceActivity): ctx is ContextSessionScan {
  return !!(ctx as ContextSessionScan).scanId
}

export function isContextSessionFab(ctx: ContextSpaceActivity): ctx is ContextSessionFab {
  return !!(ctx as ContextSessionFab).fabId
}

export function isContextSessionAssessment(ctx: ContextSpaceActivity): ctx is ContextSessionAssessment {
  return !!(ctx as ContextSessionAssessment).contentId
}
