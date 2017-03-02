## 08/02/2017 Lecture 2 - Functional Programming (Reduce)

Reduce
- Reduce is the multi-tool of array manipulation
- Allows to transform an array into anything

Example 1 - Getting used to Reduce

``` JavaScript
var arr = [1,2,3,4,5];

var reduced = arr.reduce(function(acc, num){
  return acc + num;
}, 0); // The zero is starting value so 'acc'

console.log(reduce); // Prints out 25 for First

var reduced = arr.reduce(function(acc, num){
  if(!num % 3){
    return acc + num;
  } else {
    return acc;
  }
}, 0); // This is optional

console.log(reduce); // Prints out 13 for Second

var arr = [1,3,5,7,9];

var reduced = arr.reduce(function(acc, num){
  acc.push(num + 2);
  return acc;
}, 0);

console.log(reduce); // Prints out [2,6,10,14,18];

var reduced = arr.reduce(function(acc, num){
  if(num % 3){ // Divide by 3
    acc.push(num + 2);
  }
  return acc;
}, 0);

console.log(reduce); // Prints out [2,10,14];

```

Example 2 - Reduce example when number is less than 100

``` JavaScript
var arr = [100,50,40,103,504,21];

var reduced = arr.reduce(function(acc, num){
  if(num < 100){
    return acc + num;
  } else {
    return acc;
  }
}, 0);

console.log(reduced); // prints
```

Example 3 - Reduce example when name is more than 5

``` JavaScript
var arr = ['Will', 'Jonny', 'Ho'];

var reduced = arr.reduce(function(acc, name){
  if(name.length > 5){
    acc.push(name);
  }
  return arr;
});

console.log(reduced); // Prints
```
Example

``` JavaScript
var arr = [6,6,2,4,10,10];

var reduced = arr.reduce(function(acc, score){
  if(!acc.hasOwnProperty(score)){
    acc[score] = 1;
  } else {
    acc[score]++;
  }
  return acc;
}, {});

console.log(reduced);
```


This doesn't work for some reason

``` JavaScript
var arr = [1, 50, 33, 12, 37];

var reduced = arr.reduce(function(allAreEven, num){
  if(num % 2){
    allAreEven = false;
  }
  return allAreEven;
}, true);

console.log(reduced);
```
