/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // convert n to binary string
    let binaryStr = n.toString(2); // 2 -> base for binary 2^
    let reversedBinaryStr = binaryStr.split('').reverse().join('');

     // ensure the length of the reversed binary string is 32
    // add 0s to the end of the reversed binary string
    while(reversedBinaryStr.length < 32){
        reversedBinaryStr += '0';
    }
    return parseInt(reversedBinaryStr, 2);
};

// time complexity: O(1) space complexity: O(1)
// DIVIDE & CONQUER

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {

    /*
      input:
        + n : binary string
        + bitLength: length of binarystring
      process:
        + use divide & conquer
        + Halve string -> reverse -> 
    */
    function reverse(n, bitLength) {
        // base case 
        if (bitLength === 1) {
            return n; 
        }

        // divide 
        const halfLength = bitLength / 2;
        const left = n >>> halfLength; // right shift 'hafLength' bits => take left
        const right = n & ((1 << halfLength) - 1); // take right - use bitmask

        // recursive reverse
        const reversedLeft = reverse(left, halfLength);
        const reversedRight = reverse(right, halfLength);

        // combine
        /*
          -shift the reversed right half to the left by halfLength bit
          - use or to combine 
        */
        return (reversedRight << halfLength) | reversedLeft;
        
    }

    return reverse(n, 32) >>> 0; // parseint into unsigned 32-bit interger
};

// Test cases
console.log(reverseBits(43261596)); // Output: 964176192 (binary: 00000010100101000001111010011100 → 00111001011110000010100101000000)
console.log(reverseBits(4294967293)); // Output: 3221225471 (binary: 11111111111111111111111111111101 → 10111111111111111111111111111111)
