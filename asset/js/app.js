ESLintConfigGenApp.oncogene = new MyOncogene({
  selector: ".oncogene",
  config: {
    extends: "eslint:recommended"
  },
  steps: [
    ...ESLintConfigGenApp.rules["base"],
    ...ESLintConfigGenApp.rules["env"],
    ...ESLintConfigGenApp.rules["spacing"],
    ...ESLintConfigGenApp.rules["global-require"],
    ...ESLintConfigGenApp.rules["handle-callback-err"],
    ...ESLintConfigGenApp.rules["curly"]
  ]
});
