
export interface LeaderInfo {
  nameSanitized: string
  rank: number
  metric: number
}

export interface Leaderboard {
  leaders: LeaderInfo[]
}
