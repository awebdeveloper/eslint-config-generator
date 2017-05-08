ESLintConfigGenApp.rules["handle-callback-err"] = [
  {
    key: "rules.handle-callback-err",
    hint: `Enforce Callback Error Handling
          (<a href='http://eslint.org/docs/rules/handle-callback-err'>handle-callback-err</a>)`,
    variants: [
      {
        hint: "Allow no error handling code in callback",
        code: `function loadData (err, data) {
  doSomething(); // forgot to handle error
}`,
        skip: true,
        showIf: config => config.env.node == true
      },
      {
        hint: "Dont Allow code without error handling in callback",
        code: `function loadData (err, data) {
  <mark>if (err) {
      console.log(err.stack);
  }</mark>
  doSomething();
}`,
        value: ["error"],
        showIf: config => config.env.node == true
      }
    ]
  }
];
