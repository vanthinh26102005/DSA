/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // sort arr
  nums.sort((a, b) => a - b);
  let sum = 0;
  // 2 element will be a pair
  // our final sum is sum of odd element
  for (let i = 0; i < nums.length - 1; i = i + 2) {
    sum += nums[i];
  }
  return sum;
};

//  RECURSIVE ************

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  /*
    Input:
        + nums: initially array of number
        + sums: variable for counting pairSum
        + i : index for traverse array
    Process:
        + Sort array for greedy
        + Recursive with sum += nums[i] & increase 'i' by 2 
    Output: 
        + max pairSum
  */
  const calSum = (nums, sum, i) => {
    if (i >= nums.length -1) return sum;
    else {
      return calSum(nums, sum + nums[i], i + 2);
    }
  };

  return calSum(nums, 0, 0);
};
