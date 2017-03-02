# More object shit

In JavaScript, the thing called `this`, is the object that "owns" the JavaScript code.

The value of `this`, when used in a function, is the object that "owns" the function. The value of `this`, when used in an object, is the object itself. The `this` keyword in an object constructor does not have a value.

`this` is not defined at create time but at execution time - this can be changed by FUNCTION.call(VARIABLE)

## 1 Functional Pattern

``` JavaScript
function Person (name) {
    const secret = "I don't like olives"
    var person = {
      name: name,
      sayName: function () {
        console.log(person.name)
      },
      revealSecret: function () {
        console.log(secret);
      }
    }
    return person;
}

const me = Person('Will');
const you = Person('Will2');
me.sayName(); // Return Will
you.sayName(); // Return Will2
me.revealSecret(); // Return "I don't like olives"
```

## 2 Functional-Shared Pattern

``` JavaScript
function Person (name) {
    return {
      secret: "I don't like olives", // Not secret anymore
      name: name,
      sayName: methods.sayName,
      revealSecret: methods.revealSecret
    }
}

const methods = {
  sayName: function () {
    console.log(this.name);
  },
  revealSecret: function () {
    console.log(this.secret);
  }
}

const me = Person('Will');
const you = Person('Will2');
me.sayName(); // Return Will
you.sayName(); // Return Will2
me.revealSecret(); // Return "I don't like olives"
```

## 3 Prototypal Pattern

``` JavaScript
function Person (name) {
    const person = Object.create(Person.Prototype);
    person.secret = "I don't like olives";
    person.name = name;
}

Person.prototype = {
  sayName: function () {
    console.log(this.name);
  },
  revealSecret: function () {
    console.log(this.secret);
  }
};

const me = Person('Will');
me.sayName(); // Return Will
me.revealSecret(); // Return "I don't like olives"
```

## 4 Pseudo-Classical Pattern

``` JavaScript
function Person (name) {
  // this automatically links to Person.Prototype
  // What will happen in background this = Object.create(Person.Prototype)
  this.name = name;
  this.legs =2;
  this.species = 'Homo Sapiens'
  // Return this;
}
Person.prototype = {
  sayName: function () {
    console.log(this.name);
  },
  revealSecret: function () {
    console.log(this.secret);
  }
};

const me = new Person('Will');
me.sayName(); // Return Will
me.revealSecret(); // Return "I don't like olives"
```

## Rule 1: Default Binding

``` JavaScript
function foo () {
  // "use strict" - makes JavaScript more strict with the function (rarely used)
  console.log(this.a); // this will just be undefined (new to ES6)
}
var  a = 2;
foo(); // undefined
```

## Rule 2: Implicit Binding

``` JavaScript
function foo () {
  console.log(this.a);
}

var obj = {a: 55, foo: foo};
obj.foo(); // 55

var obj2 = {a: 42, foo: foo}
var obj1 = {a: 2, obj2: obj2}

obj1.obj2.foo(); //42

// Implicitly losing the binding this
var obj = {a: 2, foo: foo}
var a = 'Nope! Its global';
setTimeout(obj.foo, 500); // 'Nope! Its global'
// obj.foo is calling the function which then is confusing 'this'.
setTimeout(obj.foo.bind(obj), 500); // This one then works
```

## Rule 3: Explicitly Binding

``` JavaScript
function foo () {
  console.log(this.a);
}

var obj1 = {a: 342342};
var obj2 = {a: 'Hello'};

foo.call(obj1);
foo.call(obj2);
```

## Linking a object to an object to an object

``` JavaScript
function Person (name) {
  this.name = name;
  this.legs =2;
  this.species = 'Homo Sapiens'
}
Person.prototype = {
  sayName: function () {
    console.log(this.name);
  }
};

function Programmer (name, lang) {
  Person.call(this, name);
  this.lang = lang;
  this.school = 'Northcoders';
  this.skills = 'sharp AF';
}

Programmer.prototype = Object.create(Person.prototype)
Programmer.prototype.saySkills = function () {
  console.log('My ' + this.lang + ' skills are ' + this.skills);
}

const student = new Programmer('Will', 'JavaScript');
console.log(student);
console.log(student.name);
student.saySkills();
student.sayName();

```
