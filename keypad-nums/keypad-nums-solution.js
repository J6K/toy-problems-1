function telephoneWords (digitString) {
  var results = [];
  
  function recurse(str) {
    if (str.length === digitString.length) {
      results.push(str);
      return;
    }

    // current character of digitString (key on keypad)
    var current = digitString.charAt(str.length);

    // keypad[current] is one of the arrays from keypad
    for (var i = 0; i < keypad[current].length; i++) {
      recurse(str + keypad[current][i]);
    }
  }

  recurse('');

  return results;
}

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
