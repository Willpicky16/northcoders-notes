## Scope / Closure

Scope
- Scope is the area within which the variable is active. Like a function or a page.

Lexical Scoping
- Lexical scoping (sometimes known as static scoping ) is a convention used with many programming languages that sets the scope (range of functionality) of a variable so that it may only be called (referenced) from within the block of code in which it is defined.

Closure
- Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

# Scope Examples

In javascript, every function has a scope. Additionally there's a global scope (when outside any function a defined variable is defined in global scope, or in a function when not preceding var in definition). Scopes are hierarchically. If you have a function F and a function G inside F, when trying to access a variable in G, it will check if the variable is defined in G scope. If not it will try in F scope. If not, it will try in the global scope.

``` JavaScript
// global scope
var a = 1;

function F() {
    var a = 2;
    function G() {
        var a = 3;
        // here, a is 3
    }
    // here, a is 2
}
// here, a is 1
```
All 3 variables are different (because they were defined with var) and you can change in the global scope, in F or in G.

``` JavaScript
// global scope
var a = 1;

function F() {
    a = 2;

    function G() {
        a = 3;

        // here, a is 3
    }

    // G is called, a is changed..
    G();

    // here, a is 3
}
// F is called, a is changed..
F();

// here, a is 3
```

All 3 variables are actually one, accessed anywhere (because it's in the global scope). A change will affect all 3 scopes.

``` JavaScript
// global scope
var a = 1;

function F() {
    a = 2;

    function G() {
       var a = 3;

        // here, a is 3
    }

    // here, a is 2
}

// here, a is 1
```

Since a was defined in G, inside it's scope it's different and isolated from the outside. Meaning, nothing outside G can access or change the variable a that is inside. They will only see a (if defined) from the global scope. Also because of the function scope behaviour, G function only exists inside F, you cannot call it from the outside.

Look at scopes as containers. They can be nested. You cannot look inside but they can look outside.

Example 1

``` JavaScript
function createSecret(secret){
  return {
    check: function(word){
      return word === secret;
    }
  };
}

var password = createSecret('test');

console.log(password);

console.log(password.chceck('test12345')); // false
console.log(password.chceck('test')); // true
```
