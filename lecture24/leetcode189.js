/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // because duplicate k times  <=> k % n times
  k = k % nums.length; // case k >=n

  const reverse = (nums, start, end) => {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  // reverse initial arr
  reverse(nums, 0, nums.length - 1);

  // reverse k first element
  reverse(nums, 0, k - 1);

  // reverse n-k remain element
  reverse(nums, k, nums.length - 1);

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
