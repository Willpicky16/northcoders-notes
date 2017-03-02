# Const, Let and Block Scoping

### What is ES6?

ES6 (EcmaScript 6, or also ES2015) is an updated version of JavaScript that builds extra functionality into the JS language. The previous release of JavaScript, ES5, came out in 2009 and included new language features such as forEach, map, reduce, and support for JSON which we now take completely for granted.

So much has changed since then, especially with the explosion of Node on the serverside which has given JavaScript many more uses than previously envisaged. By 2015 it was well overdue for an update and TC39, the committee responsible for writing ECMAScript specifications, released an updated version of JS.

It was unofficially called ES6 because it's the 6th major version, but officially it's called ES2015 which reflects the plan for new revisions of the langauage to be released yearly.

ES2015 was a huge update. We can continue to write the JS we are used to, nothing breaks, but learning all the new features that came available with this version is a large task. We also have ES2016 which added a few additional updates such as `Array.prototype.includes` but in general most people are talking about ES2015/ES6.

### Can I use it everywhere?

- For older browsers and for certain features you need to **transpile**

- Make sure your Node is up to date (7.5.0 currently the latest version)

- There are still a few features even Node doesn't understand

- Check compatibility tables


### Let and Const

- New ways of declaring variables

```javascript
const expect = require('chai').expect;
const NUM = 55;
const NAME = 'Harriet';

for (let i = 0; i < arr.length; i++) {
    console.log(i);
}
```

- `const` for constants
- `let` for things that change 
- for best practice, don't mix with `var`

##### Failing to assign a value to a const at point of declaration produces a syntax error
```javascript
const foo; // Syntax Error 

foo = 'foo';
```

##### You can declare a let and assign it later

```javascript
let name;

name = 'Harriet';
```

##### You cannot reassign the value of a const
```javascript
const foo = 'cat';

foo = 'dog'; // TypeError - assignment to a constant variable
```

##### NB Objects and Arrays can be modified but not reassigned
```javascript
const person = {};
obj[name] = 'James';
person = {}; // TypeError

const arr = [];
arr.push(8);
arr = 'foo'; // TypeError
```

### Let, const and block Scoping

In ES5 only functions create new execution contexts. We say that variables are **function-scoped**. For loops and other uses of {} do not create scope.

```javascript
function foo () {
    var a = 'cat';
}

console.log(a); // undefined


var b = 'foo';

if (true) {
    var b = 'bar';
}

console.log(b); // bar

```

In ES6, let and const are **block-scoped** meaning that the scope of a let or a const is restricted to any kind of block, such as an if block, a loop, function or plain block.


```javascript
function foo () {
    let bar = 'bar';
}

console.log(bar) // Reference Error

```


```javascript
for (let i = 0; i < arr.length; i++) {
    // do something
}

console.log(i) // Reference Error

```

```javascript
{
    let a = 'foo';
}

console.log(a); // Reference Error
```

##### We can have multiple const and let declarations if they are in separate blocks

```javascript
{
    const foo = 5;
}

const foo = 12;
console.log(foo); // 12 
```

##### Re-entering a block (e.g. in a loop) creates a new execution context for const and let

```javascript
for (let key in obj) {
    const value = obj[key];
    console.log(value) // this is fine, no error
}
```

### Let, const and hoisting

Let and const behave almost as though they are not hoisted. This is a slight simplification - see [this article](http://www.2ality.com/2015/02/es6-scoping.html) for a more detailed explanation.

```javascript
{
    console.log(foo); // Reference Error NOT undefined

    let foo = 12;
}
```

### ES6 on Wakelet

[ES6 articles and learning resources](https://wakelet.com/wake/b30db2ec-eb59-4b4a-8b2e-b684a717ac25)