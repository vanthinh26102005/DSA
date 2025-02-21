/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    //init map
    let map = new Map(); // store each num/index

    for (let i = 0; i < nums.length; i++) {
        // check  contains duplicate
        if (map.has(nums[i]) && (i - map.get(nums[i]) <= k)) {
            return true;
        }
        else {
            map.set(nums[i], i) //update last seen index
        } 
    }

    return false;
};