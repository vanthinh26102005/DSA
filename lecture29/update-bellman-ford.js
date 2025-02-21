// Shortest path, Bellman-Ford

// NO NEGATIVE weight cycle in graph is a MUST
const graph = [
    [[1, 4], [3, 5]], // node 0, index 0
    [[4, 7]], // node 1, index 1
    [[1, 3]], // node 2, index 2
    [[2, -10]], // node 3, index 3
    [], // node 4, index 4
]

// graph contains NEGATIVE weight cycle
const graphWrong = [
    [[1, 4], [3, 5]], // node 0, index 0
    [[4, 7], [3, 6]], // node 1, index 1
    [[1, 3]], // node 2, index 2
    [[2, -10]], // node 3, index 3
    [], // node 4, index 4
]


const shortestPathBellmanFord = (graph, sourceIdx) => {

    // STEP 1: transform graph from adjacency list to Vertices + Edges lists
    const vertices = [];            // Time: O(1), Space: O(n)
    const edges = [];               // Time: O(1), Space: O(e)

    for (let i = 0; i < graph.length; i++) {    // Time: O(n), Space: O(1)

        // list of node indices
        vertices.push(i)                        // Time: O(1), Space: O(1)

        // list of edges [from node, to node, weight]
        for (let j = 0; j < graph[i].length; j++) { // Time: O(n), Space: O(1)
            const [toNode, weight] = graph[i][j]        // Time: O(1), Space: O(1)
            edges.push([i, toNode, weight])     // Time: O(1), Space: O(e)
        }
    }

    console.log('vertices:', vertices)
    console.log('edges:', edges)

    // Step 2 : build initial result map
    const result = {}                       // Time: O(1), Space: O(n)
    for (let i = 0; i < vertices.length; i++) { // Time: O(n), Space: O(1)
        if (vertices[i] == sourceIdx) {     // Time: O(1), Space: O(1)
            result[i] = 0;                  // Time: O(1), Space: O(1)
            continue;
        }
        result[i] = Infinity                // Time: O(1), Space: O(1)
    }

    console.log('result: ', result)


    //  Step 3: relax the edges in n -1 times
    const relaxTimes = vertices.length - 1  // Time: O(1), Space: O(1)

    for (let i = 0; i < relaxTimes; i++) {  // Time: O(n), Space: O(1)
        for (let j = 0; j < edges.length; j++) {    // Time: O(n), Space: O(1)
            const [fromNode, toNode, weight] = edges[j];    // Time: O(1), Space: O(1)
            const newVal = Math.min(result[fromNode] + weight, result[toNode]) // Time: O(1), Space: O(1)

            console.log(`relax (${fromNode}, ${toNode}, val old: ${result[toNode]}, new: ${newVal}`)

            result[toNode] = newVal // Time: O(1), Space: O(1)
        }
    }

    // Step 4: relax again if can => false
    for (let j = 0; j < edges.length; j++) {    // Time: O(n), Space: O(1)
        const [fromNode, toNode, weight] = edges[j];    // Time: O(1), Space: O(1)
        
        if(result[fromNode] + weight < result[toNode]) // Time: O(1), Space: O(1)
            console.log("*** detect cycle ***")
        
        // return here 
        
    }
    return JSON.stringify(result, null, 4) // Time: O(n), Space: O(n)
}

const sourceIdx = 0

console.log(`Shortest path Bellman-Ford from node ${sourceIdx}:`, shortestPathBellmanFord(graph, sourceIdx))
console.log(`Shortest path graph has NEGATIVE cycle ${sourceIdx}:`, shortestPathBellmanFord(graphWrong, sourceIdx))