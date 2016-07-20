function sumLists(LL1, LL2) {
  var a = LL1.head;
  var b = LL2.head;

  if (!a.head || !b.head) {
    return null;
  }

  var A = [];
  var B = [];
  var buffer = 0;
  var temp;
  var result = new LinkedList();

  while ((a && a.next) || (b & b.next)) {
    if (a === null) {
      A.push(0);
    } else {
      A.push(a.val);
      a = a.next;
    }
    if (b === null) {
      B.push(0);
    } else {
      B.push(b.val);
      b = b.next;
    }
  }

  while (A.length) {
    temp = A.shift() + B.shift() + buffer;
    if (temp > 10) {
      temp = temp - 10;
      buffer = 1;
    } else {
      buffer = 0;
    }
    result.addToHead(temp);
  }

  return result;
}
