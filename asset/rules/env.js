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
  }
];
