# React Redux - Vending Machine Sprint

State is the minimum information needed for your application.

## Example of the state that would be used for a Vending Machine
``` JavaScript
{
  products: {
    'A': {
      name: name,
      stock: stock,
      price: price
    },
    'B': {
      name: name,
      stock: stock,
      price: price
    }
  },
  money_slot: [10, 50, 100],
  money_stock: {
    1: 10,
    2: 9,
    5: 7,
    10: 12
  },
  change_dispenser: []
}
```

## Example of actions that would be used for a vending machine

Buy Product
- Which Product? so would want product ID

Stock Product
- Quantity

Insert coin
- Value of the inserted coin

Take Product

Get Change / Cancel Purchase

Remove item from Vending Machine

## Webpack
`npm run build`

``` JavaScript
"scripts": {
  "build": "webpack index.js bundle.js"
}
```

## Redux Todo Example

``` JavaScript
// What you want your state to look like
{
  todos: [
    {text: 'Drink Coffee', completed: true},
    {text: 'test', completed: false}
  ],
  visibilityFilter: "SHOW_COMPLETED"
}

// What you want your actions to look like
{type: 'ADD_TODO', text: 'Test'}
{type: 'TOGGLE_TODO', index: 1}
{type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'}

// Visibility Filter
function visibilityFilter (prevState, action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return prevState;
  }
}

// Reducer
function todos (prevState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return prevState.concat({text: action.text, completed: false});
    case 'TOGGLE_TODO':
      return prevState.map(function (todo, i) {
        if (i === action.index) {
          return {text: todo.text, completed: !todo.completed}
        } else {
          return todo;
        }
        // Instead of if statement
        // return i === action.index ? {text: todo.text, completed: !todo.completed} : return todo;
      })
    default:
      return prevState;
  }
}

// Test
describe('todos', () => {
  it('exists', () => {
    expect(todos).to.be.a('function');
  })
  it('handles an ADD_TODO action correctly', () => {
    const prevState = [];
    const action = {type: 'ADD_TODO', text: 'Do Stuff'};
    const expectedState = [{text: 'Do Stuff', completed: false}];
    expect(todos(prevState, action)).to.eql(expectedState);
  });
  it('handles an TOGGLE_TODO action correctly', () => {
    const prevState = [{text: 'Do Stuff', completed: false}];
    const action = {type: 'TOGGLE_TODO', index: 0};
    const expectedState = [{text: 'Do Stuff', completed: true}];
    expect(todos(prevState, action)).to.eql(expectedState);
  });
})
```
