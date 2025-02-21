
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    // init graph with empty arrays
    const graph = Array.from({ length: n }, () => []);  // Time: O(n), Space: O(n)

    // build adjacency list graph with `times` data
    for (const [nodeIdx, neighborIdx, travelTime] of times) {  // Time: O(times.length)
        graph[nodeIdx - 1].push([neighborIdx - 1, travelTime]);
    }

    // array for saving shortest distance to each node
    const dist = Array(n).fill(Infinity);  // Time: O(n), Space: O(n)
    dist[k - 1] = 0;    // Time: O(1)

    // priority queue to ensure handle shortest path first
    const minHeap = [[0, k - 1]];  // Time: O(1), Space: O(n)

    // Dijkstra's algorithm
    while (minHeap.length > 0) {                         // Time: O(n^2) due to sorting
        const [time, node] = minHeap.shift();            // Time: O(1)
        for (const [neighbor, weight] of graph[node]) {  // Time: O(times.length) --> each node's edges  
            const newTime = time + weight;
            if (newTime < dist[neighbor]) {
                dist[neighbor] = newTime;                 // Time: O(1)
                minHeap.push([newTime, neighbor]);       // Time: O(1)
                //shortert time first, sort to simulate priority queue
                minHeap.sort((a, b) => a[0] - b[0]);     // Time: O(n log n)
            }
        }
    }

    // get the maximum time it takes for all nodes to receive the signal
    const maxTime = Math.max(...dist);  // Time: O(n)

    // ff any node is unreachable, return -1
    return maxTime === Infinity ? -1 : maxTime;
};

/**
 * Complexity Analysis:
 * 
 * Time Complexity: O(n^2 + times.length * log n)
 * - Building the graph takes O(times.length)
 * - The main while loop iterates up to O(n^2) due to sorting in the min-heap
 * - Each `minHeap.sort` is O(n log n) in the worst case
 * 
 * Space Complexity: O(n + times.length)
 * - The graph takes O(times.length) space to store all edges
 * - The `dist` array takes O(n) space
 * - The min-heap can grow up to O(n)
 */