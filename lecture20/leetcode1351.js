/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count =0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            (grid[i][j] < 0) && count++
        }
    }
    return count;
};
// best way
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count =0;
    let i = 0; // row
    let j = n-1; // col
    while(i < m && j>=0){
        if(grid[i][j] < 0) {
            count += m-i;
            j--;
        }
        else {
            i++;
        }
    }
    return count;
};