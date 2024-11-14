const arr = [3, 4, 5]

const increase1 = (arr) => {
    const one = 1                           // Time: 1, Space: 1
    const newArr = []                       // Time: 1, Space: _
    for (let i = 0; i < arr.length; i++ ){  // Time: n, Space: 1
        newArr[i] = arr[i] + one            // Time: n, Space n
    }
    return newArr                           // Time: 1, Space 0
}                              // Total ---------------------------
                                // Time: 2n+3, Space: n+2

console.log('increase1(arr): ', increase1(arr))  

//more efficient
const increase2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] +=1;
    }
    return arr
}
console.log('increase2(arr): ', increase2(arr))  
