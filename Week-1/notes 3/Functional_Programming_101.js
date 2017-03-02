var cats = [
  { id: '1', name: 'rupert', readyForHome: 'No', age: 12, personality: ['friendly', 'lazy', 'loving']},
  { id: '2', name: 'mrs fluffy', readyForHome: 'Yes', age: 2, personality: ['affectionate', 'playful', 'shy']},
  { id: '3', name: 'tabitha', readyForHome: 'Yes', age: 4, personality: ['aggressive', 'independent']},
  { id: '4', name: 'lily', readyForHome: 'No', age: 8, personality: ['friendly', 'playful', 'mischievous']},
  { id: '5', name: 'stripe', readyForHome: 'Yes', age: 1, personality: ['haughty', 'independent']},
  { id: '6', name: 'bob', readyForHome: 'Yes', age: 1, personality: ['aggressive', 'antisocial', 'nervous']},
  { id: '7', name: 'jean claude cat damme', readyForHome: 'Yes', age: 11, personality: ['sleepy', 'shy', 'loving']},
  { id: '8', name: 'tilly', readyForHome: 'Yes', age: 4, personality: ['playful', 'social', 'attention-seeking']},
  { id: '9', name: 'milo', readyForHome: 'No', age: 7, personality: ['mischievous', 'friendly']},
  { id: '10', name: 'mr claws', readyForHome: 'Yes', age: 13, personality: ['affectionate', 'shy', 'nervous']},
  { id: '11', name: 'robert zimmercat', readyForHome: 'Yes', age: 3, personality: ['folksy', 'prolific', 'neurotic']}
];

// MAP
// The id should be a number, not a string.
// The 'readyForHome' value should be a boolean rather than a string.
// Instead of an 'age' value, each item should instead have a 'yearOfBirth' value
// If the name of the cat is not capitalized, please capitalize it. (N.B 'mrs fluff' should become 'Mrs Fluff')

// FILTER
// Any cats that are not ready for rehoming should be removed from the list.
// Any cats that are aggressive need to be removed from the list.

function catSorter (cats) {
  return cats
    .filter(function (cat) {
      return convertYesNo(cat.readyForHome) && !cat.personality.includes('aggressive');
    })
    .map(function (cat) {
      return {
        id: Number(cat.id),
        readyForHome: convertYesNo(cat.readyForHome),
        yearOfBirth: calculateYearOfBirth(2017, cat.age),
        name: capitalise(cat.name),
        personality: cat.personality
      }
    });
}

function capitalise (str) {
  return str[0].toUpperCase() + str.slice(1);
}

function calculateYearOfBirth (thisYear, age) {
  return thisYear - age;
}


var convertYesNo = function (str) {
  return str.toLowerCase()[0] === 'y';
}

console.log(catSorter(cats));