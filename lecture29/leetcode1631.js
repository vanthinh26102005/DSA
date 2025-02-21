/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    // row/col length
    const rows = heights.length;            // Time: O(1), Space: O(1)
    const cols = heights[0].length;         // Time: O(1), Space: O(1)

    // left - right - up - down
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]        // Time: O(1), Space: O(1)

    // Step 1 : init effort - maxtrix rows * cols
    // base on this graph we can find path wwith minmum effort
    // Time: O(rows*cols), Space: O(rows*cols)
    let effort = Array.from({ length: rows }, () => Array(cols).fill(Infinity));    
    effort[0][0] = 0        // Time: O(1), Space: O(1)

    console.log('effort: ', effort)
    // Step 2 build edge list - for Bellman-Ford
    // format: [fromNode, toNode, weight]
    let edges = []          // Time: O(1), Space: O(row * col * 1)  worst case each cell has 4 neighbour
    for (let r = 0; r < rows; r++) {                // Time: O(rows),
        for (let c = 0; c < cols; c++) {            // Time: O(cols), 
            for (let [dr, dc] of direction) {       // Time: O(4), 

                // newRow - newCol --> toCell
                let nr = r + dr;                    // Time: O(1), 
                let nc = c + dc;                    // Time: O(1),

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {             // Time: O(1),
                    let weight = Math.abs(heights[r][c] - heights[nr][nc]);
                    // r,c: fromCell --> nr, nc: toCell --> weight 
                    edges.push([r, c, nr, nc, weight])                          // Time: O(1), Space: O(1)
                }
            }
        }
    }

    console.log('edeg:', edges)

    // Step 3 Bellman-ford for find minimun effort path
    // matrix has row * col cells => relax row * col - 1 times
    // here use flood fill
    for (i = 0; i < rows * cols - 1; i++) { // Time: O(row * col -1),

        let changed = false; //flag for no that we have checked the last cell // Time: O(1), Space: O(1)
        
        for (let [r, c, nr, nc, weight] of edges) {             // Time: O(row * col * 4), 

            let maxEffort = Math.max(effort[r][c], weight);     // Time: O(1)

            if (maxEffort < effort[nr][nc]) {                   // Time: O(1)
                effort[nr][nc] = maxEffort                      // Time: O(1), 
                changed = true;                                 // Time: O(1), 
                console.log('cur:', effort)
            }
        }
        // if there is no change => checked that last cell
        // no more to relax => early return here
        if (!changed) break;
    }
    console.log('final: ', effort)
    return effort[rows - 1][cols - 1]                            // Time: O(1),

};


console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]))