# Lowbar Solution Lecture

## Code - ie lowbar.js
``` JavaScript
_.extends = function(destination){
  for(var i = 1; i < arguments.length; i++){
    var source;
    for(var keys in source){
      source = arguments[i];
      destination[key] = source[key];
    }
  }
  return destination;
}
```

## Testing - ie lowbar.spec.js
``` JavaScript
  it('', function(){
    var actual = _.extend({name: 'Bye'});
    var expected = {name: 'Bye'};
    expect(actual).to.equal(expected);
  });
  it('', function(){
    var actual = _.extend({name: 'Hello'}, {name: 'Bye'});
    var expected = {name: 'Bye'};
    expect(actual).to.equal(expected);
  });
```

## Other useful code
``` JavaScript

```
