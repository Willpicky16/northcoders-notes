# Graph Algorithms

Graphs can be used to model a plethora of natural objects, such as connections in a transportation network, social relations between individuals, links in the internet and the web, and so on.

One use of it is Facebook Search or Twitter follows

Links can either go one or two ways for example the difference with Facebook and Twitter
- With Facebook you have to both be linked to be friends so a link is both way
- With Twitter one person can follow someone but the other doesn't have to so a link in one way in done

Directive Graph
https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/6n-graf.svg/1200px-6n-graf.svg.png

Waited graphs
- Each edge (line) has some data within for the route (Distances / Transporting)

Un-Waited graphs
- Every edge (line) is equal

## Directive example of have the graph is done in JavaScript

Directive graphs can only go to the spots that they are linked too.

``` JavaScript
{
  A: [B, C],
  B: [B, D],
  C: [D],
  D: [E]
}
```

## Un-directive example of have the graph is done in JavaScript

Un-directive graphs can  go to the spots that they are not directly linked too, (everything is connected to everything).

``` JavaScript
{
  A: [B, C],
  B: [A, D, E], // For Example
  C: [D],
  D: [E]
}
```
