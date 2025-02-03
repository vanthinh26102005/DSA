/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (Math.abs(nums[i] - i) > 1) return false;
  }
  return true;
};

// time complexity is O(n) because we are iterating through the array
// space complexity is O(1) because we are not using any extra space

// Divide & conquer

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  function checkIdeal(start, end) {
    if (start >= end) return true; // base case: 1 single element

    const mid = Math.floor((start + end) / 2);

    // conquer: use recursively check left and right halves
    if (!checkIdeal(start, mid) || !checkIdeal(mid + 1, end)) return false;

    // combine: check global inversions
    for (let i = start; i <= end; i++) {
      if (Math.abs(nums[i] - i) > 1) return false;
    }

    return true;
  }

  return checkIdeal(0, nums.length - 1);
};

// Test cases
console.log(isIdealPermutation([0, 1, 2])); // Output: true
console.log(isIdealPermutation([1, 0, 2])); // Output: true
console.log(isIdealPermutation([1, 2, 0])); // Output: false
