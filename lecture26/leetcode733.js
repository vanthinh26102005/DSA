/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {

    // initial param
    const m = image.length; //row length              // Time: O(1), Space: O(1)
    const n = image[0].length;// col length            // Time: O(1), Space: O(1)
    // flag array (because can't use 0, 1)
    const visited = Array.from({ length: m }, () => Array(n).fill(false));  // Time: O(m * n), Space: O(m * n)
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Time: O(1), Space: O(1)

    // queue for BFS
    const queue = [];                     // Time: O(1), Space: O(m * n)  worst case
    const start = image[sr][sc];           // Time: O(1), Space: O(1)

    // early return
    if (start === color) return image;    // edge case: if start color is the same as the new color

    queue.push([sr, sc]);                 // Time: O(1),
    visited[sr][sc] = true;               // Time: O(1), 
    image[sr][sc] = color;                // Time: O(1), 

    while (queue.length > 0) {            // Time: O(m * n), Space: O(m * n) if all pixels need to be processed
        const [row, col] = queue.shift(); // Time: O(1), Space: O(1)
        for (const [dr, dc] of directions) { // four directions -> Time: O(4), Space: O(1)
            const newRow = row + dr;    // Time: O(1), Space: O(1)
            const newCol = col + dc;    // Time: O(1), Space: O(1)

            // if find the neighbor that has the same color => flood fill
            if ( 
                newRow >= 0 &&
                newRow < m &&
                newCol >= 0 &&
                newCol < n &&
                !visited[newRow][newCol] &&
                image[newRow][newCol] === start
            ) {
                image[newRow][newCol] = color;    // Time: O(1), 
                visited[newRow][newCol] = true;   // Time: O(1),
                queue.push([newRow, newCol]);     // Time: O(1), 
            }
        }
    }
    return image;
};

/**
 * Complexity analysis:
 * Time Complexity: O(m * n)
 *  - In the worst case, every pixel is visited once, so the time complexity is proportional to the number of pixels.
 * Space Complexity: O(m * n)
 *  - `visited` array takes O(m * n) space.
 *  - The BFS queue can hold up to O(m * n) elements in the worst case.
 */
