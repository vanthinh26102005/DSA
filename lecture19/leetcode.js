// *leetcode#344 - recursive
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const reverse = (left, right) => {
        
        while(left > right){
            const temp  = s[left];
            s[left] = s[right];
            s[right] = temp;
        }
        return  reverse(left+1, right-1)
    }
    reverse(0, s.length-1);
};


// *leetcode#394 - recursive
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const decode = (index) => {
        let currentString = '';
        let k = 0;

        while (index < s.length) {
            const char = s[index];

            if (!isNaN(char)) {
                k = k * 10 + parseInt(char);
            } else if (char === '[') {
                const [decodedSubstring, newIndex] = decode(index + 1);
                currentString += decodedSubstring.repeat(k);
                k = 0; 
                index = newIndex;
            } else if (char === ']') {
                return [currentString, index];
            } else {
                currentString += char;
            }

            index++;
        }
        return [currentString, index];
    };

    // start decoding from index 0 and return the fully decoded string
    return decode(0)[0];
};



// *leetcode206 - recursive
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
var reverseList = function(head) {
    // base case: e list is empty or has one node => return head
    if (head === null || head.next === null) return head;

    // recursive reverse the rest of the list
    let reversedList = reverseList(head.next);

    // reverse the current node
    head.next.next = head; // point the next node's next to the current node
    head.next = null;      // set the current node's next to null

    return reversedList;
};



// *leetcode203 - recursive
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
    // base case: if the list is empty => return null
    if (head === null) return null;

    // recursive : traverse to the node which need to be removed
    head.next = removeElements(head.next, val);

    // delete
    return head.val === val ? head.next : head;
};
