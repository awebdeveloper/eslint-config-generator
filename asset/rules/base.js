ESLintConfigGenApp.rules.base = [
  {
    key: "ecmaVersion",
    hint: "Specify Ecmascript Version",
    variants: [
      {
        code: "5",
        value: 5
      },
      {
        code: "6",
        value: 6
      },
      {
        code: "7",
        value: 7
      },
      {
        code: "8",
        value: 8
      }
    ]
  },
  {
    key: "sourceType",
    hint: "What are you developing",
    variants: [
      {
        code: "Script",
        value: "script"
      },
      {
        code: "Module",
        value: "module"
      }
    ]
  },
  {
    key: "ecmaFeatures.jsx",
    hint: "Allow JSX",
    variants: [
      {
        hint: "Yes",
        code: `React.createElement(
  'div',
  {className: 'sidebar'},
  null
)`,
        value: true
      },
      {
        hint: "No",
        code: "Dont Allow JSX",
        value: false
      }
    ]
  }
];
