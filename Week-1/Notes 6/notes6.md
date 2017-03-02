# Code
``` JavaScript
_.each = function(list, iteratee){
  for(var i = 0; i < list.length; i++){
    iteratee(list[i], i, list);
  }
  return list;
}
```
# Test
``` JavaScript
  it('calls the iteratee for each element of the list', function(){
    var doSomething = function(){};
    var list = [1,2,3];
    _.each(list, doSomething);
  })
```
