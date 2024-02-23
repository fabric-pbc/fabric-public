import {
  GeospatialEvent,
  EventName,
  SessionOperation,
  IdP,
} from "../base"

export interface EventSession extends GeospatialEvent {
  event: EventName<"session", SessionOperation>
  idp: IdP
  sessionId: string
}
