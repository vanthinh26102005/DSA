/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {

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
        return order.length === k ? order : []
    }

    let rowOrder = topoSort(k, rowConditions);
    console.log(rowOrder)
    if (rowOrder.length === 0) return [];

    let colOrder = topoSort(k, colConditions);
    console.log(colOrder)
    if (colOrder.length === 0) return [];



    // ánh xạ
    let rowPos = new Map()
    let colPos = new Map()

    for (let i = 0; i < k; i++) {
        rowPos.set(rowOrder[i], i)
        colPos.set(colOrder[i], i)
    }

    // điền 
    // setupmatrix k * k
    let matrix =  Array.from({ length: k }, () => Array(k).fill(0));
    for (let i = 1; i <= k; i++) {
        let r = rowPos.get(i);
        let c = colPos.get(i);
        matrix[r][c] = i;
    }

    return matrix;

};


console.log(buildMatrix(3, [[1, 2], [3, 2]], [[2, 1], [3, 2]]))

console.log(buildMatrix(3, [[1, 2], [2, 3], [3, 1], [2, 3]], [[2, 1]]))