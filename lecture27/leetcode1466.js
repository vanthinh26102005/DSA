/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {

    let graph = new Map();                  // Time: O(1), Space: O(n)
    let bridge = new Set();                 // Time: O(1), Space: O(n)

    // build adjacency list 
    for (let [u, v] of connections) {       // Time: O(1), Space: O(n)
        if (!graph.has(u)) graph.set(u, []) // Time: O(1), Space: O(1)
        if (!graph.has(v)) graph.set(v, []) // Time: O(1), Space: O(1)

        //2 way - undirected edge for traversal
        graph.get(u).push(v);               // Time: O(1), Space: O(1)
        graph.get(v).push(u);               // Time: O(1), Space: O(1)

        // store initial direction from connections arr
        // input:   connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
        // output:  Set(5) { '0, 1', '1, 3', '2, 3', '4, 0', '4, 5' }
        bridge.add(`${u}, ${v}`)            // Time: O(1), Space: O(1)
    }

    let changes = 0                     // Time: O(1), Space: O(1)
    let visited = new Set()             // Time: O(1), Space: O(1)

    let stack = [0]
    while (stack.length > 0) {            // Time: O(n), Space: O(n)
        let city = stack.pop()
        visited.add(city);              // Time: O(1), Space: O(1)
        for (let neighbor of graph.get(city)) {  // Time: O(n),
            if (!visited.has(neighbor)) {
                // if initial direction is wrong => increase changes
                if (bridge.has(`${city}, ${neighbor}`)) changes++; // Time: O(1),
                // continue check
                stack.push(neighbor)
            }
        }
    }
    return changes;
};

console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]))

