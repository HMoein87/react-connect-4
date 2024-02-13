
export const getComputerMove = (gameBoard) => {
    let validMoves = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            validMoves.push(i);
        }
    }

    let rndMove = Math.floor(Math.random() * validMoves.length);
    return validMoves[rndMove];
}