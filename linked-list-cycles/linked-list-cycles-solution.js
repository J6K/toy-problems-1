var hasCycle = function(linkedList){
  var a = linkedList.head;
  var b = linkedList.head;

  while (true) {
    if (b === null || b.next === null) {
      return false;
    }

    b = b.next.next;
    a = a.next;

    if (b === a) {
      return true;
    }
  }
};
