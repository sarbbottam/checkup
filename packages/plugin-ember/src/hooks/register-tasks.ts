import { DependenciesTask, EmberProjectTask, TypesTask, TestTypesTask } from '../tasks';

import { Hook } from '@oclif/config';

// TODO: Determine correct type for options
const hook: Hook<'register-tasks'> = async function({ cliArguments, tasks }: any) {
  tasks.registerTask(new EmberProjectTask(cliArguments));
  tasks.registerTask(new DependenciesTask(cliArguments));
  tasks.registerTask(new TypesTask(cliArguments));
  tasks.registerTask(new TestTypesTask(cliArguments));
};

export default hook;
