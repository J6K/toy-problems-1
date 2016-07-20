# Linked List Cycles

Given a linked list as an input, determine whether the linked list contains a cycle or not.

A non-cyclic linked list:

```
A -> B -> C -> D -> E -> null
```

Cyclic linked list:

```
A -> B -> C
     ^    |
     |    v
     E <- D
```

Assume that the linked list comes with a `head` property pointed to the first node, and each node has a `val` and `next` property.
