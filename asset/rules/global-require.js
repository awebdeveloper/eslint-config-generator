ESLintConfigGenApp.rules["global-require"] = [
  {
    key: "rules.global-require",
    hint: `Enforce require() on the top-level module scope
          (<a href='http://eslint.org/docs/rules/global-require'>global-require</a>)`,
    variants: [
      {
        hint: "Allow local require",
        code: `function foo() {
  if (condition) {
    var fs = <mark>require("fs");</mark>
  }
}`,
        skip: true,
        showIf: config => config.env.node == true
      },
      {
        hint: "Dont Allow local require",
        code: `var fs = <mark>require("fs");</mark>
function foo() {
  if (condition) {
    //do something
  }
}`,
        value: ["error"],
        showIf: config => config.env.node == true
      }
    ]
  }
];
