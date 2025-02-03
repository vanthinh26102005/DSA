/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
        let left = 0;
        let right = arr.length-1;

        while(left <= right){
            //mid point
            let mid = Math.floor((left +right)/2);
        
            // check if  mid is peak
            if(arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1])
                return mid;
            // check left if arr is up
            else if(arr[mid] > arr[mid+1]){
                right = mid -1;
            }
            // check right if arr is down
            else if(arr[mid] < arr[mid+1]){
                left = mid + 1;
            }
        }
    return mid;
};

