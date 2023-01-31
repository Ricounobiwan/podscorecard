import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Scorecard } from "./Scorecard";
import { Team } from "./Team";

import { PerformanceCriterion, Criterion } from "./PerformanceCriterion";

let inMemoryMetrics: Criterion[] = [
  {
    id: 1,
    name: "toto",
    description: "toto desc",
    value: 5,
    weight: 2,
  },
  {
    id: 2,
    name: "titi",
    description: "titi desc",
    value: 10,
    weight: 1,
  },
  {
    id: 3,
    name: "tata",
    description: "tata desc",
    value: 10,
    weight: 3,
  },
];

let team1 = Team.wasFormed("HCP Team");
let team1Scorecard = team1.preparedNewScorecard("2023-01");
team1Scorecard.newPerformanceCriterionDefined(
  inMemoryMetrics[0].id,
  inMemoryMetrics[0].name,
  inMemoryMetrics[0].description,
  inMemoryMetrics[0].value,
  inMemoryMetrics[0].weight
);
team1Scorecard.newPerformanceCriterionDefined(
  inMemoryMetrics[2].id,
  inMemoryMetrics[2].name,
  inMemoryMetrics[2].description,
  inMemoryMetrics[2].value,
  inMemoryMetrics[2].weight
);
let team1TotalScore = team1Scorecard.computePerformanceScore();
console.log(team1TotalScore);

let team2 = Team.wasFormed("One View");
let team2Scorecard = team2.preparedNewScorecard("2023-01");
team2Scorecard.newPerformanceCriterionDefined(
  inMemoryMetrics[0].id,
  inMemoryMetrics[0].name,
  inMemoryMetrics[0].description,
  inMemoryMetrics[0].value,
  inMemoryMetrics[0].weight
);

let teams: Team[] = [team1, team2];

console.log("teams", teams);
console.log("team1Scorecard", team1Scorecard);

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
        );
      })}
    </div>
  );
}

export default App;
