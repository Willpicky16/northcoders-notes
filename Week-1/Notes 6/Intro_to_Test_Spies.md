# Intro to Test Spies

- A test spy is a function that records arguments, return value and other parameters for all its calls.
- A test spy can be an anonymous function or it can wrap an existing function.

## When to use spies?

- Spies are particularly useful to test callback functions, i.e. functions we pass to other functions and therefor lose control/visibility of how they are called.
- Let's use the implementation of `_.each()` as an example:
  - We want to know that the iteratee function we pass to it gets called for each element of the passed array.
  - We also want to know what arguments are passed to each call of the iteratee function.
- We can easily implement our own test spy by creating a global variable and modifying it from inside a function that we pass as the iteratee:

```javascript
var callCount = 0;
var spy = function () {
  callCount++;
}
_.each([1, 2, 3], spy);
console.log(callCount); // 3
```

- We use the same technique to keep a record of the arguments passed to each call of the iteratee:

```javascript
var allArgs = [];
var spy = function () {
  // arguments is an array-like object, not a real array
  // so we loop over it and push its values to an array first
  var callArgs = [];

  for (var i = 0; i < arguments.length; i++) {
    callArgs.push(arguments[i]);
  }

  allArgs.push(callArgs);
}

_.each([1, 2, 3], spy);
console.log(allArgs[0]) // [1, 0, [1, 2, 3]]
console.log(allArgs[1]) // [2, 1, [1, 2, 3]]
console.log(allArgs[2]) // [3, 2, [1, 2, 3]]
```

## Implementing our own test spy library

- Knowing about scope & closure we can attempt to implement our test spy factory function.
- We want:
  - A function that returns a new test spy (a function).
  - A spy should keep track of its call count and the arguments passed to each count. We can use closure for this!
  - We need a way of accessing these record keeping variables, which we can do by adding methods to the returned spy (remember that functions are objects, so we can add properties and methods to them).

```javascript
function createSpy () {
  var callCount = 0;
  var allArgs = [];

  var spy = function () {
    callCount++;
    var callArgs = [];
    for (var i = 0; i < arguments.length; i++) {
      callArgs.push(arguments[i]);
    }
    allArgs.push(callArgs);
  }

  spy.callCount = function () {
    return callCount;
  }

  spy.wasCalled = function () {
    return callCount > 0;
  }

  spy.calledWith = function (i) {
    if (typeof i !== 'number') {
      return allArgs;
    }
    return allArgs[i];
  }
  
  return spy;
}

var spy = createSpy();
console.log(spy.wasCalled()); // false
_.each([4, 5, 6], spy);
console.log(spy.wasCalled()); // true
console.log(spy.callCount());  // 3
console.log(spy.calledWith(0));   // [4, 0, [4, 5, 6]]
console.log(spy.calledWith(1));   // [5, 1, [4, 5, 6]]
console.log(spy.calledWith(2));   // [6, 2, [4, 5, 6]]
```

## Using Sinon.js spies

- Now we are ready to understand what the Sinon library does under the hood.
- Sinon provides us with a test spy constructor and a well documented [API for spies](http://sinonjs.org/docs/#spies)

```javascript
var spy = require('sinon');
var spy = sinon.spy();
console.log(spy.called); // false
_.each([7, 8, 9], spy);
console.log(spy.called); // true
console.log(spy.callCount); // 3
console.log(spy.firstCall.args);  // [7, 0, [7, 8, 9]]
console.log(spy.secondCall.args); // [8, 1, [7, 8, 9]]
console.log(spy.thirdCall.args);  // [9, 2, [7, 8, 9]]
```