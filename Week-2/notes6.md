# The Big O Notation

- Big O notation is used in Computer Science to describe the performance or complexity of an algorithm.

- Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.

# Thursday Sprint

## Simple Search

Just a simple search

## Binary Search

Binary search, also known as half-interval search or logarithmic search, is a search algorithm that finds the position of a target value within a sorted array

## Selection Sort

Selection Sort is a combination of searching and sorting.

EXAMPLE
- Take the max / min number then sort from that number so `2, 77, 64, 12, 6, 8, 11` will end up with `77` first for example then followed by `64, 12, 11, 8, 6, 2`.

## Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.

The bubble sort gets its name because elements tend to move up into the correct order like bubbles rising to the surface.

EXAMPLE
- Take the array (for example `[4, 8, 3, 11, 16, 104, 77, 2]`)

- and each digit will compare to the one next to it so will end up with `[4, 3, 8, 11, 16, 77, 2, 104]`

- this is still not sorted so the process starts again and again until we get the properly sorted array `[2, 3, 4, 8, 11, 16, 77, 104]`.

- This then stops when nothing chances anymore.

## Quick Sort

Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order.

EXAMPLE
- Take the array (for example `[16, 8, 2, 24, 11, 51, 13]`)

- and then grab the smallest numbers `[2, 11, 13, 3]` and the largest numbers `[18, 24, 51]`.

- Then the array is done so that smallest is taken out such as  `[2]`, `[11, 13]`, `[18]`, `[24, 51]`.

- This is done until every number is on its own such as `[2]`, `[11]`, `[13]`, `[18]`, `[24]`, `[51]`.

<!-- ``` JavaScript

``` -->
