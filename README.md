![Joystream Website](./website_new.svg)

## Installation

To install all local dependencies located in `package.json` use:

```bash
yarn
```

## Website

1. **ENVs**

To populate project with environment variables create files `.env.development` for local development and `.env.production` for final build.

2.  **Local development**

```sh
gatsby develop
```

Local server will start on `http://localhost:8000/`

3.  **Build**

To build Gatsby project run:

```sh
yarn build
```

After the process is complete, production files will be located in the `public` folder located in the root of the project.

4.  **Test**

Joystream uses [Jest](https://jestjs.io/) for writing tests. Please make sure to write unit and snapshot tests (update if needed). Pre-commit hook won't allow you committing unless all the tests, linters passes.

Pre-commit hook contains three command for testing: `lint`, `stylelint` and `test`, which will test your `scss`, `js` and `test` files.

Please use this command to run tests locally:

```sh
yarn test
```

## Storybook

1.  **Local development**

This project uses [Storybook](https://storybook.js.org/) for development purposes.
Components are divided into several categories: `Components`, `Layout`, `Section`, `Assets`, `Pages` and by default `Other` if no category is specified.

Run `gatsby develop` or `gatsby build` at least once before running Storybook to generate static files usef in the project.
To run the storybook on `http://localhost:6006/` use:

```sh
yarn storybook
```

2.  **Build**

To build storybook run:

```sh
yarn build-storybook
```

After the process is complete, production files will be located in the `storybook-static` folder located next to other files in the root of the project.

## Branding

#### Assets

All Branding assets are available in [joystream design repository](https://github.com/Joystream/design/tree/master/). In case any of them changes, a script should be ran to include changes on the joystream branding page, and any changes introduced by it should be commited and deployed.

Assets refresh script:

```sh
yarn fetch-assets-data
```

## Roadmap data

Roadmap data can be found in the following file(s): `src/data/quarters/${roadmap-data-name}.json`

To update the data, just directly edit the file you want to change the data for.

To add a new version of the roadmap, you can follow these steps:
- Add new file in the aforementioned folder (e.g., `src/data/quarters/2024-2025.json`)
- The roadmap file should follow this structure:
  - ```js
      [{
          "language",
          "quarters": [{
            "year",
            "id",
            "deliveryMilestones": [{
              "icon",
              "title",
              "Content"
            }]
          }]
        }]
    ```
  - In case of doubts and to also get a better idea for how this data should look exactly, you can consult one of the roadmap files that are already there.
  - As for the "icon" values, these values represent icons that can be found in the assets of the project. More specifically, for the map of "key" (i.e., in this case the icon string value) to the "value" (i.e., the icon itself) you can consult the `iconMap` object in the following file: `src/data/quarters/index.js`.
- As the final step, the exported array within the `src/data/quarters/index.js` file needs to be expanded with an object following this structure: `{ "select": { "title", "subtitle" }, "name", "value", "isNewest" }`
  - Note: Only one object should have the `"isNewest"` property set to `true`.

## Glossary data

Glossary data can be found in the following file: `src/data/glossary/glossary.json`

When updating the glossary or adding new terms to it, this structure should be followed:
```js
  [{
    "language":
    "terms": [{
      "title",
      "tooltip",
      "content",
      "nodes": [{
        "title",
        "content": [""]
      }],
      "others": [{
        "title",
        "subtitle",
        "content": [""]
      }],
      "relatedTerms": [""]
    }]
  }]
```

Important note: The glossary is automatically populated into the roadmap at runtime. The way this is done is that the term title is checked for in the content of a roadmap item and replaced with an underlined item with a tooltip. It is therefore important to make sure that the spelling of each title term is correct.