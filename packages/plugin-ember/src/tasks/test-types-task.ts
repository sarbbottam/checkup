import { Task, Category, FileSearcherTask, Priority, TaskResult } from '@checkup/core';

import { TestTypesTaskResult } from '../results';

// NOTE: this task gets number of test files, not tests. This will be iterated on and changed in the future TODO: @ckessler
const SEARCH_PATTERNS = {
  unit: ['**/unit/**/*-test.js'],
  integration: ['**/integration/**/*-test.js'],
  acceptance: ['**/acceptance/**/*-test.js'],
};

export default class TestTypesTask extends FileSearcherTask implements Task {
  meta = {
    taskName: 'test-types',
    friendlyTaskName: 'Test Types',
    taskClassification: {
      category: Category.Core,
      priority: Priority.Medium,
    },
  };

  constructor(cliArguments: any) {
    super(cliArguments, SEARCH_PATTERNS);
  }

  async run(): Promise<TaskResult> {
    let result = new TestTypesTaskResult(this.meta);
    result.testTypes = await this.searcher.search();

    return result;
  }
}
