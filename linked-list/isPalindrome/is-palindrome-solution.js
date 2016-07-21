const isPalindrome = (LL) => {
  let slow = LL.head;
  let fast = LL.head;
  let stack = [];

  while (fast.next && fast.next.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // if fast.next is not occupied, that means we have an odd # of elements.
  if (!fast.next) {
    stack.pop();
    slow = slow.next;
  }

  while (slow.next) {
    if (slow.val !== stack.pop()) {
      return false;
    }
  }

  return true;
}
