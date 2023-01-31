import { Scorecard } from './Scorecard'

export class Team {
  name: string
  scorecards: Scorecard[]

  constructor(teamName: string) {
    this.name = teamName
    this.scorecards = []
  }

  static wasFormed(name: string): Team {
    let team = new Team(name)
    return team
  }

  public preparedNewScorecard(month: string): Scorecard {
    let scorecard = new Scorecard(month)
    this.scorecards.push(scorecard)
    return scorecard
  }
}
