// find subnet of 3 elements, whose sum equals 15

const arr = [2, 4, 3, 9, 1]

const findSubArray3 = (arr, sum) => {
    const res = [];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for(let m =j+1; m <arr.length; m++) {
                console.log(`subset: [${[arr[i], arr[j], arr[m]]}]`);
                (arr[i] + arr[j] + arr[m] == sum) && res.push([arr[i], arr[j], arr[m]]) 
            }
        }
    }
    return res;
}

console.log(findSubArray3(arr, 15));

// Given sorted array of integers, find the index of number `65`
[1, 2, 4, 7, 9, 15, 21, 23, 34, 42, 48, 59, 60, 65, 70]

// FOR LOOP: O(n) -> loop through all options.
// Binary search: O(logn) -> much faster, does not visit unmeaningful options.