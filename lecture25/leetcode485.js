/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let count = 0;
    let result = 0;
    //use sliding window 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            // update res
            result = Math.max(result, count);
            count = 0;
        }
        else count++;
    }

    return Math.max(result, count); // update max again
};


console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))

