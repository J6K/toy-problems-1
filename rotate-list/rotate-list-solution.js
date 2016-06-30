/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) {
    return null;
  }

  var cur = head;
  var target = head;
  var length = 1;
  while (cur.next) {
    cur = cur.next;
    length++;
    if (length > k + 1) {
      target = target.next;
    }
  }

  if (k > length) {
    return rotateRight(head, k % length);
  } else if (k === length) {
    return head;
  } else if (length > 1) {
    cur.next = head;
    head = target.next;
    target.next = null;
  }

  return head;
};
