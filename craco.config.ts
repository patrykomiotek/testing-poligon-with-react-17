const aliases = require('./aliases');

// const alias = require("./aliases");

// const resolvedJestAliases = Object.fromEntries(
//   Object.entries(alias).map(([key, value]) => [
//     `^${key}/(.*)$`,
//     `${value}/$1`,
//   ])
// );

module.exports = {
  webpack: {
    alias: aliases,
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: { // this can be done by webpack plugin
        '^axios$': require.resolve('axios'),
        "@components(.*)$": "<rootDir>/src/components$1",
        "@hooks(.*)$": "<rootDir>/src/hooks$1",
        "@features(.*)$": "<rootDir>/src/features$1",
        "@model(.*)$": "<rootDir>/src/model$1",
        "@pages(.*)$": "<rootDir>/src/pages$1",
        "@services(.*)$": "<rootDir>/src/services$1",
        "@stories(.*)$": "<rootDir>/src/stories$1",
        "@apptypes(.*)$": "<rootDir>/src/types$1",
        "@utils(.*)$": "<rootDir>/src/utils$1",
        "@atoms(.*)$": "<rootDir>/src/ui/atoms$1",
        "@molecules(.*)$": "<rootDir>/src/ui/molecules$1",
        "@organisms(.*)$": "<rootDir>/src/ui/organisms$1",
      }
    }
  }
};

export {};
