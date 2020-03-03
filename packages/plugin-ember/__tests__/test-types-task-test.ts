import { EmberProject, stdout } from '@checkup/test-helpers';

import { TestTypesTask } from '../src/tasks';
import { TestTypesTaskResult } from '../src/results';

const TESTS = {
  acceptance: {
    tests: {
      'my-component-test.js': '',
    },
    someFolder: {
      'my-component-test.js': '',
    },
  },
  integration: {
    tests: {
      'my-component-test.js': '',
    },
  },
  unit: {
    tests: {
      'my-component-test.js': '',
    },
  },
};

describe('test-types-task', () => {
  let project: EmberProject;

  beforeEach(function() {
    project = new EmberProject('checkup-app', '0.0.0');
  });

  afterEach(function() {
    project.dispose();
  });

  it('returns all the test types found in the app and outputs to the console', async () => {
    project.files = Object.assign(project.files, {
      'index.js': 'index js file',
      addon: TESTS,
    });

    project.writeSync();

    const result = await new TestTypesTask({ path: project.baseDir }).run();
    const testTypesTaskResult = <TestTypesTaskResult>result;

    testTypesTaskResult.stdout();

    expect(stdout()).toMatchSnapshot();
  });

  it('returns all the test types (including nested) found in the app and outputs to the console', async () => {
    project.files = Object.assign(project.files, {
      'index.js': 'index js file',
      addon: TESTS,
    });

    project.addInRepoAddon('ember-super-button', 'latest');

    // @ts-ignore
    project.files.lib['ember-super-button'].addon = TESTS;
    // @ts-ignore

    project.writeSync();

    const result = await new TestTypesTask({ path: project.baseDir }).run();
    const testTypesTaskResult = <TestTypesTaskResult>result;

    testTypesTaskResult.stdout();

    expect(stdout()).toMatchSnapshot();
  });

  it('returns all the test types found in the app and outputs to JSON', async () => {
    project.files = Object.assign(project.files, {
      'index.js': 'index js file',
      addon: TESTS,
    });

    project.writeSync();

    const result = await new TestTypesTask({ path: project.baseDir }).run();
    const testTypesTaskResult = <TestTypesTaskResult>result;

    expect(testTypesTaskResult.json()).toMatchSnapshot();
  });

  it('returns all the test types (including nested) found in the app and outputs to JSON', async () => {
    project.files = Object.assign(project.files, {
      'index.js': 'index js file',
      addon: TESTS,
    });

    project.addInRepoAddon('ember-super-button', 'latest');

    // @ts-ignore
    project.files.lib['ember-super-button'].addon = TESTS;
    // @ts-ignore

    project.writeSync();

    const result = await new TestTypesTask({ path: project.baseDir }).run();
    const testTypesTaskResult = <TestTypesTaskResult>result;

    expect(testTypesTaskResult.json()).toMatchSnapshot();
  });
});
