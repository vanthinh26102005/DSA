/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    let head = 1;          
    let step = 1;           //  gap between elements in  list
    let remaining = n;      // remaining element in list
    let turn = true; 
    while (remaining > 1) {
        // Update the head if moving left-to-right or if there are an odd number of elements
        if (turn || remaining % 2 === 1) {
            head += step;
        }
        step *= 2;               // double the step size for the next round
        remaining = Math.floor(remaining / 2); // arr.length is decreased a half
        turn = !turn; 
    }

    return head;
};
