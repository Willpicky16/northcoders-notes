# More Recursion

This goes through a object of cats

``` JavaScript
function traverse (obj) {
  // access first level notes
  for (var key in obj) {
    if (obj[key] instanceof Object) {
      traverse(obj[key]);
    } else {
      console.log(obj[key]); // Prints out every value / element in the object
    }
  }
}

traverse(anotherCatRecord);
```

``` JavaScript
// Visit every node and check if it contains a specific string
function search (obj, terms) {
  // Base Case
  if (typeof obj === 'string') return obj.includes(term);

  for (var key in obj) {
    var found = search(obj[key], term);
    if (found) return true;
  }
  return false;
}

traverse(anotherCatRecord, 'Smith');
```

Example 2 with a arrays

``` JavaScript
function countArrays (arr) {
  // Base Case
  if (!Array.isArray(arr)) return 0;

  var counter = 1;

  for (var i = 0; i < arr.length; i++) {
    // if (Array.isArray(arr[i])) counter++;
    if (Array.isArray(arr[i])) counter += countArrays(arr[i]);
  }
}

console.log(countArrays('test')); // Returns 0
console.log(countArrays([1, 2, 3])); // Returns 1
console.log(countArrays([1, 2, 3, [4], 5, 6])); // Returns 2
console.log(countArrays([1, 2, 3, [4], [5, [6], 7, [5, 6, [7]]], 6, 7])); // Returns 6
```
