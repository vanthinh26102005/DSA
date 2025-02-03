/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  // base case:
  if (k === 1) return 0;

  // sort ASC
  nums.sort((a, b) => a - b);

  // use sliding window size k
  // to find minimum difference
  let minDiff = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    const diff = nums[i + k - 1] - nums[i];
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff;
};

console.log(minimumDifference([90], 1));
console.log(minimumDifference([9, 4, 1, 7], 2));

