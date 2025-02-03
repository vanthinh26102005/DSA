/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {

    // convert number into string
    const str = num.toString();

    // init value count for couting K-beauty number
    let countK = 0;

    // use sliding window
    for (let i = 0; i <= str.length - k; i++) {
        // this value for support sliding window
        let count = 0
        let j = i;
        let subStr = '';
        while (count < k) {
            subStr = subStr + str[j];
            j++;
            count++;
        }
        // handle if beauty, increase count
        if (num % parseInt(subStr) === 0) {
            countK++;
        }
    }

    return countK;

};

console.log(divisorSubstrings(240, 2))
console.log(divisorSubstrings(430043, 2))


// clean - code
var divisorSubstrings = function(num, k) {
    let s = num.toString();  // Convert num to string
    let count = 0;

    for (let i = 0; i <= s.length - k; i++) {
        let sub = s.substring(i, i + k);  // Extract substring
        let val = parseInt(sub);  // Convert to integer
        
        // Check if val is a valid divisor of num (nonzero)
        if (val !== 0 && num % val === 0) {
            count++;
        }
    }
    
    return count;
};

// Example Cases
console.log(divisorSubstrings(240, 2));   // Output: 2
console.log(divisorSubstrings(430043, 2)); // Output: 2
