# React Redux Lecture
Predictable State container for JavaScript Apps - Created by Dan Abramov

## Why Redux
- Provides a single source of truth for the state  of your whole app
- State tree is immutable
- A reliable and predictable way of updating your state
- No duplications of Data
- High performance
- Lightweight
- Encourages best practices
- Extremely testable

## How does it work

State is represented as an object

Everything that happens in your app can be described as an action, which is also an object.

## Reducer

A reducer is a pure function thats takes the current state of your application and an action. It then copies the state, uses the action to decide how to update the state and then returns the modified copy which now serves as the new state.
