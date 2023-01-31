import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Scorecard } from './Scorecard'
import { Team } from './Team'

import { PerformanceCriterion, Criterion } from './PerformanceCriterion'

let inMemoryMetrics: Criterion[] = [
  {
    id: 1,
    name: 'toto',
    description: 'toto desc',
    value: 5,
  },
  {
    id: 2,
    name: 'titi',
    description: 'titi desc',
    value: 10,
  },
  {
    id: 3,
    name: 'tata',
    description: 'tata desc',
    value: 10,
  },
]

let team1 = Team.wasFormed('HCP Team')
let team1Scorecard = team1.preparedNewScorecard('2023-01')
team1Scorecard.newPerformanceCriterionDefined(
  inMemoryMetrics[0].id,
  inMemoryMetrics[0].name,
  inMemoryMetrics[0].description,
  inMemoryMetrics[0].value
)

let team2 = Team.wasFormed('One View')
let team2Scorecard = team2.preparedNewScorecard('2023-01')
team2Scorecard.newPerformanceCriterionDefined(
  inMemoryMetrics[0].id,
  inMemoryMetrics[0].name,
  inMemoryMetrics[0].description,
  inMemoryMetrics[0].value
)

let teams: Team[] = [team1, team2]

console.log('teams', teams)
console.log('team1Scorecard', team1Scorecard)

function App() {
  return (
    <div className="App">
      {teams.map((item) => {
        return (
          <div key={item.name}>
            <h1>{item.name}</h1>
            <h2>{item.scorecards[0].month}</h2>
            {/* <h2>{team1.month}</h2> */}
            <a
              href="https://www.google.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.scorecards[0].metrics[0].id}-
              {item.scorecards[0].metrics[0].name}-
              {item.scorecards[0].metrics[0].description}-
              {item.scorecards[0].metrics[0].value}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default App
