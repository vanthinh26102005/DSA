// find subnet of 4 elements, whose sum equals 10

const arr = [1, 3, 4, 5, 6, 2]

const findSubArray4 = (arr, sum) => {
    const res = [];

    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 2; j++) {
            for (let m = j + 1; m < arr.length - 1; m++) {
                for (let n = m + 1; n < arr.length; n++) {
                    console.log(`subset: [${[arr[i], arr[j], arr[m], arr[n]]}]`);
                    if (arr[i] + arr[j] + arr[m] + arr[n] == sum) {
                        res.push([arr[i], arr[j], arr[m], arr[n]]);
                        return res;
                    }
                }
            }
        }
        return [];
    }
}
console.log(findSubArray4(arr, 10))


//  another choice: use 2 pair sum

const other4 = (arr, sum) => {
    const pair = new Map();

    // first pair
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const pairSum = arr[i] + arr[j];
            if (!pair.has(pairSum)) {
                pair.set(pairSum, []) // set cặp thuộc tính
            }
            pair.get(pairSum).push([i, j]);
        }
    }

    // second pair
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const currentSum = arr[i] + arr[j];
            const needSum = sum - currentSum;

            if (pair.has(needSum)) {
                for(const [m, n] of pair.get(needSum)) {
                    if( m != i && m != j && n != i && n != j){
                        return [arr[i],  arr[j], arr[m], arr[n]];
                    }
                }
            }
        }
        return [];
    }

}

console.log(other4(arr, 10));