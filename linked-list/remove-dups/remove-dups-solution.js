function removeDups(LinkedList) {
  if (!LinkedList.head) {
    return null;
  }
  var prev = LinkedList.head;
  var current = LinkedList.head.next;
  var store = {};

  if (!current) {
    return LinkedList;
  }

  while (current.next) {
    if (current.val in store) {
      prev.next = current.next;
    } else {
      store[current.val] = true;
    }
  }

  return LinkedList;
}
