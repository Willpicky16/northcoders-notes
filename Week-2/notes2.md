# 13/02/2017 Afternoon lecture - Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top

``` JavaScript
console.log(a); // a will be available but have no value

var a = 'foo'; // Undefined

console.log(a); // This will now show the value of a 'foo'
```

``` JavaScript
foo(); // TypeError (foo is not a function)

var foo = function(){
  console.log('foo');
}

foo(); // Returns the console log of foo
```

## Function Expression
- A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ).

``` JavaScript
foo(); // Returns TypeError (foo is not a function)

var foo = function () {
  console.log('foo');
}
```

## Function Declaration
- A Function Declaration defines a named function variable without requiring variable assignment.

``` JavaScript
bar(); // Returns the console log of bar

function bar () {
  console.log('bar');
}
```

Hoisting hoists functions before variables (functions have priority over variables)
