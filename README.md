# React component library for Directories project
![Travis (.org)](https://img.shields.io/travis/moneyadviceservice/react_library)

**List of the technologies used in this library:**

- [React](https://reactjs.org/) for creating components and [styled-components](https://www.styled-components.com/) for styling;
- [Styleguidist](https://react-styleguidist.js.org/) for both live development and generating documentation;
- [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing;
- [Rollup](https://rollupjs.org/guide/en/) and [Babel](https://babeljs.io/) for bundling the library for publishing to [NPM](https://www.npmjs.com/);
- [Travis CI](https://travis-ci.org/) for auto-deployment of the documentation to GitHub pages.


## Development Scripts

> ### Install Dependencies

- `$ npm install`

> ### Preview Components

- `$ npm start`
  - _live reloading and preview of the components at `http://localhost:6060`_

> ### Testing

- `$ npm test`

> ### Build for Production

**Note:** Update the package version in [`package.json`](https://github.com/moneyadviceservice/react_library/package.json) before building

- `$ npm run prepublishOnly`
  - _cleanup and rebuild the files in the `lib` directory_
- `$ npm run postbuild`
  - _shows the contents of the package that will be published to NPM_

> ### Publish Package to NPM

- `$ npm login`
  - _use maps credentials in keypass to sign in_
- `$ npm publish`

> ### Deploying the [Documentation](https://moneyadviceservice.github.io/react_library/)

Documentation will automatically updated via TravisCI when changes are made to the master branch if the build is successfull. It is available online as a GitHub Page at [https://moneyadviceservice.github.io/react_library/](https://moneyadviceservice.github.io/react_library/).

To build the documentation locally:

- `$ npm run docs:build`
  - _generate the Styleguidist documentation to the `dist-docs` directory_
