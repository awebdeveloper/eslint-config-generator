/**
 * This is extention of oncogene
 *
 * @class MyOncogene
 * @extends {Oncogene}
 */
class MyOncogene extends Oncogene {
  /**
   *
   * @memberof MyOncogene
   */
  nextStep() {
    const result = document.querySelector('.result > .config')

    result.textContent = JSON.stringify(this.config, null, 4)
    super.nextStep()
  }

  /**
   *
   * @memberof MyOncogene
   */
  getResult() {
    document.querySelector('.oncogene').remove()
  }
}

new MyOncogene({
  selector: '.oncogene',
  config: {
    "extends": "eslint:recommended"
  },
  steps: [{
    key: 'ecmaVersion',
    hint: 'Specify Ecmascript Version',
    variants: [{
      code: '5',
      value: 5
    },
    {
      code: '6',
      value: 6
    },
    {
      code: '7',
      value: 7
    },
    {
      code: '8',
      value: 8
    }]
  },
  {
    key: 'sourceType',
    hint: 'What are you developing',
    variants: [{
      code: 'Script',
      value: 'script'
    },
    {
      code: 'Module',
      value: 'module'
    }]
  },
  {
    key: 'ecmaFeatures.jsx',
    hint: 'Allow JSX',
    variants: [{
        hint: 'Yes',
        code:
`React.createElement(
  'div',
  {className: 'sidebar'},
  null
)`,
        value: true
    },{
        hint: 'No',
        code: 'Dont Allow JSX',
        value: false
    }]
  },
  {
    key: 'env',
    hint: 'You are developing for',
    variants: [{
      code: 'Node',
      value: {"node":true}
    },
    {
      code: 'Browser',
      value: {"browser":true}
    },
    {
      code: 'Shared Node Browser',
      value: {"shared-node-browser":true}
    }]
  },
  {
    key: 'rules.indent',
    hint: 'Allow JSX',
    variants: [{
        hint: '2 Spaces',
        code:
`if(a) {
<mark>  </mark>return true;
}`,
        value: ["error", 2]
    }, {
        hint: '4 Spaces',
        code:
`if(a) {
<mark>    </mark>return true;
}`,
        value: ["error", 4]
    },{
        hint: 'Tab',
        code:
`if(a) {
<mark>  </mark>return true;
}`,
        value: ["error", "tab"]
    }]
  },
  ]
})
