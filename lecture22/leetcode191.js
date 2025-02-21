/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    // use n & 1 for count binary 1
    // it will be 1 if n is odd, 0 if n is even
    count += n & 1;
    // right shift n by 1 ( it means n=n/2)
    n = n >>> 1;
  }
  return count;
};

//time complexity: O(1) space complexity: O(1)

// divide & conquer

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  // base case:
  if (n === 0) return 0;

  // divide : use recursive, right shift 1 bit (n=n/2)
  // solve: check if(n=1)
  // combine: count 1 (use '+')
  return (n & 1) + hammingWeight(n >>> 1);
};


/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  if (n === 0) return 0; // base case: no bit set
  if (n === 1) return 1; // base case: if n===1, just have only 1 bitset

  // convert in to binary & find the number of bits & halve it size
  let half = Math.floor(n.toString(2).length / 2);

  // divide: divide initial string into leftPart & rightPart

  let leftPart = n >> half;                  // take left part (right shift half bit)
  // Input: n = 11 (1011), half = 2 (10 | 11)
  // Output: leftPart = 2 (10) - left side after right shift 2 bit 

  let rightPart = n & ((1 << half) - 1);     // take right part  (use mask half bit )
  // Input: n = 11 (1011), half = 2 (10 | 11)
  // Process: use AND with mask (1 << half) - 1 to take right side (11)
  // Output: right_part = 3 (11) 

  // conquer: no need to conquer because finally devide into only 1 bit

  //use recursive to continue divide in each part 
  return hammingWeight(leftPart) + hammingWeight(rightPart);
  /*
    hammingWeight(left_part) → hammingWeight(2) → 1  (number of bit 1 in 10).
    hammingWeight(right_part) → hammingWeight(3) → 2 (number of bit 1 in 11).
    => 1 + 2 = 3
  */
};
