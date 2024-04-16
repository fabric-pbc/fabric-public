import { BaseRecord } from "../base"

export interface Outcome extends BaseRecord<"outcome"> {
  assignedId: string
  revealed: boolean
  claimed: boolean
}

export interface Choice extends BaseRecord<"choice"> {
  questionId: string
  selectedOptionId: string
}

export interface Assessment extends BaseRecord<"assessment"> {
  previousBestCorrect?: number
  correctCount: number
}
