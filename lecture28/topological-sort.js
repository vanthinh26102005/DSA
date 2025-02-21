
// Topological Sort - steps to get ready for school

// step 1: build the graph:
// relationship between what should be done first
// NO cycle in graph is a MUST
const graph = [
    [1], // Socks, index 0
    [2], // Shoes, index 1
    [3], // Shirt, index 2
    [4], // Jacket, index 3
    [5], // Backpack, index 4
    [], // School, index 5
    [7], // Underwear, index 6
    [2], // Pants, index 7
]

// nodes' information
const idxToItem = {
    '0': { name: 'Socks' },
    '1': { name: 'Shoes' },
    '2': { name: 'Shirt' },
    '3': { name: 'Jacket' },
    '4': { name: 'Backpack' },
    '5': { name: 'School' },
    '6': { name: 'Underwear' },
    '7': { name: 'Pants' },
}


// topological sort ( DFS then reverse)
const topoSort = (graph) => {
    const seen = new Set();         // Time: O(1), Space: O(n)
    let res = [];                    // Time: O(1), Space: O(n)

    const dfs = (initNodeIdx) => {

        const stack = [initNodeIdx]     // Time: O(1), Space: O(n)
        const temp = []                 // Time: O(1), Space: O(n)

        while (stack.length > 0) {      // Time: O(n)
            const curNodeIdx = stack.pop() // pop the stack // Time: O(1)

            // if we've never seen this node before, process, 
            // otherwise, ignore the node
            if (!seen.has(curNodeIdx)) {

                seen.add(curNodeIdx) // add this node to seen list  // Time: O(1)

                const curNodeNeighbors = graph[curNodeIdx]; // get the neighbors    // Time: O(1)

                curNodeNeighbors.forEach(nodeIdx =>  // Time: O(e) 
                    !seen.has(nodeIdx) && stack.push(nodeIdx)) // push neighbor on top
                    
                temp.push(idxToItem[curNodeIdx].name) // save current node to temp
            }
        }
        res.push(temp);                 // Time: O(n)
        console.log('result: ', res)
    }

    //make sure every single node is visited
    for (let i = 0; i < graph.length; i++) {  // Time: O(n)
        if (!seen.has(i)) dfs(i)
    }

    // reverse
    res.reverse();          // Time: O(n)
    console.log('result after reverse: ', res)

    return res.flat().join(' -> ')      // Time: O(n)
}

console.log('Getting ready for school:', topoSort(graph)) // Underwear -> Pants -> Socks -> Shoes -> Shirt -> Jacket -> Backpack -> School