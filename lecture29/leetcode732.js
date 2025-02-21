
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {

    // STEP 1: transform graph from adjacency list to Vertices + Edges lists
    const vertices = [0];            // Time: O(1), Space: O(n)
    const edges = [];               // Time: O(1), Space: O(e)

    for (let i = 1; i <= n; i++) {
        vertices.push(i);
    }
    // edges = times 
    // for (let i = 0; i < times.length; i++) {
    //     const [fromNode, toNode, weight] = times[i];
    //     edges.push([fromNode, toNode, weight])
    // }
    // console.log('vertices:', vertices)
    // console.log('edges:', edges)

    // Step 2 : build initial result map
     const result = {}                       // Time: O(1), Space: O(n)
     for (let i = 1; i <= n; i++) { // Time: O(n), Space: O(1)
         if (vertices[i] === k) {     // Time: O(1), Space: O(1)
             result[i] = 0;                  // Time: O(1), Space: O(1)
             continue;
         }
         result[i] = Infinity                // Time: O(1), Space: O(1)
     }
 
    //  console.log('result: ', result)
 
      //  Step 3: relax the edges in n -1 times
    const relaxTimes = n - 1  // Time: O(1), Space: O(1)

    for (let i = 0; i < relaxTimes; i++) {  // Time: O(n), Space: O(1)
        for (let j = 0; j < times.length; j++) {    // Time: O(e), Space: O(1)
            const [fromNode, toNode, weight] = times[j];    // Time: O(1), Space: O(1)
            const newVal = Math.min(result[fromNode] + weight, result[toNode]) // Time: O(1), Space: O(1)

            // console.log(`relax (${fromNode}, ${toNode}, val old: ${result[toNode]}, new: ${newVal}`)

            result[toNode] = newVal // Time: O(1), Space: O(1)
        }
    }
    const res = Math.max(...Object.values(result))
    return res === Infinity ? -1 : res;
    
};


console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))
console.log(networkDelayTime([[1,2,1]], 2, 1))
console.log(networkDelayTime([[1,2,1]], 2, 2))

 