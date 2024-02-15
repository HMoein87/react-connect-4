
//determines the winner
export const isWinner = (gameBoard, currentMove, currentPlayer) => {
    //winning indexes
    const winLines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12],
    ];

    //copy the board and update the board with the last move
    let board = [...gameBoard];
    board[currentMove] = currentPlayer;

    //check if the winning indexes are taken by players and there is a winner
    for(let i = 0; i < winLines.length; i++) {
        const [c1, c2, c3, c4] = winLines[i];

        if (board[c1] > 0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]) {
                return true;
            }
    }
    return false;
}

//determines if the game is draw
export const isDraw = (gameBoard, currentMove, currentPlayer) => {
    //copy the board and update it with the last move
    let board = [...gameBoard];
    board[currentMove] = currentPlayer;

    //calculate cumulative sum of board array elements
    //if this sum equals to zero it means all elements in the board array are selected by players
    let count = board.reduce((n, x) => n + (x === 0), 0);

    return count === 0;
}