// leetcode268 - recursive
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let n = nums.length;
    let maxSum = (n * (n + 1)) / 2;
    const calculateSum = (nums, index) => {
        if (index === nums.length) return 0;
        return nums[index] + findMissing(nums, index + 1)
    }
    let currentSum = calculateSum(nums, 0);
    return maxSum - currentSum;
};

//  **********************************

//leetcode2089 - recusive
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {

    nums.sort((a, b) => a - b);
    let res = []
    const findIndices = (nums, target, index, res) => {
        if (index === nums.length) return res;
        if (nums[index] === target) res.push(index);
        return findIndices(nums, target, index + 1, res)
    }
    return findIndices(nums, target, 0, []);
};


//  **********************************

// leetcode1351 - recursive

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    // row - col - number of negative
    const countNega = (i, j, count) => {
        if (i >= m || j < 0) return count
        if (grid[i][j] < 0) {
            return countNega(i, j - 1, count + m - i)
        }
        else {
            return countNega(i + 1, j, count)
        }
    };
    return countNega(0, n - 1, 0)

};

// leetcode1011 - recursive
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {

    const checkSuit = (weight, days, capacity) => {
        let curWeight = 0;
        let time = 1;
        for (let w of weights) {
            if (curWeight + w > capacity) {
                time += 1;
                curWeight = 0;
            }
            curWeight += w;
        }
        return time > days
    }
    //left is maxWeight of 1 packet
    //right is sumWeight of all packets
    const binarySearch = (weights, left, right, days) => {
        if (left >= right) return left;
        let mid = Math.floor((left + right) / 2);
        if (checkSuit(weights, days, mid)) return binarySearch(weights, mid + 1, right, days);
        else return binarySearch(weights, left, mid, days)
    }
    let left = 0; right = 0;
    // create an array of suitable weight and binary search on it
    for (let w of weights) {
        left = Math.max(left, w);
        right += w;
    }
    return binarySearch(weights, left, right, days)
};

// leetcode1346 - recursive
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {

    arr.sort((a, b) => a - b)

    // search for target index;
    const binarySearch = (arr, left, right, target, currentIndex) => {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target && mid !== currentIndex) return true;
        else if (arr[mid] > target)
            return binarySearch(arr, left, mid - 1, currentIndex)
        else if (arr[mid] < target)
            return binarySearch(arr, mid + 1, right, currentIndex)
    }

    // recurive search 
    const findDouble = (arr, index) => {
        if (index >= arr.length) return false;
        let target = arr[index] * 2;
        let left = 0;
        right = arr.length - 1;

        if (binarySearch(arr, left, right, target, index)) {
            return true;
        }
        return findDouble(arr, index + 1)
    }

    return findDouble(arr, 0)
};
