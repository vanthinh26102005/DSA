/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function (head) {
    if (head === null || head.next === null) return true; // base case

    const reverse = (head) => {
        if (head == null) return null;

        // create 2 pointer for tracking
        let prev = null;
        let current = head; // pointer at head of linked list

        while (current) {
            let nextNode = current.next; // track the next node
            // reverse linked
            current.next = prev;
            prev = current;
            current = nextNode;

        }

        return prev;
    }

    let current = head;
    // create a copy of initial list
    let copy = new ListNode(current.val);
    let copyList = copy;
    while (current.next) {
        current = current.next;
        copyList.next = new ListNode(current.val);
        copyList = copyList.next;
    }
    
    // reverse that copy to compare
    let reverseList = reverse(copy);
    
    // check reverse
    current = head; // give pointer of init list for comparing
    while(current && reverseList){
        if(current.val !== reverseList.val) return false;
        current = current.next;
        reverseList =reverseList.next;
    }

    return true;

};
