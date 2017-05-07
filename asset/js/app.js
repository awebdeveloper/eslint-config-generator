ESLintConfigGenApp.oncogene = new MyOncogene({
  selector: ".oncogene",
  config: {
    extends: "eslint:recommended"
  },
  steps: [
    ...ESLintConfigGenApp.rules.base,
    ...ESLintConfigGenApp.rules.env,
    ...ESLintConfigGenApp.rules.spacing
  ]
});
