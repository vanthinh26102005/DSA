/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {

    // Step 2 : build initial result map
    let result = new Array(n).fill(Infinity);   // Time: O(n), Space: O(n)
    result[src] = 0;                            // Time: O(1), Space: O(1)

    // just need to iterate k +1 times
    for (let i = 0; i <= k; i++) {              // Time: O(k), Space: O(1)
        let prevResult = [...result];           // Time: O(n), Space: O(n)

        //console.log('prev: ', prevResult)

        for ([fromNode, toNode, weight] of flights) {   // Time: O(e), Space: O(1)
            if (prevResult[fromNode] !== Infinity) {    // Time: O(1), Space: O(1)
                result[toNode] = Math.min(result[fromNode] + weight, result[toNode]) // Time: O(1), Space: O(1)
            }
            //console.log('cur res:',result);
        }
    }
    //console.log(result);
    return result[dst];
};

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1))
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1))
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0))