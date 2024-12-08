// find max element in given arr
const arr = [2, 4, 3, 9, 1];

const findMax = arr => {
    let curMax = arr[0];
    
    for(let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}]: `, arr[i]);
        (arr[i] > curMax) && (curMax = arr[i]);
    }
    return curMax;
}

console.log(findMax(arr));