function solveSudoku4x4(board) {
    // follow sudoku rule
    const check = (board, row, col, num) => {
        // check row
        for (let i = 0; i < 4; i++) {
            if (board[row][i] === num) return false;
        }

        //check col
        for (let i = 0; i < 4; i++) {
            if (board[i][col] === num) return false;
        }

        //check 2x2 subgrid 
        const gridRow = Math.floor(row / 2) * 2;
        const gridCol = Math.floor(col / 2) * 2;

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                if (board[gridRow + i][gridCol + j] === num) return false;
            }
        }
        return true;
    };

    const solve = () => {
        // initial board with index 0 is empty:
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (board[row][col] === 0) { //if empty
                    // check rule then add (check 1->4)
                    for (let num = 1; num <= 4; num++) {
                        if (check(board, row, col, num)) {

                            board[row][col] = num; // add here

                            if (solve()) return true; // recursive

                            board[row][col] = 0; //backtrack
                        }
                    }
                    return false;
                }
            }
        }
        return true; // solved
    };

    if(solve()) return board;
    else return "No way !!!"

}

let board = [
    [1, 0, 0, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [4, 0, 0, 3],
];

console.log(solveSudoku4x4(board))