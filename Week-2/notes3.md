# 14/02/2017 Morning Lecture - Recursion

Recursion Example 1 (Number)

``` JavaScript
function sumNumbers (num) {
  // Base Case
  if (num === 1) return 1;

  // Break Down Problem
  return num + sumNumbers(num - 1);

}

console.log(sumNumbers(5));
```

Recursion Example 2 (Number)

``` JavaScript
function exponent (num, exp) {

  // Base Case
  if (exp === 0) return 1;

  // Recursive Case
  return exponent(num, exp - 1);

  // var counter = 1;
  // for(var i = 1; i < exp; i++) {
  //   counter = counter * num;
  // }
  // return counter;
}

console.log(exponent(4, 3)); // 4 * 4 * 4 = 64
```

Recursion Example 3 (String)

``` JavaScript
function countCars (str) {

  // Base Case
    // if(str === '') return 0;
  if(!str.length) return 0;

  // Recursive Case
  return 1 + countCars(str.slice(1));

  // var counter = 0;
  // counter++;
  // return counter + countCars(str.slice(1));
}

console.log(countCars('hello world')); // Returns '';
```

Recursion Example 4 (Reversing a string)

``` JavaScript
function reverse (str) {

  // Base Case
  if(str.length < 2) return str;

  // Recursive Case
  return str.slice(-1) + reverse(str.slice(0, -1));

}

console.log(reverse('hello')); // Returns olleh
```
