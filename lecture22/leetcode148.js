/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // divide: merge sort
  const mergeSort = (head) => {
    if (!head || !head.next) return head;

    // get mid
    const mid = getMid(head); // this must return a list from mid to end (1)
    const left = mergeSort(head); // left subList
    const right = mergeSort(mid); // right subList

    return merge(left, right); // combine
  };
  // no need to conquer, because there just 1 node

  // get mid  - for finding mid in mergeSort
  const getMid = (head) => {
    // use increasing fast/slow pointer
    let slow = head;
    let fast = head;
    let prev = null;
    // 1 pointer with v = 1, 1 pointer with v = 2
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if (prev) prev.next = null; // break the list into 2 parts

    return slow; // return mid (use for 1 in line 18)
  };

  // combine: merge
  const merge = (left, right) => {
    const temp = new ListNode();
    // current is pointer to the temp-ListNode
    let current = temp;
    while (left && right) {
      if (left.val < right.val) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    // add remaining nodes
    if (left) current.next = left;
    if (right) current.next = right;

    // return temp.next not current.next
    return temp.next;
  };
  return mergeSort(head);
};
// time complexity is O(nlogn) because we are dividing the list into half in each recursive call
// space complexity is O(logn) because we are using the call stack
