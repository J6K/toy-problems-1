function stairCase(n) {
  var str;
  for (var i = 0; i < n; i++) {
    str = '';
    for (var j = 0; j < n; j++) {
      if (j >= n - 1 - i) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}
