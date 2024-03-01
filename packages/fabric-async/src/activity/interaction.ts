import { BaseRecord } from "../base"

export interface BaseFabByProduct<T> extends BaseRecord<T> {
  fabId: string
}

export interface Outcome extends BaseFabByProduct<"outcome"> {
  assignedId: string
  revealed: boolean
  claimed: boolean
}

export interface Choice extends BaseFabByProduct<"choice"> {
  questionId: string
  selectedOptionId: string
}
