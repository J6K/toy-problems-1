# Bubble Sort

First, watch the [visualization.](http://visualgo.net/sorting) (select 'bubble' at the top navigation and click the play button to watch it.)

At a high level, we will be doing as many passes (iterations) through the array as needed to sort the array. Within each pass-through, we will simply be comparing the `current` element to what is to the right of it, and swapping if the current is larger.

E.g.: 

```
// [1, 3, 4, 2, 5] => [1, 2, 3, 4, 5]
```
