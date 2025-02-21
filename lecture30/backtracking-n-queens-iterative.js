// backtracking iterative implementation - 4 queens

const backtrack4QueensIter = () => {

    const result = []                // Time: O(1), Space: O(4)  4 chess queen

    for (let i = 0; i < 4; i++) {           // Time: O(4), Space: O(1)
        for (let j = 0; j < 4; j++) {       // Time: O(4)
            const state2 = [                 // Time: O(1), Space: O(1)
                [1, 0, i], // [queenNum, row, col] aka [queen 1, row 0, col i]
                [2, 1, j],
            ]
            if (isBound(state2)) continue    // Time: O(1), Space: O(1)

            for (let k = 0; k < 4; k++) {    // Time: O(4), Space: O(1)
                const state3 = [             // Time: O(1), Space: O(1)
                    [1, 0, i],
                    [2, 1, j],
                    [3, 2, k],
                ]
                if (isBound(state3)) continue    // Time: O(1), Space: O(1)
                for (let l = 0; l < 4; l++) {    // Time: O(4), Space: O(1)
                    const state4 = [             // Time: O(1), Space: O(1)
                        [1, 0, i],
                        [2, 1, j],
                        [3, 2, k],
                        [4, 3, l],
                    ]
                    if (isBound(state4)) continue    // Time: O(1), Space: O(1)
                    result.push(state4)              // Time: O(1), Space: O(4) worst case
                }
            }
        }
    }

    return result
}

                                         // Total -------------------------------
                                         // Time: O(4⁴) = O(256) ~ O(1), Space: O(4) worst case

console.log('Queens successful setups:', backtrack4QueensIter())



/**
 * 
 * @param {*} tempRes [ [ 1, 0, 1 ], [ 2, 1, 2 ] ]
 * @returns true | false
 */

function isBound(tempRes) {
    // step2: kill the branch with bounding conditions
    // step2.a : prepare the bounding conditions

    const cols = new Set();                     // Time: O(1), Space: O(n)
    const forbiddenPos = new Set();             // Time: O(1), Space: O(n)

    for (let j = 0; j < tempRes.length; j++) {  // Time: O(4), Space: O(1)  n chesses => O(n)

        let row = tempRes[j][1] + 0 // deep copy             // Time: O(1), Space: O(1)
        let col = tempRes[j][2] + 0 // deep copy             // Time: O(1), Space: O(1)
        cols.add(col) // list of cols idx of all queeens     // Time: O(1), Space: O(1)


        // forbiden next queen diag positions
        for (let k = 0; k <= 4; k++) {       // Time: O(4), Space: O(1)
            forbiddenPos.add('' + (row + 1 + k) + (col + 1 + k))     // Time: O(1), Space: O(1)
            forbiddenPos.add('' + (row - 1 - k) + (col - 1 - k))     // Time: O(1), Space: O(1)
            forbiddenPos.add('' + (row + 1 + k) + (col - 1 - k))     // Time: O(1), Space: O(1)
            forbiddenPos.add('' + (row - 1 - k) + (col + 1 + k))     // Time: O(1), Space: O(1)
        }
    }

    // get most recent quenn added
    const [lqNum, lqRow, lqCol] = tempRes[tempRes.length - 1] || []      // Time: O(1), Space: O(1)

    // Step 2.b: apply bounding condition to kill this branch if
    if (
        forbiddenPos.has('' + lqRow + lqCol) || // queen same diag   // Time: O(1), Space: O(1)
        (cols.size !== tempRes.length) // queen same col             // Time: O(1), Space: O(1)
    ) {
        console.log( 'kill this branch: ', lqNum, lqRow, lqCol)
        return true; // stop branching
    }

    return false; //continue to branch
    //// STEp2 L kill the bracnh with BOUNDING conditions done
}
                                                        // Total -------------------------------
                                                        // Time: O(n), Space: O(n)


console.log(isBound([ [ 1, 0, 1 ], [ 2, 1, 2 ] ]))