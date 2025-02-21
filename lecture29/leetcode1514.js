4/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {

    // step1: build graph
    let graph = [];                             // Time: O(1), Space: O(e*2) ( 2 way)
    for (let i = 0; i < edges.length; i++) {    // Time: O(e), Space: O(1)
        let [fromNode, toNode] = edges[i];      // Time: O(1), Space: O(1)
        let prob = succProb[i];                 // Time: O(1), Space: O(1)
        graph.push([fromNode, toNode, prob]);   // Time: O(1), Space: O(1)
        graph.push([toNode, fromNode, prob]); // no directed graph - 2 way  // Time: O(1), Space: O(1)
    }

    // step2:  init prob
    let probArray = new Array(n).fill(0.0); // prob of all node is 0.0      // Time: O(n), Space: O(n)
    probArray[start_node] = 1.0 // start node is 100%                       // Time: O(1), Space: O(1)

    // step3: bellman - ford
    // relax n-1 times
    for (let i = 0; i < n; i++) {                           // Time: O(n), Space: O(1)
        let change = false;
        for (let [fromNode, toNode, prob]of graph) {        // Time: O(e), Space: O(1)
            // check if prob from src --> end increase
            if (probArray[fromNode] * prob > probArray[toNode]) { // Time: O(1), Space: O(1)
                probArray[toNode] = probArray[fromNode] * prob      // Time: O(1), Space: O(1)
                change = true;                                      // Time: O(1), Space: O(1)
            }
            // check if prob end --> src increase
            if (probArray[toNode] * prob > probArray[fromNode]) {   // Time: O(1), Space: O(1)
                probArray[fromNode] = probArray[toNode] * prob      // Time: O(1), Space: O(1)
                change = true;
            }
        }
        if(!change) break;          // Time: O(1), Space: O(1)
    }

    return probArray[end_node]; // Time: O(1), Space: O(1)

};

console.log(maxProbability(3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.2], 0, 2))