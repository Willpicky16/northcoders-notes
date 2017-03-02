# Asynchronous Programming

Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.

Example 1 - Doesn't happen when the other functions run so its Asynchronous

``` JavaScript
setTimeout(function () {
  console.log('foo'); // Returns foo after bar due to the timeout of 1000 milliseconds (1 second)
}, 1000); // This is the delay

console.log('bar'); // Returns bar
```

Example 2

``` JavaScript
setInterval(function () {
  console.log('foo'); // Displays foo every 1000 milliseconds (1 second)
}, 1000);

let counter = 0;

const id = setInterval(function () {
  console.log('foo');
  clearInterval(id);
  counter++;
  if (counter > 10 clearInterval(id)); // Runs until counter is 10
}, 1000); // This is the delay
```

Example 3

``` JavaScript
for (var i = 0; i < 10; i++) {
  // Put this function aside and invoke after 1000 milliseconds (1 second)
  setTimeout(function () {
    console.log(i); // Returns 10 - 10s after a delay of 1000 milliseconds (1 second)
  }, 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    var j = i;
    console.log(j); // Returns 10 - 10s again after a delay of 1000 milliseconds (1 second)
  }, 1000);
}

//NOTE: THESES ARE THE FIXES FOR ABOVE

for (let i = 0; i < 10; i++) {
  // let / const creates its own scope / execution context within its block - curly brackets
  setTimeout(function () {
    console.log(i); // Returns 0,1,2,3,4,5,6,7,8,9 after a delay of 1000 milliseconds (1 second)
  }, 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(function (i) {
    console.log(i); // Returns 0,1,2,3,4,5,6,7,8,9 after a delay of 1000 milliseconds (1 second)
  }.bind(null, i), 1000);
}
```

## What happens with `this` with Asynchronous

``` JavaScript
var _ = {};

_.whatAmI = 'underscore object';

_.each = function (list, func) {
  func();
}

_.each([1, 2, 3], function () {
  console.log(this.whatAmI); // Undefined
});

// First way to fix this

var _ = {};

_.whatAmI = 'underscore object';

_.each = function (list, func) {
  func = func.bind(_);
  func();
}

_.each([1, 2, 3], function () {
  console.log(this.whatAmI); // underscore object
});

// Second way to fix this

var _ = {};

_.whatAmI = 'underscore object';

_.each = function (list, func) {
  func.apply(_);
}

_.each([1, 2, 3], function () {
  console.log(this.whatAmI); // underscore object
});

// Third way to fix this

var _ = {};

_.whatAmI = 'underscore object';

_.each = function (list, func) {
  func.call(_);
}

_.each([1, 2, 3], function () {
  console.log(this.whatAmI); // underscore object
});
```

## Drone example

``` JavaScript
function Drone () {
  this.wings = 2;
  this.moving = false;
  this.position = 0;
}

Drone.prototype.move = function (dist, time) {
  this.moving = true;
  // Wait the time required

  setTimeout(function () {
    this.moving = false;
    this.position = dist;
    callback();
  }.bind(this), time)

  // NOTE: ARROW FUNCTION have lexical binding
  // NOTE: they take the value of this from the context in

  setTimeout(() => {
    this.moving = false;
    this.position = dist;
    callback();
  }, time)

  // Update moving to false
  // Update the position

};

const drone = new Drone();

drone.move(40, 1000, function () {
  console.log(drone); // {wings: 2, moving: false, position: 40}
  done(); // For testing Asynchronous code - lets mocha know when your finished
});
```
