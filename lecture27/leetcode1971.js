var validPath = function(n, edges, source, destination) {
    
    
    // build adjacency list
    let graph = new Map();                          // Time: O(1), Space: O(n)
    for (let i = 0; i < n; i++) graph.set(i, []);   // Time: O(n), Space: O(n)
    for (let [u, v] of edges) {                     // Time: O(e), Space: O(e) - edge size
        graph.get(u).push(v);                       // Time: O(1), Space: O(1)
        graph.get(v).push(u);                       // Time: O(1), Space: O(n)
    }

    let visited = new Set();                        // Time: O(1), Space: O(n)
    let stack = [source];                           // Time: O(1), Space: O(n) - worst case

    while (stack.length > 0) {                      // Time: O(n) - worst case
        let node = stack.pop();
        // if find a path to destination => stop
        if (node === destination) return true;      // Time: O(1)
        // skip visted node
        if (visited.has(node)) continue;            // Time: O(1)

        visited.add(node);                          // Time: O(1), Space: O(1)
        // continue current path
        for (let neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {       
                stack.push(neighbor);               // Time: O(1), Space: O(1)
            }
        }
    }
    return false;
};
