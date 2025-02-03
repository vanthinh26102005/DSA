/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[i - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let current = nums[i] + nums[j] + nums[left] + nums[right];
        if (current === target) {
          // found target
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
        } else if (current > target) {
          // current sum bigger than target ,
          right--; // move right pointer to the left
        } else {
          left++; // move left pointer to the right
        }
      }
    }
  }

  return res;
};
