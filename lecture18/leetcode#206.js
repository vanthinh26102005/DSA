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
var reverseList = function (head) {
    if (head == null) return null;

    // create 2 pointer for tracking
    let prev = null; 
    let current = head;

    while(current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;

    }

    return prev;
};