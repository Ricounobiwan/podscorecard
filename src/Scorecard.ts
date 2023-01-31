import { PerformanceCriterion } from "./PerformanceCriterion";

export class Scorecard {
  month: string;
  metrics: PerformanceCriterion[];

  constructor(month: string) {
    this.month = month;
    this.metrics = [];
  }

  newPerformanceCriterionDefined(
    id: number,
    name: string,
    description: string,
    value: number,
    weight: number
  ): PerformanceCriterion {
    let criterion = new PerformanceCriterion(
      id,
      name,
      description,
      value,
      weight
    );
    this.metrics.push(criterion);
    return criterion;
  }

  computePerformanceScore() {
    let score = this.metrics
      .map((criterion) => criterion.value * criterion.weight)
      .reduce((totalScore, newValue) => totalScore + newValue);
    let totalWeight = this.metrics
      .map((criterion) => criterion.weight)
      .reduce((totWeight, newWeight) => totWeight + newWeight);
    return score / totalWeight;
  }
}
