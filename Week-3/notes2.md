# Afternoon lecture - sprint overview help

## Stack
last-in first-out (LIFO) principle

## Queue
first-in first-out (FIFO) principle


## Stack JS file
``` JavaScript
function createStack () {
  const stack = {
    size: 0;
    push: function () {
      stack.size++;
    }
  };
  return stack;
}
```

## Stack Test file
``` JavaScript
describe('createStack', function () {
  it('is a function', function () {
    expect(createStack).to.be.a('function');
  });
  it('returns an object', function () {
    expect(createStack()).to.be.a('object');
  });
});

describe('an instance of the stack returned by createStack', function () {
  const stack = createStack();
  it('has a size of zero ', function () {
    expect(stack.size).to.equal(0);
  });
  it('increases the size when i push onto the stack', function () {
    stack.push();
    expect(stack.size).to.equal(1);
  });
});
```

# Second Part of lecture - prototype

prototype shown as an object.

All objects created in JavaScript are given a prototype (its attached to it).

Object.prototype with a bunch of useful methods inside for example (toString: function....).

Array also is given a prototype (Array.prototype) with a bunch of useful methods inside for example (slice | indexOf | push | pop) - doesn't have a toString method like object does.

JavaScript automatically gives a function a prototype property.
## Object.prototype Example

``` JavaScript
const person = {
  name: 'Will',
  age: 19
};

console.log(person.toString()); // Returns (object Object)

console.log(person.hasOwnProperty('name')); // Returns true
console.log(person.hasOwnProperty('toString')); // Returns false (Can use toString but not its own property)
```

## Object.prototype Example 2

``` JavaScript
function createRoom (colour) {
  // createRoom.prototype = {}; - whats going on under the hood below

  const room = Object.create(createRoom.prototype);

  room.colour: colour,
  room.walls: 4,

  return room;
}
createRoom.prototype.orderPaint = function () {
  return 'Send ' + this.colour + ' paint';
};

const kitchen = createRoom('green');

console.log(kitchen.orderPaint());
```
