/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        //mid point
        let mid = Math.floor((left + right) / 2);

        // check if  mid is alone
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1])
            return arr[mid];
        /*
        base on test case => 2 case - answer is on the right side:
            + index mid is even && duplicate at the next;
            + index mid is odd && duplicate at the previous;
        */
        if ((mid % 2 === 0 && arr[mid] === arr[mid + 1]) 
        || (mid % 2 === 1 && arr[mid] === arr[mid - 1])) 
        {
            left = mid + 1;
        }
        // check left for remaining case
        else {
            right = mid - 1;
        }
    }
    return -1;
};