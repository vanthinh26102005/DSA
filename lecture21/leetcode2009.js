/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {

    // use map to save 
    const indexedNums = nums.map((num, idx) => ({ num, idx }));
    const topK = indexedNums
        .sort((a, b) => b.num - a.num) // sort by value descending
        .slice(0, k)                  // take the top k elements - for maximum
        .sort((a, b) => a.idx - b.idx); // sort back by original index
    // Extract and return the values
    return topK.map(item => item.num);
};

//  RECURSIVE ************
