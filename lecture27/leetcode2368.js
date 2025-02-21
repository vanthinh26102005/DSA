/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {

    // build a adjacency list for tree
    let graph = new Map()
    for(let i =0 ;i < n; i++) {                 // Time: O(1), Space: O(n)
        graph.set(i, [])
    }
    for( [a, b] of edges) {                     // Time: O(1), Space: O(n)
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    //console.log(graph);

    // init restricted point
    let restrictedSet = new Set(restricted);    // Time: O(set.size), Space: O(set.size)
    let visited = new Set();                    // Time: O(1), Space: O(n)

    let stack = [0];
    let count = 0
    while (stack.length > 0) {                    // Time: O(n), Space: O(n) recursive call stack
        let node = stack.pop()
        
        // if node has been visted or in restrict point => cancel count 
        if(visited.has(node) || restrictedSet.has(node)) continue;      // Time: O(1), Space: O(1)
        
        // else add node and start counting
        visited.add(node);                      // Time: O(1), Space: O(1)
        count++;                           // Time: O(1), Space: O(1)
        for(let neighbor of graph.get(node)){   // Time: O(n), Space: O(1)
            // recursive with the next possible node
            if(!visited.has(neighbor) && !restrictedSet.has(neighbor)) {
                stack.push(neighbor)
            }
        }
    }
    return count;

};

console.log(reachableNodes(7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], [4,5]))