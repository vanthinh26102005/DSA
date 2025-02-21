/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
    //get order
    /*
        Input: k = 3, rowConditions = [[1, 2], [3, 2]] || colConditions = [[2, 1], [3, 2]]
        Process: use topological sort to get the order of the courses 
        Output:  the order that satisfy above/below - left/right Ex:[ 3, 1, 2 ] || [ 3, 2, 1 ]
    */
    const topoSort = (k, conditions) => {
        // build adj list 
        const graph = new Map()
        const inDegree = new Array(k + 1).fill(0);

        for (let [u, v] of conditions) {
            if (!graph.has(u)) graph.set(u, []);
            graph.get(u).push(v)
            inDegree[v]++;
        }
        // DFS
        let stack = [];
        for (let i = 1; i <= k; i++) {
            if (inDegree[i] === 0) stack.push(i)
        }

        console.log('stack: ', stack)

        // find possible order
        let order = [];
        while (stack.length > 0) {
            const cell = stack.pop();
            order.push(cell)

            if (graph.has(cell)) {
                for (let neighbor of graph.get(cell)) {
                    inDegree[neighbor]--;
                    if (inDegree[neighbor] === 0) {
                        stack.push(neighbor)
                    }
                }
            }
        }
        // if the no path to all cell => cycle detection => return []
        return order.length === k ? order : []
    }
    // The same complexity to leetcode#207: Course schedule:
    /*
    Complexity :  
        Time: O(n + e) →  in the worst case, store all prereq(e) & 1 course has ‘n’ Course
         Space:  O(n + e) →  store the graph(e) & numberPre(e) & noPreCourse(n)
    */
    //  k === n

    // the order of row condition
    let rowOrder = topoSort(k, rowConditions);      // Time: O(n+e), Space: O(n+e)
    console.log('row order: ', rowOrder)
    // if has cycle => return []
    if (rowOrder.length === 0) return [];           // Time: O(1), Space: O(1)

    // the order of cols condition
    let colOrder = topoSort(k, colConditions);      // Time: O(n+e), Space: O(n+e)
    console.log('col order: ', colOrder)

    // if has cycle => return []
    if (colOrder.length === 0) return [];           // Time: O(1), Space: O(1)


    // mapping
    let rowPos = new Map()
    let colPos = new Map()


    for (let i = 0; i < k; i++) {                   // Time: O(n), Space: O(1)
        rowPos.set(rowOrder[i], i)                  // Time: O(1), Space: O(n)               
        colPos.set(colOrder[i], i)                  // Time: O(1), Space: O(n)
    }
    console.log('rowPos: ', rowPos)
    console.log('colPos: ', colPos)

    // điền 
    // setupmatrix k * k
    let matrix = Array.from({ length: k }, () => Array(k).fill(0));
    for (let i = 1; i <= k; i++) {                  // Time: O(n), Space: O(1)
        let r = rowPos.get(i);                  // Time: O(1), Space: O(1)
        let c = colPos.get(i);                  // Time: O(1), Space: O(1)
        matrix[r][c] = i;
    }

    return matrix;

};


console.log(buildMatrix(3, [[1, 2], [3, 2]], [[2, 1], [3, 2]]))
console.log('*********************')
console.log(buildMatrix(3, [[1, 2], [2, 3], [3, 1], [2, 3]], [[2, 1]]))