/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function (maxTime, edges, passingFees) {

    const n = passingFees.length;           // Time: O(1), Space: O(1)

    // build adjacency list
    let graph = Array(n).fill(null).map(() => []);  // Time: O(n), Space: O(n)
    console.log('init: ', graph)

    for (let [u, v, times] of edges) {           // Time: O(e), Space: O(1)
        graph[u].push([v, times])                 // Time: O(1), Space: O(e)
        graph[v].push([u, times])                 // Time: O(1), Space: O(e)
    }
    console.log(graph)


    // min heap (priority queue)
    let pq = [[passingFees[0], 0, 0]] // [cost, time , city]     // Time: O(1), Space: O1n)
    let bestTime = Array(n).fill(Infinity);  // Time: O(1), Space: O(1)
    bestTime[0] = 0                          // Time: O(1)

    // dijkstra
    while (pq.length > 0) {              // Time: O(n * logn) - worst case
        pq.sort((a, b) => a[0] - b[0]) // sort by cost  // Time: O(n * logn), Space: O(n)
        console.log('after sort queue: ', pq)

        let [cost, time, city] = pq.shift();     // Time: O(1), Space: O(1) 

        // if we reached the last city return best cost
        if (city === n - 1) return cost;         // Time: O(1), Space: O(1)

        // exploir neigbor

        for (let [neighbor, travelTime] of graph[city]) {    // Time: O(edges), Space: O(1)
            let newTime = time + travelTime;                 // Time: O(1), Space: O(1)
            let newCost = cost + passingFees[neighbor]        // Time: O(1), Space: O(n)
            // continue check if <= maxTimes & better time than prev 
            // here use logic bestTime not better cost because
            // use prioriy queue  on link 29 (sort queue by cost)
            if (newTime <= maxTime && newTime < bestTime[neighbor]) {    // Time: O(1), Space: O(1)
                bestTime[neighbor] = newTime;                            // Time: O(1), Space: O(1)
                pq.push([newCost, newTime, neighbor])                   // Time: O(1), Space: O(n)
                console.log('current queue: ', pq)                  
            }
        }
    }
    return -1;
};

console.log(minCost(30, [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]], [5, 1, 2, 20, 20, 3]))
//console.log(minCost(29, [[0, 1, 10], [1, 2, 10], [2, 5, 10], [0, 3, 1], [3, 4, 10], [4, 5, 15]], [5, 1, 2, 20, 20, 3]))