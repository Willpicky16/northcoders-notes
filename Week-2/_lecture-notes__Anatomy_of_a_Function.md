## Arguments vs. Parameters

- Parameters are variables defined in the scope of a function.
- Arguments are values passed to a function when called.

## The `arguments` object

- When a function is called, an object named `arguments` is created in its scope.
- `arguments` is an array-like object. It looks like an array but it doesn't have all the methods arrays have. We can only access its elements.
- Functions can take any number of arguments:

``` javascript
// a simple addition function
function add (a, b) {
  console.log(arguments);
  return a + b;
}

var result = add(2, 3, 4); // 5
// [2, 3, 4]
```
Even though we haven't defined a 3rd parameter, it is available in the scope of the function under the `arguments` object.

A more useful add function would be able to add as many arguments as we pass it:

``` javascript
function add () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
var result = add(1, 2, 3, 4); // 10
```

### Common pattern: optional arguments

We can check for the existence of optional arguments and assign them a default value if they are not passed.

``` javascript
function increment (num, amount) {
  amount = amount || 1;
  // shorthand for: if (!amount) { amount = 1; }
  return num + amount;
}
```

## Pass-by-value vs. Pass-by-reference

- Two different ways of managing data in memory.
- Pass-by-value applies to primitive types (strings, numbers, booleans, undefined).
- Pass-by-reference applies to objects, and by extension arrays and functions.

### Pass-by-value
``` javascript
var a = 3;  
// the variable a points to the value 3 (number)
var b = a;  
// the variable b points to whatever a points to
// because a points to a primitive value, b now points to the same value (the number 3)

a = 4;
// By assigning a to 4 we are not changing the value of 3
// we are just making a point to a different value.
console.log(b); // 3
// as we can see, b still points to  3
```

### Pass-by-reference
``` javascript
var a = [1, 2, 3];
// the variable a points to an array with 1, 2 and 3.
var b = a;
// b now points to THE SAME array that a points to
var c = [1, 2, 3];
// c points to a different array that happens to have the same elements as a (and b)
a === b;  // true
a === c;  // false
b === c;  // false

a.push(4);
console.log(b);  // [1, 2, 3, 4]
a === b;  // still true!
// because a and b are a reference to the same object...
// if we modify a, we modify b
// We call this mutation

console.log(c);  // [1, 2, 3]
// still a different object!
```

- This behaviour of JavaScript is fundamental to understanding the language and writing good code.
- Value/reference affects the way we should handle arguments passed to a function.
- In order to keep our functions pure we should avoid mutating arguments because those changes will be observable outside the function.

### Example: avoiding mutation of arguments

``` javascript
var nums = [1, 2, 3];
function doubleArray (nums) {
  for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
  }
  return nums;
}
var result = doubleArray(nums);
console.log(result);  // [2, 4, 6]
console.log(nums);    // [2, 4, 6] :O
console.log(nums === result);  // true
// even though we call it result, it still references the same object
```

- This is bad code because it's mutating its argument. Our function doesn't know or care what else depends on the object that was passed to it.
- A pure, non-mutating way of doing this would be to create a new array with the calculated values:

``` javascript
var nums = [1, 2, 3];
function doubleArray (nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    result.push(nums[i] * 2);
  }
  return result;
}
var result = doubleArray(nums);
console.log(result);  // [2, 4, 6]
console.log(nums);    // [1, 2, 3] :)
console.log(nums === result);  // false
// we explicitly created a new object, so this is almost obvious
// we just wrote code that is easy to reason about!
```

- In this case we explicitly created a new array and pushed values into it, so it's very apparent that we are not mutating nums.
- We just wrote code that is easy to reason about!
- A more functional programming approach to this would be:

``` javascript
var nums = [1, 2, 3];
function double (n) { return n * 2; }
var doubles = nums.map(double);
console.log(doubles);  // [2, 4, 6]
console.log(nums);    // [1, 2, 3] :)
console.log(nums === result);  // false
```

- Instead of writing a function that creates a new array and pushes values into it, we just create a function that takes in a primitive value and returns another one (there's no way we can mutate primitive values). 
- Then we use a tool provided by the language that is designed to do exactly what we wanted: transform all the elements of an array without mutating it.

## Function methods

- The same way all arrays have methods, all functions have specific methods too.
- This methods are available under `Function.prototype` (see [MDN documentation]()).

### `Function.prototype.call()`

- The `call` method allows us to invoke a function with the passed arguments:

``` javascript
function double (n) { return n * 2; }

var result = double.call(null, 3);
console.log(result); // 6
```

- The first argument changes the value of the `this` variable inside the function. We will cover this later on the course. Since we are not using the `this` variable inside our function, it doesn't really matter what we assign it to. We use `null` to signify nothing-ness.
- The following arguments passed to `call` will get passed to the function in the same order.

``` javascript
var result = add.call(null, 1, 2, 3, 4);
// this is completely equivalent to:
var result = add(1, 2, 3, 4);
// either way the result will be:
console.log(result);  // 10
```

### `Function.prototype.apply`

- Apply does exactly the same as `call` but instead of receiving all the arguments one by one, it expects an array with all of them.

``` javascript
var result = add.apply(null, [1, 2, 3, 4]);
// this is completely equivalent to:
var result = add(1, 2, 3, 4);
// either way the result will be:
console.log(result);  // 10
```

- Having an array of values that we want to pass one by one to a function is a very common situation. Can you think of one?
