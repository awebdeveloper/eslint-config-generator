ESLintConfigGenApp.rules.spacing = [
  {
    key: "rules.indent",
    hint: "My indentation preferences",
    variants: [
      {
        hint: "2 Spaces",
        code: `if(a) {
<mark>  </mark>return true;
}`,
        value: ["error", 2]
      },
      {
        hint: "4 Spaces",
        code: `if(a) {
<mark>    </mark>return true;
}`,
        value: ["error", 4]
      },
      {
        hint: "Tab",
        code: `if(a) {
<mark>  </mark>return true;
}`,
        value: ["error", "tab"]
      }
    ]
  }
];
