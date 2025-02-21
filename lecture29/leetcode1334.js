/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {

    let minNeighbor = n;            // Time: O(1), Space: O(1)
    let bestCity = -1;              // Time: O(1), Space: O(1)

    // Bellman-ford for each city 
    for (let startCity = 0; startCity < n; startCity++) {       // Time: O(n), Space: O(1)
        // take each city as source
        let dist = new Array(n).fill(Infinity);                 // Time: O(n), Space: O(n)
        dist[startCity] = 0;                                    // Time: O(1), 

        // relax n - 1 times 
        for (let i = 0; i < n - 1; i++) {                       // Time: O(n-1), Space: O(1)
            for (let [u, v, weight] of edges) {                 // Time: O(e), Space: O(1)

                if(dist[u] + weight < dist[v]){                 // Time: O(1),
                    dist[v] = dist[u] + weight;                 // Time: O(1), 
                }
                // becasue undirected graph                     
                if(dist[v] + weight < dist[u]) {                // Time: O(1), 
                    dist[u] = dist[v]  + weight;                // Time: O(1), 
                }
            }
        }
        // dist return the all shortest path from startCity to another city
        console.log(`city ${startCity}:`, dist);
        // filter dist => find city satisfies <= distance threshold 
        let count = dist.filter(d => d <= distanceThreshold).length - 1; // Time: O(n), Space: O(1)
        console.log(`city ${startCity} after filter:`, dist.filter(d => d <= distanceThreshold) )
        // ensure return the city with the greatest number.
        if(count <= minNeighbor) {          // Time: O(1),
            minNeighbor = count;            // Time: O(1),
            bestCity = startCity            // Time: O(1),
        }
    }

    return bestCity;

};

console.log(findTheCity(4, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], 4))
console.log(findTheCity(6, [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], 30))