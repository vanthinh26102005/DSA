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
