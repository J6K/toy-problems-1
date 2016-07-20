var hasCycle = function(linkedList){
  var a = linkedList;
  var b = linkedList;

  while (a.next && b.next && b.next.next) {
    a = a.next;
    b = b.next.next;
    if (a === b) {
      return true;
    }
  }
  
  return false;
};
