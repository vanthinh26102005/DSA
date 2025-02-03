/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {

    arr.sort((a, b) => a - b)


    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i] * 2;
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            //mid point
            let mid = Math.floor((left + right) / 2);
            // check if  mid is peak
            if (arr[mid] === temp)
                return true;
            // check left if arr is up
            else if (arr[mid] > temp) {
                right = mid - 1;
            }
            // check right if arr is down
            else if (arr[mid] < temp) {
                left = mid + 1;
            }
        }
    }
    return false;

};