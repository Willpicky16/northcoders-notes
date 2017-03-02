# Functions
Example 1
``` JavaScript
function(value, inc){
  inc = inc || 1;
  // Shortcut for: if(!inc) {inc = 1;}
  return value + inc;
}

console.log(increment(3);
```
Example 2
``` JavaScript
function(value, inc = 1){ // New JavaScript
  return value + inc;
}

console.log(increment(3);
```

``` JavaScript
function logArguments () {
  function reallyLogArguments () {
    for(var i = 0; i < arguments.length; i++){
      console.log(arguments[i]);
    }
  }
  reallyLogArguments.apply(null, arguments); // The use of Apply
}
logArguments(1, 2, 3, 4, 5);
```

Function examples
- function.prototype.call
- function.prototype.apply

## Closure Example

``` JavaScript
function createIncrementer(inc){
  return function (value){
    return value + inc;
  }
}

var add2 = createIncrementer(2);
var add7 = createIncrementer(7);

console.log(add2(4)); // Result: 6
console.log(add2(10)); // Result: 12
console.log(add2(21)); // Result: 23
console.log(add7(21)); // Result: 28
```

# Sprint - Higher Order Fun

Examples for Sprint
``` JavaScript
var identity = function(x) {
  return x;
}

var identityf = function(x) {
  return function(){
    return x;
  }
}

var add = function(a, b){
  return a + b;
}

var addf = function(a){
  return function(b){
    return a + b;
  }
}

var liftf = function(bin){
  return function(a){
    return function(b){
      return bin(a, b);
    }
  }
}
```
