const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(matrix[1]);

//RECURSION
const RecursionPrint = (arr) => {

    // row by row
    const printRow = (arr, row) => {
        if (row >= arr.length) {
            return
        }
        console.log(arr[row]);
        printRow(arr, row + 1)
    }
    console.log('=====Row by Row======')
    printRow(arr, 0)


    // col by col
    const printCol = (arr, row, col, temp = []) => {
        if (col >= arr.length) { // handle all col
            return;
        }
        if (row >= arr.length) { // handle all row in 1 col
            console.log(temp);
            return printCol(arr, 0, col + 1)// handle next col (reset temp)
        }
        temp.push(arr[row][col])
        printCol(arr, row + 1, col, temp) //handle next row in 1 col
    }
    console.log('=====Col by Col======')
    printCol(arr, 0, 0)

}
RecursionPrint(matrix)

//FOR
// row by row
const ForPrint = (arr) => {
    // row by row

    const printRow = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    console.log('=====Row by Row======')
    printRow(arr)


    // col by col
    const printCol = (arr) => {
        for(let i=0; i<arr.length; i++){ //col
            const temp = [];
            for(let j=0; j<arr.length; j++){ //row
                temp.push(arr[j][i])
            }
            console.log(temp)
        }
    }
    console.log('=====Col by Col======')
    printCol(arr)

}
ForPrint(matrix)


