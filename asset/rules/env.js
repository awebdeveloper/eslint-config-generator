ESLintConfigGenApp.rules.env = [
  {
    key: "env",
    hint: "You are developing for",
    variants: [
      {
        code: "Node",
        value: {
          node: true
        }
      },
      {
        code: "Browser",
        value: {
          browser: true
        }
      },
      {
        code: "Shared Node Browser",
        value: {
          "shared-node-browser": true
        }
      }
    ]
  },
  {
    key: "env",
    hint: "You are writing unit test in",
    variants: [
      {
        code: "Mocha",
        value: {
          mocha: true
        },
        push: true
      },
      {
        code: "Jasmine",
        value: {
          jasmine: true
        },
        push: true
      },
      {
        code: "Ember Test",
        value: {
          embertest: true
        },
        push: true,
        showIf: config => config.env.browser == true
      },
      {
        code: "I dont write unit tests",
        skip: true
      }
    ]
  },
  {
    key: "env",
    hint: "You are writing e2e test in",
    showIf: config => config.env.browser == true,
    variants: [
      {
        code: "Qunit",
        value: {
          qunit: true
        },
        push: true
      },
      {
        code: "Protractor",
        value: {
          protractor: true
        },
        push: true
      },
      {
        code: "I dont write e2e tests",
        skip: true
      }
    ]
  },
  {
    key: "env",
    hint: "My Module loading pattern is",
    variants: [
      {
        code: "AMD",
        value: {
          amd: true
        },
        push: true
      },
      {
        code: "CommonJs",
        value: {
          commonjs: true
        },
        push: true
      },
      {
        code: "None of these",
        skip: true
      }
    ]
  },
  {
    key: "env",
    hint: "Library i use is",
    variants: [
      {
        code: "jQuery",
        value: {
          jquery: true
        },
        push: true,
        showIf: config => config.env.browser == true
      },
      {
        code: "Prototype Js",
        value: {
          prototypejs: true
        },
        push: true,
        showIf: config => config.env.browser == true
      },
      {
        code: "Meteor",
        value: {
          meteor: true
        },
        push: true,
        showIf: config => config.env.node == true
      },
      {
        code: "Mongo",
        value: {
          mongo: true
        },
        push: true,
        showIf: config => config.env.node == true
      },
      {
        code: "None of these",
        skip: true
      }
    ]
  },
  {
    key: "env",
    hint: "I am using/writing",
    variants: [
      {
        code: "Service Worker",
        value: {
          serviceworker: true
        },
        push: true,
        showIf: config => config.env.browser == true
      },
      {
        code: "Web Worker",
        value: {
          worker: true
        },
        push: true,
        showIf: config => config.env.browser == true
      },
      {
        code: "Web Extensions",
        value: {
          webextensions: true
        },
        push: true,
        showIf: config => config.env.browser == true
      },
      {
        code: "Greasemonkey",
        value: {
          greasemonkey: true
        },
        push: true,
        showIf: config => config.env.browser == true
      },
      {
        code: "None of these",
        skip: true
      }
    ]
  }
];
