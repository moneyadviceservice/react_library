## Technologies used
- [React](https://reactjs.org/) for creating components and [styled-components](https://www.styled-components.com/) for styling;
- [Styleguidist](https://react-styleguidist.js.org/) for both live development and generating documentation;
- [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing;
- [Rollup](https://rollupjs.org/guide/en/) and [Babel](https://babeljs.io/) for bundling the library for publishing to [NPM](https://www.npmjs.com/);
- [Travis CI](https://travis-ci.org/) for auto-deployment of the documentation via GitHub pages.

---
## Repository Structure
The repository itself has two existing setups: one for the styleguidist documentation page that you are currently using, and a second setup to bundle and deploy the package to our npm registry:

### Styleguidist Setup
The existing [Styleguidist](https://github.com/styleguidist/react-styleguidist) setup is configured in the [styleguide.config.js](https://github.com/moneyadviceservice/react_library/blob/master/styleguide.config.js) file. There you can find the webpack configuration that is used to create the static HTML pages of the documentation as well as the structure of the sections and files used by Styleguidist.

To generate the Styleguidist documentation to the **dist-docs** directory on your local machine, you can run:
```shell
  $ npm run docs:build
```
This will generate the files that get deployed when Styleguidist is built with Travis.

### Rollup Setup
In order to deploy the package to [npmjs.com](npmjs.com), we use Rollup to bundle the library into multiple formats. The Rollup configuration can be found in [rollup.config.js](https://github.com/moneyadviceservice/react_library/blob/master/rollup.config.js).

Rollup also uses some plugins in order to support multiple functionalities:
- **@rollup/plugin-babel**: Supports seamless integration between Rollup and Babel;
- **@rollup/plugin-commonjs**: Converts CommonJS modules to ES6, so they can be included in a Rollup bundle;
- **@rollup/plugin-json**: Converts .json files to ES6 modules;
- **@rollup/plugin-node-resolve**: Locates and bundle third-party dependencies in node_modules;
- **@rollup/plugin-url**: Imports files as data-URIs or ES Modules;
- **rollup-plugin-peer-deps-external**: Automatically externalises peerDependencies in the rollup bundle;
- **rollup-plugin-terser**: Minifies the generated bundle.

Both setups fully utilise the Babel configuration in [.babelrc](https://github.com/moneyadviceservice/react_library/blob/master/.babelrc) and the browserslist found in [package.json](https://github.com/moneyadviceservice/react_library/blob/master/package.json#L90).

---
## Linting and Formatting Code
To keep code consistency between contributors, this library uses [Prettier](https://prettier.io/) as the code formatter and its configuration can be found at [.prettierrc](https://github.com/moneyadviceservice/react_library/blob/master/.prettierrc).

Linting is done with [ESlint](https://eslint.org/) with Babel support. ESlint configuration can be found at [.eslintrc](https://github.com/moneyadviceservice/react_library/blob/master/.eslintrc).

---
## Testing
Testing is done with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). The testing files for each component are placed in the same folder as index.js as well as snapshots.

To run tests:
```shell
  $ npm test
```

---
## Travis CI
Travis is used to deploy the styleguidist documentation to [Github Pages](https://moneyadviceservice.github.io/react_library/), this is performed automatically when changes are done in the master branch.

Additionally, Travis is also used to deploy the documentation to the QA environment by detecting changes in the [QA branch of the github repository](https://github.com/moneyadviceservice/react_library/tree/QA).

The configuration for Travis deployments can be found on [.travis.yml](https://github.com/moneyadviceservice/react_library/blob/master/.travis.yml).

You can find the Travis library deployments [here](https://travis-ci.org/github/moneyadviceservice/react_library/branches).


---
## Github Pages and Heroku Deployment
As previously mentioned, deployment to [Github Pages](https://moneyadviceservice.github.io/react_library/) is performed automatically by Travis once changes are done in the master branch.

There is a [Heroku environment](https://dashboard.heroku.com/apps/qa-react-library) for the deployment of the QA branch, also done via Travis. The QA deployment can be found at [https://qa-react-library.herokuapp.com/](https://qa-react-library.herokuapp.com/)
[]()
