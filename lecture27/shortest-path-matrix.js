// Leetcode #733 Flood fill: https://leetcode.com/problems/flood-fill/description/


// DFS flood fill

var floodFill = function (image, sr, sc, color) {
    console.log('image: ', image)
    // remember to use a proper stack data structure IRL 
    const stack = [[sr, sc]]                    // Time: O(1), Space: O(1)
    const seen = new Set()                      // Time: O(1), Space: O(1)

    while (stack.length > 0) {                  // Time: O(m*n), Space: O(m*n) worst case
        const [curSr, curSc] = stack.pop() // pop the stack     // Time: O(1), Space: O(1)


        // convert position into a string for easy comparisio 
        const curPosStr = '' + curSr + curSc                    // Time: O(1), Space: O(1)
        // if we never seen this node before, process
        if (!seen.has(curPosStr)) {                             // Time: O(1), Space: O(1)
            seen.add(curPosStr)                                 // Time: O(1), Space: O(m*n) [seen] if full

            const floodVal = image[curSr][curSc] // get starting pixel value        // Time: O(1), Space: O(1)
            image[curSr][curSc] = color //update starting pixel to "color"          // Time: O(1), Space: O(1)

            const neighbors = [                                 // Time: O(1), Space: O(1)
                //list of all possible neighbors
                [curSr + 1, curSc],
                [curSr - 1, curSc],
                [curSr, curSc + 1],
                [curSr, curSc - 1],
            ]

            for (let [nSr, nSc] of neighbors) { //for each neighbor         // Time: O(1), Space: O(4)
                const nPossStr = '' + nSr + nSc                             // Time: O(1), Space: O(1)
                if (
                    !seen.has(nPossStr) && // never seen                            // Time: O(1)
                    nSr >= 0 && nSr < image.length && // withing image width        // Time: O(1)
                    nSc >= 0 && nSc < image[0].length && // within image height     // Time: O(1)
                    image[nSr][nSc] == floodVal // same pixel value with started    // Time: O(1)
                ) {
                    stack.push([nSr, nSc]) // push node on top the stack            // Time: O(1), Space: O(1)      
                }
            }
        }
    } // otherwise, ignore
    return image                                                            // Time: O(1), Space: O(1)

}


const image = [
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
  ]
  const sr = 1
  const sc = 1
  const color = 2
  
  console.log('flood filled image:', floodFill(image, sr, sc, color))