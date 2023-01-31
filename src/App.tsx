import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Scorecard } from './Scorecard'
import { Team } from './Team'

import { PerformanceCriterion, Criterion } from './PerformanceCriterion'

let team1 = Team.wasFormed('HCP Team')
team1.preparedNewScorecard('2023-01')

let team2 = Team.wasFormed('One View')
team2.preparedNewScorecard('2023-01')

console.log(team1, team2)

let teams: Team[] = [team1, team2]

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

let scorecard1: Scorecard = new Scorecard('HCP team', '2023-01')
console.log('Scorecard', scorecard1)

function App() {
  return (
    <div className="App">
      <h1>{scorecard1.name}</h1>
      <h2>{scorecard1.month}</h2>
      {inMemoryMetrics.map((criterion) => {
        return (
          <div key={criterion.id}>
            <a
              href="https://www.google.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {criterion.id} - {criterion.name}
            </a>{' '}
            - {criterion.description}
          </div>
        )
      })}
    </div>
  )
}

export default App
