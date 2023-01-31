export class Team {
  name: string
  scoreboards: Array<Scoreboard>

  static wasFormed(name: string): Team {
    let team = new Team(name)
    return team
  }

  public preparedNewScoreboard(name: string, period): Scoreboard {
    let scoreboard = new Scoreboard(name)
    this.scoreboards.push(scoreboard)
    return scoreboard
  }

  protected constructor(name: string) {
    this.name = name
    this.scoreboards = []
  }
}
