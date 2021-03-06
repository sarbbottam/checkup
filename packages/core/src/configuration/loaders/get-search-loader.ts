import { CheckupConfigLoader } from '../../types/configuration';
import CosmiconfigService from '../cosmiconfig-service';

/**
 * A function to get an instance of a {@link CheckupConfigLoader} that
 * uses {@link cosmiconfig#search} to get a {@link CheckupConfig} object
 *
 * @param {string} basePath - the base path to start the config search in
 * @returns {CheckupConfigLoader} - a loader that searches the given basePath for
 * a config
 */
const getSearchLoader: (basePath: string) => CheckupConfigLoader = (
  basePath: string
) => async () => {
  const maybeConfig = await new CosmiconfigService().search(basePath);

  if (maybeConfig === null) {
    throw new Error(
      `Could not find a checkup configuration starting from the given path: ${basePath}. See https://github.com/checkupjs/checkup/tree/master/packages/cli#configuration for more info on how to setup a configuration.`
    );
  }

  return maybeConfig;
};

export default getSearchLoader;
