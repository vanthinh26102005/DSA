const arr = [1, 2, 4, 7, 9, 15, 21, 23, 32, 42, 49, 59, 60, 65, 70]
const num = 65

const find = (arr, num) => {
    let res = 'does not exist'
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.ceil((left + right) / 2)
        console.log('left: ', left, ', mid: ', mid, ', right', right)
        console.log(arr[left], arr[mid], arr[right])
        
        if(arr[mid] === num) {
            res = mid
            break;
        }
        else if(arr[mid] < num) {// > mid => find on right side
            left = mid + 1
        }
        else if(arr[mid] > num){// < mid => find on left side
            right = mid - 1
        }
    }

    return res;
}

// time complexity: halve data in each iteration => O(log(n))
console.log(`index of ${num} :`, find(arr, num));