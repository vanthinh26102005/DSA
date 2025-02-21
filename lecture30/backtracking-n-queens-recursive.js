// backtracking n queens recursive implementation

const backtrackNQueens = (n) => {

    const result = []               // Time: O(1), Space: O(n!)  all case
    const tempRes = []              // Time: O(1), Space: O(n)   n queens
    // tempRes [ [ 1, 0, 3 ], [ 2, 1, 3 ], [ 3, 2, 3 ], [ 4, 3, 3 ] ]
    // [ 1, 0, 3 ] -> [queenNum, queenRow, queenCol]

    const dfs = (queenNum, tempRes) => {

        ////////// STEP 2: KILL the branch with BOUNDING conditions

        // STEP 2.a: prepare the bounding conditions
        const cols = new Set()
        const forbiddenPos = new Set()

        for (let j = 0; j < tempRes.length; j++) {

            let row = tempRes[j][1] + 0
            let col = tempRes[j][2] + 0

            cols.add(col) // list of cols idx of all queens

            // // forbidden next queen diag postions
            for (let k = 0; k <= n; k++) {
                forbiddenPos.add('' + (row + 1 + k) + (col + 1 + k))
                forbiddenPos.add('' + (row - 1 - k) + (col - 1 - k))
                forbiddenPos.add('' + (row + 1 + k) + (col - 1 - k))
                forbiddenPos.add('' + (row - 1 - k) + (col + 1 + k))
            }
        }
        // get most recent queen added
        const [lqNum, lqRow, lqCol] = tempRes[tempRes.length - 1] || []

        // console.log('latestQ: ', lqNum, lqRow, lqCol)

        // STEP 2.b: apply bounding condition to kill this branch if
        if (
            forbiddenPos.has('' + lqRow + lqCol) || // queen same diag
            (cols.size !== tempRes.length) // queen same col
        ) {
            console.log('Killing this branch: ', lqNum, lqRow, lqCol)
            return // return to stop branching
        }
        ////////// STEP 2: KILL the branch with BOUNDING conditions done

        // console.log('tempRes: ', tempRes)
        // console.log('forbiddenPos: ', forbiddenPos)

        //
        // Step 1: FULL branch out:
        if (queenNum > n) {         
            result.push([...tempRes]) // MUST push a deep copy  // Time: O(1), Space: O(n)
            console.log('result: ', result)
            return
        }
        for (let i = 0; i < n; i++) {       // Time: O(n), Space: O(1)
            const qPos = [queenNum, queenNum - 1, i]// [queenNum, row, col] // Time: O(1), Space: O(1)
            tempRes.push(qPos)              // Time: O(1), Space: O(n)
            dfs(++queenNum, tempRes);       // Time: O(n!), Space: O(n)  -- recursive call stack
            tempRes.pop();                  // Time: O(1), Space: O(n)
            queenNum--                      // Time: O(1), Space: O(n)
        }
        ////////// STEP 1: FULL branch out done


    }

    dfs(1, tempRes)
    return result

}
                                        // Total -------------------------------
                                             // Time: O(n!), Space: O(n!) worst case


console.log('Queens successful setups:',  backtrackNQueens(4))
