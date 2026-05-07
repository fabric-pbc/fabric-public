import { BaseRecord } from "../base"
import { Purchase } from "./purchase"
import { RewardPoint, RewardProduct } from "./reward"

export interface Outcome extends BaseRecord<"outcome"> {
  assignedId: string
  revealed: boolean
  claimed: boolean
}

export interface Choice extends BaseRecord<"choice"> {
  questionId: string
  selectedOptionId: string
}

export interface Assessment {
  type: "assessment"
  previousBestCorrect?: number
  correct: number
  questions: number
}

export interface ScoreTotalDescription {
  dimensionId: string
  amount: number
}

export interface AttemptSideEffects {
  receipt?: Purchase
  walletItems?: RewardProduct[]
  pointsCredits?: RewardPoint[]
  scores?: ScoreTotalDescription[]
}

// Attempt captures the rewards/side effects from an attempt
export interface Attempt extends BaseRecord<"user_attempt"> {
  completed?: boolean
  sideEffects?: AttemptSideEffects
}
