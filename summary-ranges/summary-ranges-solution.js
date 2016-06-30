function summaryRanges(array) {
  var result = [];
  var min = array[0];
  var end = array[0];
  var cur, next;

  for (var i = 0; i < array.length; i++) {
    cur = array[i];
    next = array[i+1];
    if (next !== cur + 1) {
      end = cur;
      if (min === end) {
        result.push(end.toString());
      } else {
        result.push(min + "-" + end);
      }
      min = next;
    }
  }

  return result;
}
