var _ = require('underscore');

function where (list, properties) {
  return _.filter(list, function (obj) {
    return _.every(properties, function (val, key) {
      return obj[key] === properties[key];
    });
  });
  // return _.reduce(list, function (acc, obj) {
  //   var matchesProperties = _.every(properties, function (val, key) {
  //     return obj[key] === properties[key];
  //   });
  //   if (matchesProperties) acc.push(obj);
  //   return acc;
  // }, []);
}

var list = [
  {name: 'Mauro', age: 27},
  {name: 'Harriet', age: 26},
  {name: 'Daryl', age: 78},
  {name: 'Chris', age: 78}
]

console.log(where(list, {age: 78, name: 'Chris'}));