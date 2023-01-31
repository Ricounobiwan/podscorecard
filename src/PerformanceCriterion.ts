export interface Criterion {
  id: number
  name: string
  description: string
  value: number
}

export interface CriterionExtended {
  getCriterionName(): string
}

export class PerformanceCriterion implements Criterion, CriterionExtended {
  id: number
  name: string
  description: string
  value: number

  constructor(
    c_id: number,
    c_name: string,
    c_description: string,
    c_value: number
  ) {
    this.id = c_id
    this.name = c_name
    this.description = c_description
    this.value = c_value
  }

  getCriterionName(): string {
    return this.name
  }
}
