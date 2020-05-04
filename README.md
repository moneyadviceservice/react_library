# React component library for Directories project
![Travis (.org)](https://img.shields.io/travis/moneyadviceservice/react_library)

## Installing the library on a project
You can install the component library on another react project using either of the methods given below.

For NPM users:
```shell
  $ npm install @moneypensionservice/directories
```
For Yarn users:

```shell
  $ yarn add @moneypensionservice/directories
```

## Documentation
Visit the [documentation website](https://moneyadviceservice.github.io/react_library/) for more information.

## List of the technologies used in this library:

- [React](https://reactjs.org/) for creating components and [styled-components](https://www.styled-components.com/) for styling;
- [Styleguidist](https://react-styleguidist.js.org/) for both live development and generating documentation;
- [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing;
- [Rollup](https://rollupjs.org/guide/en/) and [Babel](https://babeljs.io/) for bundling the library for publishing to [NPM](https://www.npmjs.com/);
- [Travis CI](https://travis-ci.org/) for auto-deployment of the documentation via GitHub pages.

## Running the project locally with Styleguidist

### Install NPM dependencies
```shell
  $ npm install
```

### Preview components
```shell
  $ npm start
```
Live reloading and preview of the components should be available at `http://localhost:6060` powered by Styleguidist.

### Testing
```shell
  $ npm test
```

## Building the project
Cleanup and rebuild the files in the `lib` directory:
```shell
  $ npm run prepublishOnly
```
Display the contents of the package that will be published to NPM. Make sure the project builds before publishing:
```shell
  $ npm run postbuild
```

## Publish the package to NPM

If your user is a member of the NPM registry, login:
```shell
  $ npm login --scope=@moneypensionservice
```

Now you should be ready to publish the package:
```shell
  $ npm publish --access=public
```

### Adding new users to the NPM Registry

Create an account at [npmjs.com](https://www.npmjs.com/signup). You should ask for an invitation to join the organisation registry.

An admin can add a new member to the registry:
```shell
  $ npm adduser --scope=@moneypensionservice
```

## Deploying the [documentation](https://moneyadviceservice.github.io/react_library/)
Documentation will automatically updated via TravisCI when changes are made to the master branch if the build is successfull. It is available online as a GitHub Page at [https://moneyadviceservice.github.io/react_library/](https://moneyadviceservice.github.io/react_library/).

To generate the Styleguidist documentation to the `dist-docs` directory:
```shell
  $ npm run docs:build
```
