
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head; // pointer for tracking the list
    let prev = null;

    // base case: list is null
    if (head === null) return null;
    // handle cases where the head node(s) have the target value
    while (head !== null && head.val === val) {
        head = head.next;
    }
    // traverse the rest of the list
    current = head;
    while (current !== null) {
        if (current.val === val) {
            // found -> jump over the node 
            prev.next = current.next;
        } else {
            // renew previous pointer for next jump
            prev = current;
        }
        // not found -> continue
        current = current.next;
    }

    return head;
};


