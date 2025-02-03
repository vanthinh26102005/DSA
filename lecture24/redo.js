// threeSum
const threeSum = (nums, sum) => {
  nums.sort((a, b) => a - b); // asc
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === sum) {
        res.push([nums[i], nums[left], nums[right]]);
        break;
      } else if (currentSum > sum) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};
console.log(threeSum([15, 26, 13, 7, 3, 5, 2, 22], 30));

// max container

const maxContainer = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let curMax = 0;

  while (left < right) {
    let dist = right - left;
    let height = Math.min(heights[left], heights[right]);
    curMax = Math.max(curMax, dist * height);
    // move the pointer where height is smaller
    if (height[left] > height[right]) {
      // move right pointer to the left
      right--;
    } else {
      // move left pointer to the right
      left++;
    }
  }

  return curMax;
};
console.log("max area:", maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])); // max area: 49
