// *leetcode#344 - recursive
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const reverse = (left, right) => {

        while (left > right) {
            const temp = s[left];
            s[left] = s[right];
            s[right] = temp;
        }
        return reverse(left + 1, right - 1)
    }
    reverse(0, s.length - 1);
};


// *leetcode#394 - recursive
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
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
var reverseList = function (head) {
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
var removeElements = function (head, val) {
    // base case: if the list is empty => return null
    if (head === null) return null;

    // recursive : traverse to the node which need to be removed
    head.next = removeElements(head.next, val);

    // delete
    return head.val === val ? head.next : head;
};


// leetcode234 - recursive

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
    // Create a pointer for the front of the list
    let frontPointer = head;

    // helper function 
    const recursivelyCheck = (currentNode) => {
        if (currentNode === null) return true; //base case: end of the list

        //use recursion to traverse to the end of list
        let isStillPalindrome = recursivelyCheck(currentNode.next);

        // check the values on the way go back the recursion stack
        if (!isStillPalindrome) return false;
        if (frontPointer.val !== currentNode.val) return false;

        // move the front pointer forward
        frontPointer = frontPointer.next;

        return true;
    };

    return recursivelyCheck(head);
};


// leetcode125 - recursive
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Helper function to check if a character is alphanumeric
    function isChar(c) {
        return /[a-z0-9]/.test(c);
    }

    // Helper function for recursion
    function checkPalindrome(str, left, right) {
        // Base case: if pointers cross, it is a palindrome
        if (left >= right) return true;

        // If the current characters do not match, return false
        if (str[left] !== str[right]) return false;

        // Move pointers inward and check recursively
        return checkPalindrome(str, left + 1, right - 1);
    }

    // Normalize the input string: convert to lowercase and filter valid characters
    const normalized = s.toLowerCase().split('').filter(isChar).join('');

    // Call the recursive helper function
    return checkPalindrome(normalized, 0, normalized.length - 1);
};


// leetcode231 -  for loop
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {

    if (n === 1) return true;
    while (n > 1) {
        n = n / 2;
        if (n === 1) {
            return true;
        }
        return false;
    }
    return true;
};

// leetcode231 -  for loop
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    if (n % 2 != 0) return false;
    return isPowerOfTwo(n / 2);
};


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 0) n = -n;
    while (n > 1) {
        if (n % 3 !== 0) return false;
        n = n / 3;
    }
    return true;
};


// leetcode390 - for loop

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    
};