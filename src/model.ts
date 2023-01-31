export interface TeamRepository {
  getTeamById(id: string): number
  save(team: Team)
}

export class Scoreboard {
  id: string
  period: string
  criterions: Array<PerformanceCriterion>

  constructor(name: string, period: string) {
    this.name = name
    this.period = period
  }
}

export class PerformanceCriterion {
  id: string
}
