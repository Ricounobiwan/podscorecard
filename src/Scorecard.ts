import { PerformanceCriterion } from './PerformanceCriterion'

export class Scorecard {
  month: string
  metrics: PerformanceCriterion[]

  constructor(month: string) {
    this.month = month
    this.metrics = []
  }

  newPerformanceCriterionDefined(
    id: number,
    name: string,
    description: string,
    value: number
  ): PerformanceCriterion {
    let criterion = new PerformanceCriterion(id, name, description, value)
    this.metrics.push(criterion)
    return criterion
  }
}
