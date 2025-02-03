/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let index = 0;
    while (arr.length > 1) {
        index = (index + k - 1) % arr.length; // count the next k friend
        arr.splice(index, 1);  // remove that friend from array 
    }
    return arr[0];
};


// recursive
/*
Input:
    - n: Total number of person 
    - k:  every k-th friend is eliminated - step size
Process:
    - Use a recursive helper function to determine the position of the winner as the problem size (n) reduces.
    - The recursive formula calculates the position in a smaller circle (n-1), and adjusts it with the step size k.
Output:
    - Return the last remaining person in the circle
*/
var findTheWinner = function(n, k) {
    // initalize
    const helper = (n, k) => {
        if (n === 1) return 0;  // base case : if there is only one person --> return index 0
       // recursive case: calculate the position of the winner 
        return (helper(n - 1, k) + k) % n;  // modulo to stay within bounds
    };

    //Call the helper function 
    // +1 because the problem asks for 1-based indexing
    return helper(n, k) + 1;  
};
