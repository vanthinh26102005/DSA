/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // count is number of needed operation
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // compare adj element
    // if increase strictly --> continue
    // else must do operation there
    if (nums[i] < nums[i + 1]) continue;
    else {
      let temp = nums[i + 1];
      nums[i + 1] = nums[i] + 1;
      // number of operation = previous element + 1 - itself
      count += nums[i + 1] - temp;
    }
  }
  return count;
};


//  RECURSIVE ************

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  /*
    Input:
        + nums: initially  array
        + count: variable for counting operation
    Process:
        + compare 2 adjacency elemetn--> strictly increase --> recursive
        + else swap it
        + logic: operation = nums[i+1] - temp;
    Output:
        + minSum = num1+num2
    */
  const calMinOperation = (nums, count, i) => {
    if (i >= nums.length - 1) return count;
    else {
      if (nums[i] < nums[i + 1]) return calMinOperation(nums, count, i + 1);
      else {
        let temp = nums[i + 1];
        nums[i + 1] = nums[i] + 1 ;
        count += nums[i + 1] - temp;
        return calMinOperation(nums, count, i + 1);
      }
    }
  };

  return calMinOperation(nums, 0, 0);
};
