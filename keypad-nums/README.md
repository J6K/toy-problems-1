# Keypad Nums

Given a phone keypad and a helper dictionary representing the keypad:

```js
/* keypad:
------ ----- ------
  1   |  2  |   3
  1   | ABC |  DEF
------ ----- ------
  4   |  5  |   6
 GHI  | JKL |  MNO
------ ----- ------
  7   |  8  |   9
 PQRS | TUV | WXYZ
------ ----- ------
      |  0  |
      |  0  |
       -----  */

// helper dictionary:
keypad = {
  0: ['0'],
  1: ['1'],
  2: ['A','B','C'],
  3: ['D','E','F'],
  4: ['G','H','I'],
  5: ['J','K','L'],
  6: ['M','N','O'],
  7: ['P','Q','R','S'],
  8: ['T','U','V'],
  9: ['W','X','Y','Z']
}
```

Write a function that takes up to 4 digits on a keypad, and outputs all possible combinations of words that can be formed using those digits in the given order.

For example:

```js
keypadNums("0002") // [ "000A", "000B", "000C" ]
keypadNums("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
```
