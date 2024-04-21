
export interface BaseRecord <T> {
  type: T
  id: string
}

export interface BaseEvent <ET, CT, OT, VT> {
  version: VT
  event: ET
  context: CT
  object: OT
}

export type RecordOperation = "created" | "updated" | "deleted"

export type EventName <DT extends string, OT extends string> = `${DT}.${OT}`
