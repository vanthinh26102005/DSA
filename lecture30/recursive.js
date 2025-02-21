// Backtracking RECURSIVE implementation

const backtrackingRecursive = () => {
    const result = []
    const tempRes = []

    const dfs = (tempRes) => {

        // STEP 2: apply bounding conditions to stop unmeaningful branching
        if (tempRes) {
            return // stop branching
        }

        // otherwise . let the recursive run

        // STEP 1: dfs to collect all possible outcomes
        if (quennNum > n) {
            result.push([...tempRes]) // MUST push a deep copy
            // console.log('result: ', result)
            return;
        }

        for(let i=0;i <n; i++) {
            const qPos = [quennNum, quennNum - 1, i]// [queenNum, row, col]
            tempRes.push(qPos)
            dfs(++queenNum, tempRes); // recursive here
            tempRes.pop() // after done
            quennNum--;
        }
    }
    dfs( xxx )
    
    return result
}



