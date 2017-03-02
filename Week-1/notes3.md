Example Code

``` JavaScript
_.range = function(start, stop) {
  if(arguments.length === 1){
    stop = start;
    start = 0;
  }
  var result =[];
  for(var i = start; i < stop; i++){
    result.push(i);
  }
  return result;
}
```

Example Testing

``` JavaScript
it('', function(){
  var actual = _.range(3);
  var expected = [0,1,2];
  expect(actual).to.eql(expected);
});
it('', function(){
  var actual = _.range(2, 4);
  var expected = [2, 3];
  expect(actual).to.eql(expected);
});
```
