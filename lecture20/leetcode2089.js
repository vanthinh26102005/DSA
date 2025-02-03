/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {

    /// find lower bound
    const LB = (nums, x) => {
        let l = 0;
        let r = nums.length - 1;
        let lb = nums.length;
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            if (nums[m] === x) {
                lb = m;
                r = m - 1; // narrow the search range to the left
            } else if (nums[m] < x) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return lb;
    }

    // find upper bound
    const UB = (nums, x) => {
        let l = 0;
        let r = nums.length - 1;
        let ub = -1;
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            if (nums[m] === x) {
                ub = m;
                l = m + 1; // narrow the search range to the right
            } else if (nums[m] > x) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return ub;
    }
    nums.sort((a, b) => a - b); 
    const lb = LB(nums, target);
    const ub = UB(nums, target);
    const res = [];
    for (let i = lb; i <= ub; ++i) { // find search is narrowed
        res.push(i);
    }
    return res;
}





/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    
    nums.sort((a,b) => a-b);
    let res = []
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target) res.push(i)
    }
    return res;
};
