import { BaseRecord } from "../base"

export interface LeaderInfo {
  nameSanitized: string
  rank: number
  metric: number
}

export interface Leaderboard {
  leaders: LeaderInfo[]
}

export interface PointsRange {
  low: number
  high: number
}

export interface StatusLevel extends BaseRecord<"status_level"> {
  order: number
  range: PointsRange
  name: string

  message?: {
    title: string
    description: string
  }
}
