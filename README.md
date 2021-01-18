# Eslint Config Generator

App for quick generation eslint configuration file. 

Uses this for config generation.

## Try it out 

https://awebdeveloper.github.io/eslint-config-generator/

## Supported Properties

We support very few properties as of now. Send us a pr if you want a missing property to be added:

- ParseOptions
  - ecmaVersion
  - sourceType
  - ecmaFeatures
  - env
- Rules

| :grey_question: | ESLint | Description |
| :---            | :---:  | :---        |
|:x:|[comma-dangle](http://eslint.org/docs/rules/comma-dangle)|disallow or enforce trailing commas (recommended)|
|:x:|[no-cond-assign](http://eslint.org/docs/rules/no-cond-assign)|disallow assignment in conditional expressions (recommended)|
|:x:|[no-console](http:/eslint.org/docs/rules/no-console)|disallow use of `console` in the node environment (recommended)|
|:x:|[no-constant-condition](http://eslint.org/docs/rules/no-constant-condition)|disallow use of constant expressions in conditions (recommended)|
|:x:|[no-control-regex](http://eslint.org/docs/rules/no-control-regex)|disallow control characters in regular expressions (recommended)|
|:x:|[no-debugger](http://eslint.org/docs/rules/no-debugger)|disallow use of `debugger` (recommended)|
|:x:|[no-dupe-args](http://eslint.org/docs/rules/no-dupe-args)|disallow duplicate arguments in functions (recommended)|
|:x:|[no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys)|disallow duplicate keys when creating object literals (recommended)|
|:x:|[no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case)|disallow a duplicate case label. (recommended)|
|:x:|[no-empty](http://eslint.org/docs/rules/no-empty)|disallow empty statements (recommended)|
|:x:|[no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class)|disallow the use of empty character classes in regular expressions (recommended)|
|:x:|[no-ex-assign](http://eslint.org/docs/rules/no-ex-assign)|disallow assigning to the exception in a `catch` block (recommended)|
|:x:|[no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast)|disallow double-negation boolean casts in a boolean context (recommended)|
|:x:|[no-extra-parens](http://eslint.org/docs/rules/no-extra-parens)|disallow unnecessary parentheses|
|:x:|[no-extra-semi](http://eslint.org/docs/rules/no-extra-semi)|disallow unnecessary semicolons (recommended)|
|:x:|[no-func-assign](http://eslint.org/docs/rules/no-func-assign)|disallow overwriting functions written as function declarations (recommended)|
|:x:|[no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations)|disallow function or variable declarations in nested blocks (recommended)|
|:x:|[no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp)|disallow invalid regular expression strings in the `RegExp` constructor (recommended)|
|:x:|[no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace)|disallow irregular whitespace (recommended)|
|:x:|[no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs)|disallow negation of the left operand of an `in` expression (recommended)|
|:x:|[no-obj-calls](http://eslint.org/docs/rules/no-obj-calls)|disallow the use of object properties of the global object (`Math` and `JSON`) as functions (recommended)|
|:x:|[no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces)|disallow multiple spaces in a regular expression literal (recommended)|
|:x:|[no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays)|disallow sparse arrays (recommended)|
|:x:|[no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)|Avoid code that looks like two expressions but is actually one|
|:x:|[no-unreachable](http://eslint.org/docs/rules/no-unreachable)|disallow unreachable statements after a return, throw, continue, or break statement (recommended)|
|:x:|[no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)|disallow control flow statements in finally blocks (recommended)|
|:x:|[use-isnan](http://eslint.org/docs/rules/use-isnan)|disallow comparisons with the value `NaN` (recommended)|
|:x:|[valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc)|enforce valid JSDoc comments|
|:x:|[valid-typeof](http://eslint.org/docs/rules/valid-typeof)|Ensure that the results of typeof are compared against a valid string (recommended)|
|:x:|[accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)|Enforces getter/setter pairs in objects|
|:x:|[array-callback-return](http://eslint.org/docs/rules/array-callback-return)|Enforce return statements in callbacks of array’s methods|
|:x:|[block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)|treat `var` statements as if they were block scoped|
|:x:|[complexity](http://eslint.org/docs/rules/complexity)|specify the maximum cyclomatic complexity allowed in a program|
|:x:|[consistent-return](http://eslint.org/docs/rules/consistent-return)|require `return` statements to either always or never specify values|
|:x:|[curly](http://eslint.org/docs/rules/curly)|specify curly brace conventions for all control statements|
|:x:|[default-case](http://eslint.org/docs/rules/default-case)|require `default` case in `switch` statements|
|:x:|[dot-location](http://eslint.org/docs/rules/dot-location)|enforces consistent newlines before or after dots|
|:x:|[dot-notation](http://eslint.org/docs/rules/dot-notation)|encourages use of dot notation whenever possible|
|:x:|[eqeqeq](http://eslint.org/docs/rules/eqeqeq)|require the use of `===` and `!==`|
|:x:|[guard-for-in](http://eslint.org/docs/rules/guard-for-in)|make sure `for-in` loops have an `if` statement|
|:x:|[no-alert](http://eslint.org/docs/rules/no-alert)|disallow the use of `alert`, `confirm`, and `prompt`|
|:x:|[no-caller](http://eslint.org/docs/rules/no-caller)|disallow use of `arguments.caller` or `arguments.callee`|
|:x:|[no-case-declarations](http://eslint.org/docs/rules/no-case-declarations)|disallow lexical declarations in case clauses|
|:x:|[no-div-regex](http://eslint.org/docs/rules/no-div-regex)|disallow division operators explicitly at beginning of regular expression|
|:x:|[no-else-return](http://eslint.org/docs/rules/no-else-return)|disallow `else` after a `return` in an `if`|
|:x:|[no-empty-function](http://eslint.org/docs/rules/no-empty-function)|disallow use of empty functions|
|:x:|[no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern)|disallow use of empty destructuring patterns|
|:x:|[no-eq-null](http://eslint.org/docs/rules/no-eq-null)|disallow comparisons to null without a type-checking operator|
|:x:|[no-eval](http://eslint.org/docs/rules/no-eval)|disallow use of `eval()`|
|:x:|[no-extend-native](http://eslint.org/docs/rules/no-extend-native)|disallow adding to native types|
|:x:|[no-extra-bind](http://eslint.org/docs/rules/no-extra-bind)|disallow unnecessary function binding|
|:x:|[no-extra-label](http://eslint.org/docs/rules/no-extra-label)|disallow unnecessary labels|
|:x:|[no-fallthrough](http://eslint.org/docs/rules/no-fallthrough)|disallow fallthrough of `case` statements (recommended)|
|:x:|[no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal)|disallow the use of leading or trailing decimal points in numeric literals|
|:x:|[no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion)|disallow the type conversions with shorter notations|
|:x:|[no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals)|disallow var and named functions in global scope|
|:x:|[no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)|disallow use of `eval()`-like methods|
|:x:|[no-invalid-this](http://eslint.org/docs/rules/no-invalid-this)|disallow `this` keywords outside of classes or class-like objects|
|:x:|[no-iterator](http://eslint.org/docs/rules/no-iterator)|disallow Usage of `__iterator__` property|
|:x:|[no-labels](http://eslint.org/docs/rules/no-labels)|disallow use of labeled statements|
|:x:|[no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)|disallow unnecessary nested blocks|
|:x:|[no-loop-func](http://eslint.org/docs/rules/no-loop-func)|disallow creation of functions within loops|
|:x:|[no-magic-numbers](http://eslint.org/docs/rules/no-magic-numbers)|disallow the use of magic numbers|
|:x:|[no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces)|disallow use of multiple spaces|
|:x:|[no-multi-str](http://eslint.org/docs/rules/no-multi-str)|disallow use of multiline strings|
|:x:|[no-native-reassign](http://eslint.org/docs/rules/no-native-reassign)|disallow reassignments of native objects|
|:x:|[no-new](http://eslint.org/docs/rules/no-new)|disallow use of the `new` operator when not part of an assignment or comparison|
|:x:|[no-new-func](http://eslint.org/docs/rules/no-new-func)|disallow use of new operator for `Function` object|
|:x:|[no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)|disallows creating new instances of `String`,`Number`, and `Boolean`|
|:x:|[no-octal](http://eslint.org/docs/rules/no-octal)|disallow use of octal literals (recommended)|
|:x:|[no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)|disallow use of octal escape sequences in string literals, such as `var foo = ""Copyright \251","`"`
|:x:|[no-param-reassign](http://eslint.org/docs/rules/no-param-reassign)|disallow reassignment of function parameters|
|:x:|[no-proto](http://eslint.org/docs/rules/no-proto)|disallow Usage of `__proto__` property|
|:x:|[no-redeclare](http://eslint.org/docs/rules/no-redeclare)|disallow declaring the same variable more than once (http://eslint.org/docs/rules/recommended)|
|:x:|[no-return-assign](http://eslint.org/docs/rules/no-return-assign)|disallow use of assignment in `return` statement|
|:x:|[no-script-url](http://eslint.org/docs/rules/no-script-url)|disallow use of `javascript:` urls.|
|:x:|[no-self-assign](http://eslint.org/docs/rules/no-self-assign)|disallow assignments where both sides are exactly the same|
|:x:|[no-self-compare](http://eslint.org/docs/rules/no-self-compare)|disallow comparisons where both sides are exactly the same|
|:x:|[no-sequences](http://eslint.org/docs/rules/no-sequences)|disallow use of the comma operator|
|:x:|[no-throw-literal](http://eslint.org/docs/rules/no-throw-literal)|restrict what can be thrown as an exception|
|:x:|[no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)|disallow unmodified conditions of loops|
|:x:|[no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)|disallow Usage of expressions in statement position|
|:x:|[no-unused-labels](http://eslint.org/docs/rules/no-unused-labels)|disallow unused labels|
|:x:|[no-useless-call](http://eslint.org/docs/rules/no-useless-call)|disallow unnecessary `.call()` and `.apply()`|
|:x:|[no-useless-concat](http://eslint.org/docs/rules/no-useless-concat)|disallow unnecessary concatenation of literals or template literals|
|:x:|[no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)|disallow unnecessary usage of escape character|
|:x:|[no-void](http://eslint.org/docs/rules/no-void)|disallow use of the `void` operator|
|:x:|[no-warning-comments](http://eslint.org/docs/rules/no-warning-comments)|disallow Usage of configurable warning terms in comments e.g. `TODO` or `FIXME`|
|:x:|[no-with](http://eslint.org/docs/rules/no-with)|disallow use of the `with` statement|
|:x:|[radix](http://eslint.org/docs/rules/radix)|require use of the second argument for `parseInt()`|
|:x:|[vars-on-top](http://eslint.org/docs/rules/vars-on-top)|require declaration of all vars at the top of their containing scope|
|:x:|[wrap-iife](http://eslint.org/docs/rules/wrap-iife)|require immediate function invocation to be wrapped in parentheses|
|:x:|[yoda](http://eslint.org/docs/rules/yoda)|require or disallow Yoda conditions|
|:x:|[init-declarations](http://eslint.org/docs/rules/init-declarations)|enforce or disallow variable initializations at definition|
|:x:|[no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow)|disallow the catch clause parameter name being the same as a variable in the outer scope|
|:x:|[no-delete-var](http://eslint.org/docs/rules/no-delete-var)|disallow deletion of variables (recommended)|
|:x:|[no-label-var](http://eslint.org/docs/rules/no-label-var)|disallow labels that share a name with a variable|
|:x:|[no-shadow](http://eslint.org/docs/rules/no-shadow)|disallow declaration of variables already declared in the outer scope|
|:x:|[no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names)|disallow shadowing of names such as `arguments`|
|:x:|[no-undef](http://eslint.org/docs/rules/no-undef)|disallow use of undeclared variables unless mentioned in a `/*global */` block (recommended)|
|:x:|[no-undef-init](http://eslint.org/docs/rules/no-undef-init)|disallow use of undefined when initializing variables|
|:x:|[no-undefined](http://eslint.org/docs/rules/no-undefined)|disallow use of `undefined` variable|
|:x:|[no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)|disallow unused variables (recommended).|
|:x:|[no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)|disallow use of variables before they are defined|
|:x:|[callback-return](http://eslint.org/docs/rules/callback-return)|enforce `return` after a callback|
|:x:|[global-require](http://eslint.org/docs/rules/global-require)|enforce `require()` on top-level module scope|
|:x:|[handle-callback-err](http://eslint.org/docs/rules/handle-callback-err)|enforce error handling in callbacks|
|:x:|[no-mixed-requires](http://eslint.org/docs/rules/no-mixed-requires)|disallow mixing regular variable and require declarations|
|:x:|[no-new-require](http://eslint.org/docs/rules/no-new-require)|disallow use of `new` operator with the `require` function|
|:x:|[no-path-concat](http://eslint.org/docs/rules/no-path-concat)|disallow string concatenation with `__dirname` and `__filename`|
|:x:|[no-process-env](http://eslint.org/docs/rules/no-process-env)|disallow use of `process.env`|
|:x:|[no-process-exit](http://eslint.org/docs/rules/no-process-exit)|disallow `process.exit()`|
|:x:|[no-restricted-modules](http://eslint.org/docs/rules/no-restricted-modules)|restrict Usage of specified node modules|
|:x:|[no-sync](http://eslint.org/docs/rules/no-sync)|disallow use of synchronous methods|
|:x:|[array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing)|enforce consistent spacing inside array brackets|
|:x:|[block-spacing](http://eslint.org/docs/rules/block-spacing)|disallow or enforce spaces inside of single line blocks|
|:x:|[brace-style](http://eslint.org/docs/rules/brace-style)|enforce one true brace style|
|:x:|[camelcase](http://eslint.org/docs/rules/camelcase)|require camel case names|
|:x:|[comma-spacing](http://eslint.org/docs/rules/comma-spacing)|enforce spacing before and after comma|
|:x:|[comma-style](http://eslint.org/docs/rules/comma-style)|enforce one true comma style|
|:x:|[computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing)|require or disallow padding inside computed properties|
|:x:|[consistent-this](http://eslint.org/docs/rules/consistent-this)|enforce consistent naming when capturing the current execution context|
|:x:|[eol-last](http://eslint.org/docs/rules/eol-last)|enforce newline at the end of file, with no multiple empty lines|
|:x:|[func-call-spacing](http://eslint.org/docs/rules/func-call-spacing)|require or disallow spacing between function identifiers and their invocations|
|:x:|[func-names](http://eslint.org/docs/rules/func-names)|require function expressions to have a name|
|:x:|[func-style](http://eslint.org/docs/rules/func-style)|enforce use of function declarations or expressions|
|:x:|[id-blacklist](http://eslint.org/docs/rules/id-blacklist)|disallow certain identifiers to prevent them being used|
|:x:|[id-length](http://eslint.org/docs/rules/id-length)|this option enforces minimum and maximum identifier lengths (variable names, property names etc.)|
|:x:|[id-match](http://eslint.org/docs/rules/id-match)|require identifiers to match the provided regular expression|
|:white_check_mark:|[indent](http://eslint.org/docs/rules/indent)|enforce consistent indentation|
|:x:|[jsx-quotes](http://eslint.org/docs/rules/jsx-quotes)|specify whether double or single quotes should be used in JSX attributes|
|:x:|[key-spacing](http://eslint.org/docs/rules/key-spacing)|enforce spacing between keys and values in object literal properties|
|:x:|[keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)|enforce spacing before and after keywords|
|:x:|[linebreak-style](http://eslint.org/docs/rules/linebreak-style)|disallow mixed 'LF' and 'CRLF' as linebreaks|
|:x:|[lines-around-comment](http://eslint.org/docs/rules/lines-around-comment)|enforce empty lines around comments|
|:x:|[max-depth](http://eslint.org/docs/rules/max-depth)|specify the maximum depth that blocks can be nested|
|:x:|[max-len](http://eslint.org/docs/rules/max-len)|enforce a maximum line length|
|:x:|[max-lines](http://eslint.org/docs/rules/max-lines)|enforce a maximum number of lines per file|
|:x:|[max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks)|specify the maximum depth callbacks can be nested|
|:x:|[max-params](http://eslint.org/docs/rules/max-params)|specify the number of parameters that can be used in the function declaration|
|:x:|[max-statements](http://eslint.org/docs/rulesmax-statements)|specify the maximum number of statement allowed in a function|
|:x:|[max-statements-per-line](http://eslint.org/docs/max-statements-per-line)|specify the maximum number of statements allowed per line|
|:x:|[new-cap](http://eslint.org/docs/rules/new-cap)|require a capital letter for constructors|
|:x:|[new-parens](http://eslint.org/docs/rules/new-parens)|disallow the omission of parentheses when invoking a constructor with no arguments|
|:x:|[newline-after-var](http://eslint.org/docs/rules/newline-after-var)|require or disallow an empty newline after variable declarations|
|:x:|[newline-before-return](http://eslint.org/docs/rules/newline-before-return)|require newline before return statement|
|:x:|[newline-per-chained-call](http://eslint.org/docs/rules/newline-per-chained-call)|enforce newline after each call when chaining the calls|
|:x:|[no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)|disallow use of the `Array` constructor|
|:x:|[no-bitwise](http://eslint.org/docs/rules/no-bitwise)|disallows bitwise operators|
|:x:|[no-continue](http://eslint.org/docs/rules/no-continue)|disallow use of the `continue` statement|
|:x:|[no-inline-comments](http://eslint.org/docs/rules/no-inline-comments)|disallow comments inline after code|
|:x:|[no-lonely-if](http://eslint.org/docs/rules/no-lonely-if)|disallow `if` as the only statement in an `else` block|
|:x:|[no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|disallow mixed spaces and tabs for indentation (recommended)|
|:x:|[no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)|disallow multiple empty lines|
|:x:|[no-negated-condition](http://eslint.org/docs/rules/no-negated-condition)|disallow negated conditions|
|:x:|[no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary)|disallow nested ternary expressions|
|:x:|[no-new-object](http://eslint.org/docs/rules/no-new-object)|disallow the use of the `Object` constructor|
|:x:|[no-restricted-syntax](http://eslint.org/docs/rules/no-restricted-syntax)|disallow use of certain syntax in code|
|:x:|[no-spaced-func](http://eslint.org/docs/rules/no-spaced-func)|disallow space between function identifier and application|
|:x:|[no-ternary](http://eslint.org/docs/rules/no-ternary)|disallow the use of ternary operators|
|:x:|[no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces)|disallow trailing whitespace at the end of lines|
|:x:|[no-underscore-dangle](http://eslint.org/docs/rules/no-underscore-dangle)|disallow dangling underscores in identifiers|
|:x:|[no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary)|disallow the use of ternary operators when a simpler alternative exists|
|:x:|[no-whitespace-before-property](http://eslint.org/docs/rules/no-whitespace-before-property)|disallow whitespace before properties|
|:x:|[object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)|require or disallow padding inside curly braces|
|:x:|[one-var](http://eslint.org/docs/rules/one-var)|require or disallow one variable declaration per function|
|:x:|[one-var-declaration-per-line](http://eslint.org/docs/rules/one-var-declaration-per-line)|require or disallow a newline around variable declarations|
|:x:|[operator-assignment](http://eslint.org/docs/rules/operator-assignment)|require assignment operator shorthand where possible or prohibit it entirely|
|:x:|[operator-linebreak](http://eslint.org/docs/rules/operator-linebreak)|enforce operators to be placed before or after line breaks|
|:x:|[padded-blocks](http://eslint.org/docs/rules/padded-blocks)|enforce padding within blocks|
|:x:|[quote-props](http://eslint.org/docs/rules/quote-props)|require quotes around object literal property names|
|:x:|[quotes](http://eslint.org/docs/rules/quotes)|specify whether backticks, double or single quotes should be used|
|:x:|[require-jsdoc](http://eslint.org/docs/rules/require-jsdoc)|Require JSDoc comment|
|:x:|[semi](http://eslint.org/docs/rules/semi)|require or disallow use of semicolons instead of ASI|
|:x:|[semi-spacing](http://eslint.org/docs/rules/semi-spacing)|enforce spacing before and after semicolons|
|:x:|[sort-imports](http://eslint.org/docs/rules/sort-imports)|enforce sorting import declarations within module|
|:x:|[sort-vars](http://eslint.org/docs/rules/sort-vars)|sort variables within the same declaration block|
|:x:|[space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)|require or disallow a space before blocks|
|:x:|[space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)|require or disallow a space before function opening parenthesis|
|:x:|[space-in-parens](http://eslint.org/docs/rules/space-in-parens)|require or disallow spaces inside parentheses|
|:x:|[space-infix-ops](http://eslint.org/docs/rules/space-infix-ops)|require spaces around operators|
|:x:|[space-unary-ops](http://eslint.org/docs/rules/space-unary-ops)|require or disallow spaces before/after unary operators|
|:x:|[spaced-comment](http://eslint.org/docs/rules/spaced-comment)|require or disallow a space immediately following the `//` or `/*` in a comment|
|:x:|[wrap-regex](http://eslint.org/docs/rules/wrap-regex)|require regex literals to be wrapped in parentheses|
|:x:|[no-tabs](https://eslint.org/docs/rules/no-tabs)|disallow all tabs|
|:x:|[arrow-body-style](http://eslint.org/docs/rules/arrow-body-style)|require braces in arrow function body|
|:x:|[arrow-parens](http://eslint.org/docs/rules/arrow-parens)|require parens in arrow function arguments|
|:x:|[arrow-spacing](http://eslint.org/docs/rules/arrow-spacing)|require space before/after arrow function's arrow|
|:x:|[constructor-super](http://eslint.org/docs/rules/constructor-super)|verify calls of `super()` in constructors|
|:x:|[generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing)|enforce spacing around the `*` in generator functions|
|:x:|[no-class-assign](http://eslint.org/docs/rules/no-class-assign)|disallow modifying variables of class declarations|
|:x:|[no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow)|disallow arrow functions where they could be confused with comparisons|
|:x:|[no-const-assign](http://eslint.org/docs/rules/no-const-assign)|disallow modifying variables that are declared using `const`|
|:x:|[no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members)|disallow duplicate name in class members|
|:x:|[no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports)|disallow duplicate module imports|
|:x:|[no-new-symbol](http://eslint.org/docs/rules/no-new-symbol)|disallow use of the `new` operator with the `Symbol` object|
|:x:|[no-restricted-imports](http://eslint.org/docs/rules/no-restricted-imports)|restrict usage of specified modules when loaded by `import` declaration|
|:x:|[no-this-before-super](http://eslint.org/docs/rules/no-this-before-super)|disallow use of `this`/`super` before calling `super()` in constructors.|
|:x:|[no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor)|disallow unnecessary constructor|
|:x:|[no-var](http://eslint.org/docs/rules/no-var)|require `let` or `const` instead of `var`|
|:x:|[object-shorthand](http://eslint.org/docs/rules/object-shorthand)|require method and property shorthand syntax for object literals|
|:x:|[prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback)|require arrow functions as callbacks|
|:x:|[prefer-const](http://eslint.org/docs/rules/prefer-const)|suggest using `const` declaration for variables that are never modified after declared|
|:x:|[prefer-destructuring](http://eslint.org/docs/rules/prefer-destructuring)|require using destructuring when assigning to variables from arrays and objects|
|:x:|[prefer-reflect](http://eslint.org/docs/rules/prefer-reflect)|suggest using Reflect methods where applicable|
|:x:|[prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params)|suggest using the rest parameters instead of `arguments`|
|:x:|[prefer-spread](http://eslint.org/docs/rules/prefer-spread)|suggest using the spread operator instead of `.apply()`.|
|:x:|[prefer-template](http://eslint.org/docs/rules/prefer-template)|suggest using template literals instead of strings concatenation|
|:x:|[require-yield](http://eslint.org/docs/rules/require-yield)|disallow generator functions that do not have `yield`|
|:x:|[template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing)|enforce spacing around embedded expressions of template strings|
|:x:|[yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing)|enforce spacing around the `*` in `yield*` expressions|


## Credits

- [oncogene](https://github.com/gwer/oncogene)
- [Stylelint Config Generator](https://maximgatilin.github.io/stylelint-config)
- Rules Table from [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) 
