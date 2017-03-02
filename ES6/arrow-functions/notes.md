# Arrow functions

Arrow functions provide us a new way of writing functions. There are some differences in behaviour between ES6 arrow functions and 'regular' functions that we need to be aware of which which mean we might not always choose to use arrow functions.


##### Arrow functions are always anonymous (nameless). To give them a name, you need to assign them. You cannot declare them.

```javascript
function doSomething (a, b) {
    var c = a + b;
    return c % 10;
}

// Becomes:

const doSomething = (a, b) => {
    var c = a + b;
    return c % 10;
}
```

##### This makes them quicker to write when we actually need an anonymous function

```javascript
var mappedData = data.map((elem, i) => {
    return elem * i;
});
```

##### If you just have one parameter, you can omit the parameter parentheses

```javascript
const mappedData = data.map(elem => {
    return elem * 2;
});
```

##### If you have no parameters then you must keep the parentheses

```javascript
setTimeout(() => {
    console.log('Hello world');
}, 1000);
```

##### If your function contains a single expression, you can omit the curly brackets. A return is added implicitly. This is called having a 'concise body'.

```javascript
const mappedData = data.map(elem => elem * 2);
```

##### Returning an object literal from a concise body confuses JavaScript

```javascript
const names = ['Chris', 'James', 'Mauro']

const mappedData = names.map(elem => {name: elem, company: 'Northcoders'}); // Unexpected token!
```

So we need to wrap the object literal in parentheses

```javascript
const names = ['Chris', 'James', 'Mauro']

const mappedData = names.map(elem => ({name: elem, company: 'Northcoders'});
```

##### You cannot use arrow functions as constructors:

```javascript
const Bar = () => {
    this.foo = 33;
}

const a = new Bar(); // TypeError Bar is not a constructor
```


## Arrow functions and `this`

The most important difference with arrow functions is that they pick up `this` from the execution context in which they are **defined**. We call this aspect of their behaviour **lexical binding of this** as opposed to **dynamic binding of this**.

Consider this example from the other day, where we previously expected to be able to use `this` to point to an instance of a room:

```javascript
function createRoom (color) {

    const room = {
        walls: 2,
        color: color,
        orderPaint: methods.orderPaint
    };

    return room;

}

const methods = {
    orderPaint: () => {
        return 'please send ' + this.color + ' paint';
    }
}

const kitchen = createRoom('pink');

console.log(kitchen.orderPaint());
```

The same happens if we tried to store the shared methods on the prototype property of createRoom:

```javascript
function createRoom(color) {
    const room = Object.create(createRoom.prototype);

    room.walls = 2;
    room.color = color;

    return room;

}

createRoom.prototype.orderPaint = () => {
    return 'please send ' + this.color + ' paint';
}

const kitchen = createRoom('pink');

console.log(kitchen.orderPaint());
```


This behaviour means that you are safest not to use arrow functions for method functions.

However, this behaviour **can** solve problems where you would ordinarily need to explicitly bind `this` using the `.bind` method.

```javascript
const cat = {
    name: 'Tabitha',
    lastName: 'McPaws',
    children: ['foo', 'bar', 'bob'],
    listChildren: function () {
        console.log(this); // the cat object

        // but in the callback to map we loose the 'this' binding
        return this.children.map(function (child) {
            return child + ' ' + this.lastName;
        });
    }
}
```

In the above code, we end up with `[ 'FOO undefined', 'BAR undefined', 'BOB undefined' ]` because at the call site for the anonymous function we pass to `map`, it's a naked function call.

We can use an arrow function instead here to fix the `this` binding within the callback to map. It is fixed to the `cat` object, which is the value of `this` at the point at which the anonymous function is defined.

```javascript
const cat = {
    name: 'Tabitha',
    lastName: 'McPaws',
    children: ['foo', 'bar', 'bob'],
    listChildren: function () {
        return this.children.map(child => {
            return child + ' ' + this.lastName;
        })
    }
}
```

Sometimes it's not desirable to bind the context of `this` with an arrow function, so be careful! 

### Arrow functions and arguments

##### Arrow functions do not have their own arguments object

```javascript
const bar = (a, b) => {
    return arguments.length;
}

console.log(bar()); // 5
```

If we run this code in Node we get 5, not 2. This is because arrow functions also have **lexical arguments** meaning that they do not have their own arguments object but inherit it from the lexical scope in which they are defined.

In the above example, the arguments are being provided by Node and there happen to be 5 of them.

In this example, the function in which `bar` is defined provides the arguments object.

```javascript
function foo (a) {
    const bar = (a, b) => {
        return arguments.length;
    }

    return bar(5, 6);
}

foo(6); // 1
```

However, arrow functions **do** still have a length property:

```javascript
const foo = (a, b, c) => {
    // do something
}

console.log(foo.length); // 3
```

## When to use arrow functions

- When you need to fix the `this` binding lexically

- When you are not planning to use the function as a method

- When you need a simple anonymous function

- No need to replace all your functions with arrow functions

- Syntactic variations make them less readable than regular functions

- From Kyle Simpson:

![When to use](when.png)