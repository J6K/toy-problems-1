function kthNode(LinkedList, k) {
  var a = LinkedList.head;
  var b = LinkedList.head;
  var n = k - 1;
  while (n && a.next) {
    a = a.next;
    n--;
  }
  if (!n) {
    return null;
  }
  while (a.next) {
    a = a.next;
    b = b.next;
  }
  return b;
}
