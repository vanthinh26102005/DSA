/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // base case: if just take 1 return maximum element
  if (k === 1) return Math.max(...nums);

  let maxAverage = -Infinity;
  let curSum = 0;

  // calculate sum of first window ( contains k element)
  for (let i = 0; i < k; i++) {
    curSum += nums[i];
  }
  maxAverage = curSum / k;

  // sliding
  // use k index as head pointer
  for (let i = k; i < nums.length ; i++) {
    curSum = curSum - nums[i - k] + nums[i]; // remove tail, add head
    maxAverage = Math.max(maxAverage, curSum / k);
  }

  return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
