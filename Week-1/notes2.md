# Git Refresher

- Git vs GitHub.
- Importance of having a good mental model of how Git works.
- Good commmit practices:
  - Messages:
    - Messages should be short and to the point. 
    - Use present tense.
    - Complete the phrase: "When applied, these changes will..."
  - Commit frequency:
    - "Commit small victories" e.g. successful implementation of functionality, refactors, thematically appropriate.
    - Commit often in order to keep an accurate log of your development process. A git log should tell a story.
  - Limit the footprint of your commits. If you modify three unrelated files, make three different commits.
  - Never commit code that doesn't work / passes tests / fails linting.

You should aim to be familiar with the following git commands:
- init
- clone
- add
- commit
- pull
- push
- log
- status

# Coding Best Practices

## Naming Consistency

- Short but descriptive names. If unsure, err on the side of clarity.
- Nouns for variables, verbs for functions.
- Avoid repetition of names.
- camelCasing
- Opposite words for pairs
- Short names for simple values like numbers, characters or array elements in loops.
- Avoid overlapping with parts of JavaScript.

### Example 1

``` javascript
var array = ['apple', 'pear', 'peach', 'banana'];
function word_lengths (arr) {
  var get_word_lengths = [];
  for (var counter = 0; counter < arr.length; counter++) {
    getWordLengths.push(arr[counter].length);
  }
  return get_word_lengths;
}
var array2 = word_length(array);
```

### Example 1

``` javascript
function Shop (a, b, c, d) {
  return {
    openingTime: a,
    shutsAt: b,
    shopName: c,
    city: 'Manchester',
    country: 'UK',
    shopSells: d
  };
}
var shoeShop = Shop('9am', '7pm', 'shoes', 'Yay Shoes!');
```

## File names

Good:
  - main-menu.js
  - router.spec.js
  - jquery.min.js
  - jquery-1.4.2.min.js
  - .config.js

Not so good?
  - mainNavBar.js (but used often)
  - main nav bar.js
  - main_nav_bar.js

## Linting

- Linting is the process of analising code for potential errors. 
- A linter is a program that performs linting. 
- It's important to note that a linter doesn't execute code, it just analises how it's typed.

### ESLint

- Pluggable linter for JavaScript
- Easy to configure, works well with our set of tools, very flexible.
- Easy to share configuration so that everyone codes under the same standards.
- We can configure it globally and on a project-by-project basis.

```
// Install eslint globally
$ npm install -g eslint

// Move into the root directory of your computer
$ cd ~

// Create the config file and open it with VSCode
$ touch .eslintrc.json && code .eslintrc.json
```

### `~/.eslintrc.json`

``` json
{
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true
    },
    "rules": {
        "semi": 2,
        "no-unreachable": "warn",
        "no-unused-vars": "warn"
    }
}
```

## Linting and precommit scripts

- Explain lint script that runs eslint with a .eslint config file if it finds one locally (or our global one)

- Explain the other useful scripts from npm [NPM Scripts](https://docs.npmjs.com/misc/scripts)

- Explain `husky` package that also allows us to have a `precommit` script and other git hooks


## Writing readable and maintainable code

- DRY: Don't Repeat Yourself
- Consistent and descriptive naming.
- Project structure.
- Defining variables at the top of file/function.
- Configuration files.
- Refactoring.
- Functions should be small and do one thing well (helper functions).
- Low-level and high-level functions.
- Remove unnecessary comments. Readable code doesn't require comments.
- Declarative over imperative programming.
- Use shorthands only when they improve readability a.k.a. don't try to be too clever.

### Example: Declarative over imperative programming

``` javascript
var arr = [2, 109, 55, 70, 200, 412];

// Imperative
var nums = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 100) nums.push(arr[i]);
}

// Declarative
var nums = arr.filter(function (num) {
  return num > 100;
});
```

### Example: helper functions

Let's say we have to parse some date strings from stupid American format "11-23-2016" to a more reasonable "23rd Nov 2016".

It wouldn't be too hard to make a function that does all the transformations for us.

But a readable, maintainable and testable approach would be to make several small functions that just do one thing and group them all into one high-level, "orchestrator" function.

``` javascript

function getMonthName (month) {
  month = Number(month) - 1;
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNames[month];
}

function getDayStr (day) {
  day = Number(day);
  switch (day) {
    case 1:
    case 21:
    case 31:
      return day + "st";
    case 2:
    case 22:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}

function convertDateFormat (date) {
  date = date.split('-');
  var month = getMonthName(date[0]);
  var day = getDayStr(date[1]);
  var year = date[2];
  return [day, month, year].join(' ');
}

```

### Shorthand and Language "quirks"

- Useful for writing terse code, sometimes very readable.
- Trying to be too clever can have the opposite effect, making code hard to follow.
- Familiarise yourself with some coercion rules.
- Use of logical operators.

``` javascript
// we can refactor this:
var studentList;
if (data === null || data === undefined || data === false) {
  studentList = data;
} else {
  studentList = [];
}

// into this:
var studentList;
if (!data) {
  studentList = data;
} else {
  studentList = [];
}

// and even further:
var studentList = data || [];
```

- That last line is a good example of idiomatic JavaScript. It's not a rule, but it's commonly accepted as a good practice in the JavaScript community.
- Best practices are very loosely defined, generally opinionated and change over time.
- Companies and development teams generally have their own best practices and style guides.
- It's up to developers to keep up to day with the evolution of their language.

## Testing best practices

- Make it easy for yourself
  - Invest time learning to use your tools
  - Develop automated process
  - "Developer experience" it's an important factor to improve code quality
- Pure functions are easier to test.
  - They don't depend on any external variables.
  - They return the same result for the same inputs consistently.
- Watch tasks and commit hooks.

## Resources:

- [ESLint.org](http://eslint.org/)
- [JavaScript The Right Way](http://jstherightway.org/#js-code-style)
- ["JavaScript - The Good Parts" by Douglas Crockford](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf) (PDF)
- [Mozilla's Coding style guide](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Coding_Style)
- [Clean JavaScript Code](https://github.com/ryanmcdermott/clean-code-javascript)