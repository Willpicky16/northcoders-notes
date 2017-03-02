# Hoisting

### Declaring V. Assigning

We often describe `var foo = 'cat'` as a variable declaration but in reality we are doing two things at once. We are declaring a variable called `foo` and also assigning a value of 'cat' to it. We could write the declaration and the assignment separately:

```javascript
var foo;

foo = 'cat';
```

### Variable declarations are hoisted

When the JavaScript engine first encounters a file, it makes an initial pass over the code looking for variable declarations and it "hoists" them. This means it reserves a space in memory for them and makes their identifiers available before execution of the programme begins.

E.g.

```javascript
console.log(foo); // undefined
var foo = 'cat';
```

In the above example, we do not get a Reference Error because `foo` has already been made available as a variable even though it does not hold a value yet. JavaScript can access `foo` on the first line and gives it the value `undefined`. The assignment of the string 'cat'  to `foo` happens on the next line.

The interpreter doesn't actually move your code around but conceptually, it's as though your code reads like this:

```javascript
var foo;
console.log(foo);
foo = 'cat';
```

### Hoisting is scoped

Hoisting takes place within each execution context. In this example, `a` will be hoisted to the top of the `foo` function but not the top of the entire programme.

```javascript
function foo () {
    console.log(a);

    var a = 'cat';
}

foo(); // undefined

console.log(a); // Reference Error
```

### Declarations Vs Expressions

Function expressions behave like any other declarations-assignment expression. NB trying to call something that is not a function (such as `undefined`) produces a Type Error.

Function declarations are hoisted in their entirity - the entire function is made available before the execution of the programme.

```javascript
foo();

function foo () {
    console.log('foo');
} 
```

```javascript
bar(); // TypeError: bar is not a function

var bar = function () {
    console.log('bar');
}
```

### Functions first

The JavaScript engine hoists functions before it hoists variable declarations. In this example, it hoists the function `foo` first and makes it available in memory. Then it looks for variable declarations but since the `foo` identifier is already in use it doesn't re-hoist it. The `foo` identifier still points to the function.

```javascript
foo(); // console.logs 'foo'

function foo () {
    console.log('foo');
}

var foo = 'cat';
```

### Examples

Think through these examples and try to think about what's happening at the level of the JavaScript engine.


```javascript
console.log(a);
var a = 'Foo';
console.log(a);
```

```javascript
animal = 'cat';

var animal = 'tiger';

console.log(animal);
```

```javascript
console.log(foo);
foo();

function foo () {
    console.log('Hello world');
}
```

```javascript
function bar () {
    console.log(a);
}

bar();

var a = 12;

```

```javascript
function bar () {
    console.log(a);
}

a = 5;

bar();

var a = 12;

```

```javascript
foo();
bar();

var a = 10;

function foo () {
    a += 20;
}

function bar () {
    console.log(a);
}

console.log(a);
```


```javascript
foo();

function foo () {
    console.log('Hello world');
}

function foo () {
    console.log('Second foo');
}
```

```javascript
foo();

function foo () {
    bar();
}

function bar () {
    console.log("I'm bar");
}
```


```javascript
var x = 3;

function func (randomize) {
    if (randomize) {
        var x = Math.random();
        return x;
    }
    return x;
}

func(false);
```