/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    // initial param
    const m = grid.length; //row length              // Time: O(1), Space: O(1)
    const n = grid[0].length;// col length            // Time: O(1), Space: O(1)
    // flag array (because can't use 0, 1)
    const visited = Array.from({ length: m }, () => Array(n).fill(false));  // Time: O(m * n), Space: O(m * n)
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Time: O(1), Space: O(1)

    // queue for BFS
    const queue = [];                     // Time: O(1), Space: O(m * n)  worst case
    let count = 0; // number of island   // Time: O(n), Space: O(1)
    for (let i = 0; i < m; i++) {           // Time: O(n), Space: O(1)
        for (let j = 0; j < n; j++) {       // Time: O(n), Space: O(1)
            //early return
            if (grid[i][j] === "0" || visited[i][j] === true) continue;      // Time: O(1)
            queue.push([i, j]);                 // Time: O(1)
            visited[i][j] = true;               // Time: O(1)
            count++;                            // Time: O(1)
            while (queue.length > 0) {            // Time: O(m * n), Space: O(m * n) if all pixels need to be processed
                const [row, col] = queue.shift(); // Time: O(1), Space: O(1)
                for (const [dr, dc] of directions) { // four directions -> Time: O(4), Space: O(1)
                    const newRow = row + dr;  // Time: O(1), Space: O(1)
                    const newCol = col + dc;  // Time: O(1), Space: O(1)

                    // if find the neighbor that has the same color => flood fill
                    if (
                        newRow >= 0 &&
                        newRow < m &&
                        newCol >= 0 &&
                        newCol < n &&
                        !visited[newRow][newCol] &&
                        grid[newRow][newCol] === '1'
                    ) {
                        visited[newRow][newCol] = true;   // Time: O(1), 
                        queue.push([newRow, newCol]);     // Time: O(1), 
                    }
                }
            }
        }

    }
    return count;
};