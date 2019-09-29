# NG AL DEMO

This repository contains demo code related to an Angular introduction course given in September 2019 at the ESGI in Paris. It intends to demonstrate the manual configuration of a development environment suited to building a typescript SPA, i.e. an Angular app initialization.

## Usage

### Install dependencies

Dependending on your tool, either

```
yarn
```
or
```
npm install
```

### Compile code

Dependending on your tool, either

```
yarn build
```
or
```
npm run build
```

### Launch server

Dependending on your tool, either

```
yarn start
```
or
```
npm start
```

Then visit http://localhost:3000

## Architecture

* the `./dist` folder contains all files outputed by the webpack production bundling (`build` npm script).
* the `./node_modules/` folder contains all files downloaded each time a npm package has been added to the project.
* the `./server` folder contains all files needed by the 'production' server which serves the `./dist` folder
* the `./src` folder contains all source files needed by webpack to build the app
* `.babelrc` is the babel config file
* `.eslintrc` is the eslint config file (javascript linting)
* `.gitignore` defines the path that should ne be indexed by git
* `.prettierrc` is the prettier config file (javascript and typescript formatting)
* `index.js` is the entry file for the 'production' server, using `esm` to provide a nodejs usable ES2015 module
* `package-lock.json` ensures that every install of the project's dependencies through npm uses the same versions
* `package.json` is the root definition file for the whole project and lists scripts & dependencies
* `postcss.config.js` is the postcss config file defining plugins used by the webpack postcss-loader to enrich the outputed css
* `tsconfig.json` is the typescript config file ensuring the correct transpilation of the `.ts` source files
* `.tslint.json` is the tslint config file (typescript linting)
* `webpack.config.js` contains the production & development config for the webpack & webpack-dev-server commands to use
* `yarn.lock` ensures that every install of the project's dependencies through yarn uses the same versions
