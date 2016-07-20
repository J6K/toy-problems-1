function removeNFromLL(node) {
  // copy the value of next into node
  node.val = node.next.val;
  // set the node next to 2 over
  node.next = node.next.next;
}
