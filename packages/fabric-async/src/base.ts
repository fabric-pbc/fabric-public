
export interface BaseRecord <T> {
  type: T
  id: string
}

export interface BaseEventNoObj <ET, CT, VT> {
  eventId: string
  version: VT
  event: ET
  context: CT
}

export interface BaseEvent <ET, CT, OT, VT> extends BaseEventNoObj<ET, CT, VT> {
  object: OT
}

export type RecordOperation = "created" | "updated" | "deleted"

export type EventName <DT extends string, OT extends string> = `${DT}.${OT}`
