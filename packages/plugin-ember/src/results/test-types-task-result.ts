import { BaseTaskResult, TaskItemData, TaskResult, ui, CardData } from '@checkup/core';

export default class TestTypesTaskResult extends BaseTaskResult implements TaskResult {
  testTypes!: TaskItemData[];

  findByType(typeName: string): TaskItemData | undefined {
    return this.testTypes.find(type => type.type === typeName);
  }

  stdout() {
    ui.styledHeader(this.meta.friendlyTaskName);
    ui.blankLine();
    ui.table(this._deriveTestPercentage(this.testTypes), { type: {}, total: {}, percentage: {} });
    ui.blankLine();
  }

  json() {
    return { meta: this.meta, result: { types: this.testTypes } };
  }

  pdf() {
    return new CardData(this.meta, 20, 50, 25, 'tests left to migrate');
  }

  _deriveTestPercentage(testTypes: TaskItemData[]) {
    const totalTests: number = testTypes.reduce(
      (accum, currentValue) => accum + currentValue.total,
      0
    );
    return testTypes.map(testType => {
      testType.percentage = this._formatAsPercetange(testType.total / totalTests);
      return testType;
    });
  }

  _formatAsPercetange(value: number) {
    return `${(value * 100).toFixed()}%`;
  }
}
