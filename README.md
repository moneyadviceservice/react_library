# MaPS - Directories React Component Library
[![Build Status](https://img.shields.io/travis/moneyadviceservice/react_library?branch=master)](https://travis-ci.org/github/moneyadviceservice/react_library)
[![npm version](https://badge.fury.io/js/%40moneypensionservice%2Fdirectories.svg)](https://badge.fury.io/js/%40moneypensionservice%2Fdirectories)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![](https://img.shields.io/badge/Styleguidist-Documentation%Website-green)](https://moneyadviceservice.github.io/react_library/)

## Installation
The component library is available via NPM or Yarn:
```shell
  $ npm install @moneypensionservice/directories
  # or
  $ yarn add @moneypensionservice/directories
```

## Usage
You can find a list of all available components on the [documentation website](https://moneyadviceservice.github.io/react_library/) as well as guides to set up the library on your React application.

## Technologies used

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

Make sure the project builds before publishing and display the contents of the package that will be published to NPM:
```shell
  $ npm run postbuild
```

## Publishing package to NPM

If your user is a member of the [NPM registry](https://www.npmjs.com/org/moneypensionservice), login:
```shell
  $ npm login --scope=@moneypensionservice
```

Now you should be ready to publish the package:
```shell
  $ npm publish --access=public
```

### Adding new users to the [NPM Registry](https://www.npmjs.com/org/moneypensionservice)

Create an account at [npmjs.com](https://www.npmjs.com/signup). You should ask for an invitation to join the organisation registry.

An admin can add a new member to the registry:
```shell
  $ npm adduser --scope=@moneypensionservice
```
or via [npmjs.com](npmjs.com) following [this guide](https://docs.npmjs.com/adding-members-to-your-org).

## Deploying the [documentation](https://moneyadviceservice.github.io/react_library/)
Documentation will automatically updated via TravisCI when changes are made to the master branch if the build is successfull. It is available online as a GitHub Page at [https://moneyadviceservice.github.io/react_library/](https://moneyadviceservice.github.io/react_library/).

To generate the Styleguidist documentation to the `dist-docs` directory on your local machine:
```shell
  $ npm run docs:build
```
