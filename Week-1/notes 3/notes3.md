## 08/02/2017 - Functional Programming

Functional Programming
- highly used with maths

Object Oriented
- Programmers define not only the data type of a data structure, but also the types of operations (functions) that can be applied to the data structure.

Example 1
``` JavaScript
function capitalise (str){
  return str[0].isUpperCase() + str.slice(1).toLowerCase();
}

function reverse (str){
  return str.split('').reverse().join('');
}

console.log(capitalise(Will));
console.log(reverse(Will));
console.log(capitalise(reverse(Will)));

```

Example 2 - Global Scope and local function Scope
``` JavaScript
var a = 'food'; // Set globally

function logA(){
  var a = 'bar'; // Set a only to this function
  console.log(a);
}

logA();
console(a);
```

Example 3

``` JavaScript
function blend (ingredients, liquid){
  var ingredients = arguments[0]; // What will happen in function
  var liquid = arguments[1]; // What will happen in function
  return 'sdasdsdsad'
}

blend(['banana', 'walnuts'], 'milk');
```

Example 4 - checking what happens with the console when function inside a function

``` JavaScript
function doStuff(a, b){
  function doMoreStuff(a, b){
    console.log(a);
  }
  console.log(a);
  doMoreStuff(a + 1);
}

doStuff(2, 3);
```

Example 5

``` JavaScript
function doStuff(a, b){
  console.log(arguments);
}

doStuff(2, 3);
```

Example 6

``` JavaScript
function sum(){
  var sum = 0;
  for(var i = 0, i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(1,2,3,4,5,6));
```

Example 7 - Object.assign

``` JavaScript
var a = {name, 'will'}

var b = Object.assign({}, a, {age: 27});
```

Example 8 - The use of map

``` JavaScript
var cats = [{}];

var cat = cats[0];

function convertReadyForHome(cat) {
  return Object.assign({}, cat, {
    readyForHome: cat.readyForHome == 'Yes'
  });
}

console.log(cats.map(convertReadyForHome));
```

Example 9

``` JavaScript
function catSorter (cats){
  var mappedCats = cats.map(function(cat){
    return {
      id: Number(cat.id),
      readyForHome: convertReadyForHome(cat),
      yearOfBirth: calculateYearOfBirth(2017, cat.age),
      name: capitalise(cat.name)
      personality: cat.personality
    }
  });
  var readyForHomeCats = mappedCats.filter(function(cat){
    return cat.readyForHome
  });

  var nonAgressiveCats = readyForHomeCats.filter(function(cat){
    return !cats.personality.include('Agressive');
  });

  return nonAgressiveCats;
}

function capitalise (str){
  return str[0].toUpperCase() + str.slice(1);
}

function calculateYearOfBirth (thisYear, age){
  return thisYear - age;
}

var convertReadyForHome = function(str) {
  // return str.toLowerCase() === 'Yes'
  return str.toLowerCase()[0] === 'y';
  });

console.log(catSorter)
```

Example 10 - Shorter code than example 9

``` JavaScript
function catSorter (cats){
  return cats
    .map(function(cat){
    return {
      id: Number(cat.id),
      readyForHome: convertReadyForHome(cat),
      yearOfBirth: calculateYearOfBirth(2017, cat.age),
      name: capitalise(cat.name)
      personality: cat.personality
    }
  })
  .filter(function(cat){
    return cat.readyForHome && !cats.personality.include('Agressive');
  });

  var nonAgressiveCats = readyForHomeCats.filter(function(cat){
    return !cats.personality.include('Agressive');
  });

  return nonAgressiveCats;
}

function capitalise (str){
  return str[0].toUpperCase() + str.slice(1);
}

function calculateYearOfBirth (thisYear, age){
  return thisYear - age;
}

var convertReadyForHome = function(str) {
  // return str.toLowerCase() === 'Yes'
  return str.toLowerCase()[0] === 'y';
  });

console.log(catSorter)
```
