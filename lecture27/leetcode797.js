/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    
    let res = []; // for saving all possible paths                  // Time: O(1), Space: O(1)
    let destination = graph.length - 1;   // the end point          // Time: O(1), Space: O(1)
    let stack = [[0, [0]]];     // hold current node & current path     // Time: O(1), Space: O(1)

    while (stack.length > 0) {                      // Time: O(2 ^ n) - worst case
         
        let [node, path] = stack.pop();             // Time: O(1), Space: O(1)
        console.log([node, path])
        if (node === destination) {
            res.push(path);                         // Time: O(1), Space: O(n) / path
            //console.log('*********')
            continue;
        }
        for (let neighbor of graph[node]) {         // Time: O(n)
            // use [...] clones the array to preserve previous paths + add the neighbor.
            stack.push([neighbor, [...path, neighbor]]) // Time: O(n), Space: O(n)

        }
    }

    return res;
};

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))