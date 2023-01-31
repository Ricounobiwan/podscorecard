import { express } from 'express'
import { addScoreboardToTeam } from './model'
import { TeamRepository } from './model'

let app = express()

class InMemoryTeamRepository implements TeamRepository {
  teams: Array<Team>

  constructor() {
    this.teams = []
  }

  getTeamById(id: string) {
    return this.teams[0]
  }

  save(team: Team) {
    this.teams.push(team)
  }
}

app.post('/team/add-scoreboard', (res, req) => {
  let teamId = req.body.id
  let period = req.body.period

  let teamRepository: TeamRepository = new InMemoryTeamRepository()

  addScoreboardToTeam(teamId, period, teamRepository)
  res.json(team)
})
