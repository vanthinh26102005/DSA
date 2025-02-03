/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const times = Math.floor(nums.length / 2);
  const numCount = {};

  // iterate through nums array to count each number
  for (let i = 0; i < nums.length; i++) {
    // if number is already in numCount, increment the count
    if(numCount[nums[i]]){
        numCount[nums[i]]++;
    }
    // if number is not in numCount, initialize with its count = 1
    else {
        numCount[nums[i]] = 1;
    }
    // find the number that appears more than n/2 times => break here
    if(numCount[nums[i]] > times){
        return nums[i];
    }
  }
};
// time complexity: O(n) space complexity: O(n)


