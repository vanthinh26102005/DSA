/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let n = nums.length;
    let maxSum = ((n-0)*(n+1))/2;
    let curSum =0;
    for(let i in sums){
        curSum += i;
    }

    return maxSum -curSum;
};
