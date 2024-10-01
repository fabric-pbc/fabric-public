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
  low: number | string
  high: number | string
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
