import { TeamRepository } from '../model'

export function addScoreboardToTeam(
  idTeam: string,
  scoreboardPeriod: string,
  teamRepository: TeamRepository
) {
  let team = teamRepository.getTeamById(idTeam)
  team.preparedNewScoreboard(scoreboardPeriod)
  teamRepository.save(team)
}
