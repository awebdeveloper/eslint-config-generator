ESLintConfigGenApp.rules["curly"] = [
  {
    key: "rules.curly",
    hint: `Enforce consistent brace style for all control statements
          (<a href='http://eslint.org/docs/rules/curly'>curly</a>)`,
    variants: [
      {
        hint: "Enforce the use of curly braces in all block statements( if, else, for, while, or do )",
        code: `
        if (foo) {
          foo++;
        }
        while (true) {
          baz();
          doSomething();
        }`,
        value: "error"
      },
      {
        hint: "Enforce the use of curly braces when multiple statements are present in the block & warn when there is only one statement in the block",
        code: `
        if (foo)
          foo++;   // no need of curly braces [a warning is thrown]
        else
          foo();

        while (true) {    // requires curly braces in case of multiline statements
          baz();
          doSomething();
        }`,
        value: ["error", "multi", "consistent"]
      },
      {
        hint: "Relax the warning when there is only one statement in the block while still enforcing the use of curly braces for other instances",
        code: `
        if (foo)
          foo++;   // no need of curly braces
        else
          foo();

        while (true) {    // requires curly braces in case of multiline statements
          baz();
          doSomething();
        }`,
        value: ["error", "multi-line", "consistent"]
      }
    ]
  }
];
