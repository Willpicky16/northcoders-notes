# Objects

``` JavaScript
let kitchen = {
  walls: 4,
  doors: 2,
  colour: 'beige',
  orderPaint: function () {
    return 'Please send ' + kitchen.colour + ' paint.'
  }
};

console.log(kitchen.orderPaint());
```

## Creating Objects

``` JavaScript
function createRoom (colour) {
  let room = {
    walls: 4,
    doors: 2,
    colour: colour,
    orderPaint: function () {
      return 'Please send ' + room.colour + ' paint.'
    }
  };
  return room;
}

let kitchen = createRoom('beige');
let bathroom = createRoom('black');

console.log(kitchen.orderPaint());
console.log(bathroom.orderPaint());
```

## Functional pattern with a key code

``` JavaScript
function createRoom (colour, code) {
  var keyCode = code;
  let room = {
    walls: 4,
    doors: 2,
    colour: colour,
    orderPaint: function () {
      return 'Please send ' + room.colour + ' paint.'
    },
    grantAccess: function (code) {
      return code === keyCode;
    }
  };
  return room;
}

let kitchen = createRoom('beige', 1234);
let bathroom = createRoom('black', 3456);

console.log(kitchen.orderPaint());
console.log(bathroom.grantAccess(324423)); // false
console.log(bathroom.grantAccess(3456)); // true
```
The function orderPaint is being created every time the createRoom function runs which is taking up unestry space - this is alright for a couple of objects but if hundrends were created it would be very slow.

``` JavaScript
function createRoom (colour, code) {
  var keyCode = code;
  return {
    walls: 4,
    doors: 2,
    colour: colour,
    orderPaint: methods.orderPaint,
    // grantAccess: methods.grantAccess
    grantAccess: function (code) {
      return code === keyCode; // This bit won't work - Limitation on JavaScript!
    }
  };
  // return room; // Isn't needed anymore
}

let methods = {
  orderPaint: function () {
    return 'Please send ' + this.colour + ' paint.';
  }
  // grantAccess: function (code) {
  //   return code === keyCode; // This bit won't work - Limitation on JavaScript!
  // }
}

let kitchen = createRoom('beige', 1234);
let Bathroom = createRoom('black', 1234);

console.log(kitchen.orderPaint()); // Works after the use of 'this' for example this.colour;
console.log(Bathroom.orderPaint()); // Returns black - meaning 'this' works for both
console.log(kitchen.grantAccess(1234));
```

## Example 2

``` JavaScript
function createDog (sound) {
  return {
    sound: sound,
    talk: function () {
      console.log(this.sound);
    }
  }
}

let dog = createDog('woof');
let spanishDog = createDog('guau');
// 'this' isn't pointing to anything and doesn't work!
dog.talk(); // When dog.talk() is called then 'this' is then pointed and works
spanishDog.talk();

let talkFunction = dog.talk; // Returns undefined
talkFunction();
```

JavaScript is both functional programming and object orinted programming. Which can be used together efficently.

## Example 3

``` JavaScript
function createDog (sound) {
  return {
    sound: sound,
    talk: function () {
      console.log(this.sound);
    }
  }
}

let dog = createDog('woof');

let button = document.getElementById('myButton');
button.addEventListener('click', dog.talk); // When button clicks returns undefined
button.addEventListener('click', dog.talk.bind(dog)); // When button clicks returns 'woof'
```

``` JavaScript
function addMultiple () {
  // var args = [].slice.call(arguments, 0);
  var args = Array.prototype.slice.call(arguments, 0);
  return arguments.reduce(function (a, b) {
    return a + b;
  }, 0)
}
```
