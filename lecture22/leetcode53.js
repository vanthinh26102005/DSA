/**
 * @param {number[]} nums
 * @return {number}
 */


// FOR loop 
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    // iterate through nums array
    for (let i = 1; i < nums.length; i++) {
      let n = nums[i];
      // compare currentSum + n and n 
      // if n > currentSum + n => new subArray start from n
      currentSum = Math.max(n, currentSum + n); 
      maxSum = Math.max(maxSum, currentSum); // compare maxSum and currentSum
    }
    return maxSum;
  };

// Divide and Conquer

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // find the maximum crossing sum
    function maxCrossingSum(nums, left, mid, right) {
      let leftSum = -Infinity, rightSum = -Infinity;
  
      // left part sum
      let sum = 0;
      for (let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
      }
  
      // right part sum
      sum = 0;
      for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
      }
  
      // the total max crossing sum
      return leftSum + rightSum;
    }
  
    
    function findMaxSub(nums, left, right) {
      if (left === right) {
        return nums[left];
      }
  
      const mid = Math.floor((left + right) / 2);
  
     // divide
      const leftSum = findMaxSub(nums, left, mid);
      const rightSum = findMaxSub(nums, mid + 1, right);
      //conquer - find max sum
      const crossSum = maxCrossingSum(nums, left, mid, right);
  
      //  max of the three is the output
      return Math.max(leftSum, rightSum, crossSum);
    }

    return findMaxSub(nums, 0, nums.length - 1);
  };
  
  

