## v0.0.10 (2020-04-27)

#### :bug: Bug Fix
* `checkup-plugin-ember-octane`, `core`
  * [#306](https://github.com/checkupjs/checkup/pull/306) Fixing missing dependencies in core ([@scalvert](https://github.com/scalvert))

#### :house: Internal
* `checkup-plugin-ember-octane`, `checkup-plugin-ember`, `cli`, `core`
  * [#314](https://github.com/checkupjs/checkup/pull/314) Standardizing stdout output ([@scalvert](https://github.com/scalvert))

#### Committers: 3
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@carakessler](https://github.com/carakessler)
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.0.9 (2020-04-21)

#### :house: Internal
* `cli`
  * [#296](https://github.com/checkupjs/checkup/pull/296) Updating package references ([@scalvert](https://github.com/scalvert))

#### Committers: 1
- Steve Calvert ([@scalvert](https://github.com/scalvert))


## v0.0.8 (2020-04-21)

#### :boom: Breaking Change
* `checkup-plugin-ember-octane`, `cli`, `plugin-ember-octane`, `plugin-ember`
  * [#278](https://github.com/checkupjs/checkup/pull/278) Renaming plugins to `checkup-*` ([@scalvert](https://github.com/scalvert))

#### :rocket: Enhancement
* `cli`
  * [#283](https://github.com/checkupjs/checkup/pull/283) Updating plugin generator to standardize plugin naming ([@scalvert](https://github.com/scalvert))
* `cli`, `core`
  * [#280](https://github.com/checkupjs/checkup/pull/280) Cleanup of config generator ([@scalvert](https://github.com/scalvert))

#### :bug: Bug Fix
* `cli`
  * [#295](https://github.com/checkupjs/checkup/pull/295) Moving static external libraries out of src ([@carakessler](https://github.com/carakessler))
* `checkup-plugin-ember`, `cli`
  * [#294](https://github.com/checkupjs/checkup/pull/294) Fixing misnamed packages ([@scalvert](https://github.com/scalvert))

#### :memo: Documentation
* `cli`
  * [#268](https://github.com/checkupjs/checkup/pull/268) Cleaning up documentation ([@scalvert](https://github.com/scalvert))

#### :house: Internal
* `checkup-plugin-ember`, `cli`, `core`
  * [#292](https://github.com/checkupjs/checkup/pull/292) Backporting table tasks to return table data ([@carakessler](https://github.com/carakessler))
* `checkup-plugin-ember-octane`, `checkup-plugin-ember`, `cli`, `core`, `test-helpers`
  * [#293](https://github.com/checkupjs/checkup/pull/293) Removing all relics of node 10 ([@carakessler](https://github.com/carakessler))
* `checkup-plugin-ember-octane`, `cli`, `core`, `plugin-ember`
  * [#281](https://github.com/checkupjs/checkup/pull/281) Modifying pdf hook to return array of values ([@carakessler](https://github.com/carakessler))
  * [#277](https://github.com/checkupjs/checkup/pull/277) Splitting out pdf results into sections ([@carakessler](https://github.com/carakessler))
* Other
  * [#282](https://github.com/checkupjs/checkup/pull/282) Removing node 10 from our CI test flow ([@carakessler](https://github.com/carakessler))
* `cli`
  * [#276](https://github.com/checkupjs/checkup/pull/276) Cleaning up types in run command ([@scalvert](https://github.com/scalvert))
  * [#266](https://github.com/checkupjs/checkup/pull/266) Displaying results from meta tasks in the pdf  ([@carakessler](https://github.com/carakessler))
  * [#267](https://github.com/checkupjs/checkup/pull/267) Adding tests for meta-task-list ([@scalvert](https://github.com/scalvert))
* `checkup-plugin-ember-octane`, `cli`, `plugin-ember-octane`, `plugin-ember`
  * [#278](https://github.com/checkupjs/checkup/pull/278) Renaming plugins to `checkup-*` ([@scalvert](https://github.com/scalvert))

#### Committers: 3
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@carakessler](https://github.com/carakessler)
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.0.7 (2020-04-16)

#### :rocket: Enhancement
* [#246](https://github.com/checkupjs/checkup/pull/246) Using volta to pin node && yarn versions ([@carakessler](https://github.com/carakessler))

#### :bug: Bug Fix
* `cli`
  * [#247](https://github.com/checkupjs/checkup/pull/247) Fixing `task` flag ([@scalvert](https://github.com/scalvert))

#### :memo: Documentation
* [#252](https://github.com/checkupjs/checkup/pull/252) Adding badges to top-level readme ([@scalvert](https://github.com/scalvert))

#### :house: Internal
* `cli`, `core`, `plugin-ember-octane`, `plugin-ember`, `test-helpers`
  * [#262](https://github.com/checkupjs/checkup/pull/262) Refactoring build to utilize typescript project references ([@scalvert](https://github.com/scalvert))
* `cli`
  * [#257](https://github.com/checkupjs/checkup/pull/257) Modifying reporter results to use pdf hook ([@carakessler](https://github.com/carakessler))
  * [#222](https://github.com/checkupjs/checkup/pull/222) Implementing numerical-card ([@carakessler](https://github.com/carakessler))
* `cli`, `core`, `plugin-ember-octane`, `plugin-ember`
  * [#221](https://github.com/checkupjs/checkup/pull/221) Removing `undefined` from `ReportResultData`, and adding mock results to all existing tasks ([@carakessler](https://github.com/carakessler))
* `cli`, `core`, `test-helpers`
  * [#256](https://github.com/checkupjs/checkup/pull/256) Updating task ordering to sort by category then priority ([@scalvert](https://github.com/scalvert))
* `cli`, `core`, `parser-eslint`, `plugin-ember-octane`
  * [#251](https://github.com/checkupjs/checkup/pull/251) Extracting parsers to @checkup/core package ([@scalvert](https://github.com/scalvert))
* Other
  * [#250](https://github.com/checkupjs/checkup/pull/250) Use volta-cli/action for CI ([@rwjblue](https://github.com/rwjblue))
* `cli`, `core`, `parser-eslint`, `plugin-ember-octane`, `test-helpers`
  * [#245](https://github.com/checkupjs/checkup/pull/245) Adding --no-cache for jest tests to address test caching issues ([@scalvert](https://github.com/scalvert))
* `cli`, `core`
  * [#237](https://github.com/checkupjs/checkup/pull/237) Implementing table ([@carakessler](https://github.com/carakessler))

#### Committers: 4
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@carakessler](https://github.com/carakessler)
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.0.6 (2020-04-07)

#### :memo: Documentation
* `plugin-ember-octane`
  * [#218](https://github.com/checkupjs/checkup/pull/218) plugin-ember-octane: update docs ([@lbdm44](https://github.com/lbdm44))

#### :house: Internal
* `cli`, `core`, `plugin-ember-octane`, `plugin-ember`
  * [#220](https://github.com/checkupjs/checkup/pull/220) Removing Core category. Adding Recommendations and renaming Migration ([@scalvert](https://github.com/scalvert))
* `cli`, `core`, `parser-eslint`, `plugin-ember-octane`, `plugin-ember`, `test-helpers`
  * [#219](https://github.com/checkupjs/checkup/pull/219) Adds debug package to provide useful debugging info for tasks ([@scalvert](https://github.com/scalvert))
  * [#217](https://github.com/checkupjs/checkup/pull/217) chore(deps) Bumping prettier ([@carakessler](https://github.com/carakessler))
* `cli`, `core`
  * [#210](https://github.com/checkupjs/checkup/pull/210) Adding report data infrastructure for generating HTML/PDF reports ([@carakessler](https://github.com/carakessler))

#### Committers: 4
- Lewis Miller ([@lbdm44](https://github.com/lbdm44))
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@carakessler](https://github.com/carakessler)
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


## v0.0.5 (2020-04-06)

#### :bug: Bug Fix

- `plugin-ember-octane`
  - [#207](https://github.com/checkupjs/checkup/pull/207) Move "babel-eslint" to deps for plugin-ember-octane ([@lbdm44](https://github.com/lbdm44))

#### :memo: Documentation

- [#209](https://github.com/checkupjs/checkup/pull/209) updating contributing.md ([@LLisa717](https://github.com/LLisa717))

#### :house: Internal

- `plugin-ember-octane`
  - [#207](https://github.com/checkupjs/checkup/pull/207) Move "babel-eslint" to deps for plugin-ember-octane ([@lbdm44](https://github.com/lbdm44))

#### Committers: 3

- Lewis Miller ([@lbdm44](https://github.com/lbdm44))
- Lisa Li ([@LLisa717](https://github.com/LLisa717))
- Steve Calvert ([@scalvert](https://github.com/scalvert))

## v0.0.4 (2020-04-06)

#### :house: Internal

- `cli`, `core`, `parser-eslint`, `plugin-ember-octane`, `plugin-ember`, `test-helpers`
  - [#206](https://github.com/checkupjs/checkup/pull/206) Updating scripts to ensure lib is cleaned before build ([@scalvert](https://github.com/scalvert))

#### Committers: 1

- Steve Calvert ([@scalvert](https://github.com/scalvert))

## v0.0.3 (2020-04-06)

#### :bug: Bug Fix

- `cli`, `plugin-ember-octane`, `plugin-ember`, `test-helpers`
  - [#205](https://github.com/checkupjs/checkup/pull/205) Fixing hooks config paths to point to lib vs src ([@scalvert](https://github.com/scalvert))

#### :house: Internal

- `cli`
  - [#195](https://github.com/checkupjs/checkup/pull/195) Fixing checkup meta test to account for dynamic version ([@scalvert](https://github.com/scalvert))

#### Committers: 1

- Steve Calvert ([@scalvert](https://github.com/scalvert))

## v0.0.2 (2020-04-03)

#### :bug: Bug Fix

- `cli`, `core`
  - [#185](https://github.com/checkupjs/checkup/pull/185) Fixing missing deps in core ([@scalvert](https://github.com/scalvert))
- `cli`
  - [#166](https://github.com/checkupjs/checkup/pull/166) Fixing checkup-meta-task's use of shorthash ([@scalvert](https://github.com/scalvert))
- `plugin-ember-octane`
  - [#163](https://github.com/checkupjs/checkup/pull/163) Fix NaN bugs in lint reports ([@lbdm44](https://github.com/lbdm44))

#### Committers: 4

- Lewis Miller ([@lbdm44](https://github.com/lbdm44))
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@carakessler](https://github.com/carakessler)
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v0.0.1 (2020-03-27)

#### :rocket: Enhancement

- `cli`, `core`
  - [#103](https://github.com/checkupjs/checkup/pull/103) Add Config Init Command ([@mahirshah](https://github.com/mahirshah))
  - [#80](https://github.com/checkupjs/checkup/pull/80) Add config flag to optionally pass explicit config path to cli ([@mahirshah](https://github.com/mahirshah))
  - [#60](https://github.com/checkupjs/checkup/pull/60) Refactor Checkup Configuration Loading ([@mahirshah](https://github.com/mahirshah))
  - [#53](https://github.com/checkupjs/checkup/pull/53) Add Validation to Checkup Config ([@mahirshah](https://github.com/mahirshah))
  - [#26](https://github.com/checkupjs/checkup/pull/26) feat(core): Add support for checkup config file ([@mahirshah](https://github.com/mahirshah))
- `cli`, `test-helpers`
  - [#127](https://github.com/checkupjs/checkup/pull/127) Adding plugin generator ([@scalvert](https://github.com/scalvert))
  - [#122](https://github.com/checkupjs/checkup/pull/122) Adding generate command ([@scalvert](https://github.com/scalvert))
- `plugin-ember-octane`
  - [#95](https://github.com/checkupjs/checkup/pull/95) ESLint console output ([@lbdm44](https://github.com/lbdm44))
  - [#86](https://github.com/checkupjs/checkup/pull/86) Output completion info to JSON ([@lbdm44](https://github.com/lbdm44))
- `cli`, `core`, `plugin-default`, `plugin-ember-octane`, `plugin-ember`
  - [#97](https://github.com/checkupjs/checkup/pull/97) Adding PDF function to task results ([@carakessler](https://github.com/carakessler))
- `cli`, `core`, `plugin-default`, `plugin-ember-octane`, `plugin-ember`, `test-helpers`
  - [#87](https://github.com/checkupjs/checkup/pull/87) PDF reporter ([@scalvert](https://github.com/scalvert))
- `cli`, `plugin-ember-octane`
  - [#83](https://github.com/checkupjs/checkup/pull/83) Create plugin-ember-octane ([@lbdm44](https://github.com/lbdm44))
- `cli`, `core`, `plugin-default`, `plugin-ember`, `test-helpers`
  - [#57](https://github.com/checkupjs/checkup/pull/57) Task prioritization ([@scalvert](https://github.com/scalvert))
- `plugin-default`, `plugin-ember`, `test-helpers`
  - [#54](https://github.com/checkupjs/checkup/pull/54) Adds @checkup/plugin-default to output basic, generic project information. ([@scalvert](https://github.com/scalvert))
- `cli`, `core`, `plugin-ember`, `test-helpers`
  - [#30](https://github.com/checkupjs/checkup/pull/30) feat(core): Add Support for Plugins via Config File ([@mahirshah](https://github.com/mahirshah))
- `cli`, `core`, `plugin-ember`
  - [#29](https://github.com/checkupjs/checkup/pull/29) Adding taskName and friendlyTaskName to Task ([@scalvert](https://github.com/scalvert))
  - [#28](https://github.com/checkupjs/checkup/pull/28) Adding path argument to specify directory to run in ([@scalvert](https://github.com/scalvert))
- `cli`
  - [#27](https://github.com/checkupjs/checkup/pull/27) Refactors Checkup and CheckupCLI classes into one ([@scalvert](https://github.com/scalvert))

#### :bug: Bug Fix

- `cli`
  - [#94](https://github.com/checkupjs/checkup/pull/94) Fixing reportOutputPath to create directory if doesn't exist ([@scalvert](https://github.com/scalvert))

#### :memo: Documentation

- [#61](https://github.com/checkupjs/checkup/pull/61) Adding use cases and personas into the spec ([@carakessler](https://github.com/carakessler))
- [#62](https://github.com/checkupjs/checkup/pull/62) Adding workflow instructions ([@carakessler](https://github.com/carakessler))
- [#3](https://github.com/checkupjs/checkup/pull/3) Adding Checkup spec ([@scalvert](https://github.com/scalvert))

#### :house: Internal

- `plugin-ember-octane`
  - [#148](https://github.com/checkupjs/checkup/pull/148) Plugin Ember Octane: Refactor linting constructs into their own files/ ([@lbdm44](https://github.com/lbdm44))
  - [#140](https://github.com/checkupjs/checkup/pull/140) Refactor types for plugin-ember-octane ([@lbdm44](https://github.com/lbdm44))
  - [#123](https://github.com/checkupjs/checkup/pull/123) Add template lint to plugin-ember-octane ([@lbdm44](https://github.com/lbdm44))
- `cli`, `core`, `plugin-default`, `plugin-ember-octane`, `plugin-ember`
  - [#106](https://github.com/checkupjs/checkup/pull/106) Add in card partial scaffolding ([@carakessler](https://github.com/carakessler))
- `cli`
  - [#110](https://github.com/checkupjs/checkup/pull/110) Increasing test timeout for test in @checkup/cli ([@carakessler](https://github.com/carakessler))
- `cli`, `core`
  - [#105](https://github.com/checkupjs/checkup/pull/105) Converts single command to multi ([@scalvert](https://github.com/scalvert))
  - [#60](https://github.com/checkupjs/checkup/pull/60) Refactor Checkup Configuration Loading ([@mahirshah](https://github.com/mahirshah))
- `cli`, `core`, `plugin-default`, `plugin-ember`, `test-helpers`
  - [#75](https://github.com/checkupjs/checkup/pull/75) Refactoring task registration to simplify ([@scalvert](https://github.com/scalvert))
  - [#55](https://github.com/checkupjs/checkup/pull/55) task(linting): Adding linting plugins to extend lint checks ([@scalvert](https://github.com/scalvert))
- `plugin-ember`, `test-helpers`
  - [#56](https://github.com/checkupjs/checkup/pull/56) Cleanup implementations of fixturify-project classes ([@scalvert](https://github.com/scalvert))
- `cli`, `core`, `parser-eslint`
  - [#48](https://github.com/checkupjs/checkup/pull/48) Adds @checkup/parser-eslint plugin package ([@scalvert](https://github.com/scalvert))
- `cli`, `core`, `plugin-ember`, `test-helpers`
  - [#43](https://github.com/checkupjs/checkup/pull/43) Add clean commands ([@lbdm44](https://github.com/lbdm44))
- Other
  - [#42](https://github.com/checkupjs/checkup/pull/42) Adding wsrun package to execute tasks in dependency order and parallel ([@scalvert](https://github.com/scalvert))
- `cli`, `plugin-ember`, `test-helpers`
  - [#32](https://github.com/checkupjs/checkup/pull/32) Adding @checkup/test-helpers package ([@scalvert](https://github.com/scalvert))

#### Committers: 6

- Lewis Miller ([@lbdm44](https://github.com/lbdm44))
- Lisa Li ([@LLisa717](https://github.com/LLisa717))
- Mahir Shah ([@mahirshah](https://github.com/mahirshah))
- Steve Calvert ([@scalvert](https://github.com/scalvert))
- [@carakessler](https://github.com/carakessler)
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
