# Pure Functions

A pure function is a function with no side effects. It doesn't alter / depend anything outside of its execution context.

Always returns the same result given the same parameters.

Why use pure functions?
- Predictability
- Testability
- Reusability
- Self-documentation
- Concurrency
- Asynchronicity

concat & slice is much better than push & splice for mutating arrays.

Example 1 - Not Pure Function
``` JavaScript
var arr = [1, 2, 3, 4, 5];

function safePush (arr, elem) {
  arr = arr.push(elem);
  return arr;
}
console.log(safePush(arr, 'Hello')); // Returns 6 not the array (The 6 is the new length of the array)
```
Example 2 - More pure way to write function
``` JavaScript
var arr = [1, 2, 3, 4, 5];

function safePush (arr, elem) {
  return arr.concat(elem);
}

console.log(safePush(arr, 'Hello')); // Returns [1, 2, 3, 4, 5, 'hello']
```

Mutating objects with object.assign()
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

``` JavaScript
var person = {
  name 'Will'
};

function addProperties (obj, props) {
  Object.assign({}, person, props);
}

console.log(addProperties(person, {age: 27}));
```

Can we always use Pure Functions?

No
- Network requests
- User input / requirements
- Input/Output
- DOM access


# Sprint - Lowbar 2 Advanced

Reimplimenting underscore.js

https://github.com/northcoders/w02-advanced-lowbar

<!-- Example Once (underscore.js/#once)

``` JavaScript

``` -->
