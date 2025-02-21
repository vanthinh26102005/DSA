/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    const m = board.length;// row length                  // Time: O(1), Space: O(1)
    const n = board[0].length; // col length              // Time: O(1), Space: O(1)

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0], 
                        [-1, -1], [-1, 1], [1, -1], [1, 1]]; // Time: O(1), Space: O(8)

    // Count the number of mines around a given cell
    const countMine = (x, y) => {            // Time: O(1)
        let count = 0;
        for (const [dx, dy] of directions) { // Iterate through 8 directions -> O(8)
            const currentX = x + dx;    // Time: O(1), Space: O(1)
            const currentY = y + dy;    // Time: O(1), Space: O(1)
            if (
                currentX >= 0 && currentY >= 0 &&   // Time: O(1)
                currentX < m && currentY < n &&     // Time: O(1)
                board[currentX][currentY] === "M"   // Time: O(1)
            ) {
                count++;                            // Time: O(1)
            }
        }
        return count;
    };

    // BFS to reveal cells
    const BFS = (startX, startY) => {                // Time: O(m * n) worst case
        let queue = [[startX, startY]];              // Space: O(m * n) worst case if all cells are added to the queue

        while (queue.length > 0) {                   // BFS processes each cell at most once
            const [x, y] = queue.shift();            // Time: O(1)
            const mineCount = countMine(x, y);       // Time: O(8) , Space: O(1)

            if (mineCount > 0) {
                board[x][y] = mineCount.toString();  // Time: O(1) 
            } else {
                board[x][y] = 'B';
                for (const [dx, dy] of directions) { // Time: O(8), Space: O(1)
                    const currentX = x + dx;    // Time: O(1) , Space: O(1)
                    const currentY = y + dy;    // Time: O(1) , Space: O(1)
                    if (
                        currentX >= 0 && currentY >= 0 &&   // Time: O(1) 
                        currentX < m && currentY < n &&     // Time: O(1) 
                        board[currentX][currentY] === "E"   // Time: O(1) 
                    ) {
                        board[currentX][currentY] = 'B';    // Time: O(1) 
                        queue.push([currentX, currentY]); // Time: O(1)
                    }
                }
            }
        }
    };

    // base case: if clicked cell is a mine
    const [clickRow, clickCol] = click;
    if (board[clickRow][clickCol] === "M") {    // Time: O(1)
        board[clickRow][clickCol] = "X";  // end game // Time: O(1)
    } else {
        BFS(clickRow, clickCol);        // Time: O(m * n)  look above
    }

    return board;
};

/**
 * Complexity analysis:
 * Time Complexity: O(m * n)
 *  - In the worst case, every cell might be revealed, and each cell's 8 neighbors will be checked.
 *  - The BFS ensures that each cell is processed once.
 * 
 * Space Complexity: O(m * n)
 *  - The BFS queue can hold up to O(m * n) elements in the worst case.
 *  - No additional storage is used besides the queue and the board itself.
 */
