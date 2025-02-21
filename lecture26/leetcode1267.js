/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    const m = grid.length;                // Time: O(1), Space: O(1)
    const n = grid[0].length;             // Time: O(1), Space: O(1)

    const rowCount = Array(m).fill(0);    // Time: O(m), Space: O(m)
    const colCount = Array(n).fill(0);    // Time: O(n), Space: O(n)

    // Count the number of servers in each row and column
    for (let i = 0; i < m; i++) {         // Time: O(m)
        for (let j = 0; j < n; j++) {     // Time: O(n)
            if (grid[i][j] === 1) {
                rowCount[i]++;            // Time: O(1)
                colCount[j]++;            // Time: O(1)
            }
        }
    }

    // Count the servers that can communicate with at least one other server
    let count = 0;
    for (let i = 0; i < m; i++) {         // Time: O(m)
        for (let j = 0; j < n; j++) {     // Time: O(n)
            if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) { 
                count++;                  // Time: O(1)
            }
        }
    }

    return count;                         // Time: O(1)
};

/**
 * Complexity analysis:
 * Time Complexity: O(m * n)
 *  - The first nested loop counts servers in each row and column.
 *  - The second nested loop checks if each server can communicate with another.
 * 
 * Space Complexity: O(m + n)
 *  - `rowCount` takes O(m) space and `colCount` takes O(n) space.
 *  - The grid itself takes O(m * n) space but is not counted in auxiliary space.
 */
