/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var longestOnes = function (nums, k) {
    let i = 0; // left pointer - start point of window
    let j = 0; // right pointer  - endpoint of window

    //console.log(nums.length)
    // increase j to increase window size
    for (; j < nums.length; j++) {
        // check number of times 0 can be flipped remaining
        if (nums[j] === 0) k--;
        // if no more times => increase i 
        if (k < 0 && nums[i++] === 0) k++; 
        console.log('i: ', i, ' ', 'j: ', j)
    }
    console.log('curren wnd size: ', 'i: ', i, ' ', 'j: ', j)
    return j - i;
};
// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))