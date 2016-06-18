// approach 1
// ----------
function keypadWords(digitString) {
  var results = [];
  var temp = [];

  function recurse(num) {
    // base
    if (num === digitString.length) {
      results.push(temp.join(''));
      return;
    }

    // otherwise
    var chars = keypad[digitString[num]];
    for (var i = 0; i < chars.length; i++) {
      temp.push(chars[i]);
      recurse(num + 1);
      temp.pop();
    }
  }

  recurse(0);

  return results;
}

// approach 2
// ----------
function keypadWords(digitString) {
  var results = [];
  
  function recurse(str) {
    // base
    if (str.length === digitString.length) {
      results.push(str);
      return;
    }

    // otherwise
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
