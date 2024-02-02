import React, { useState } from "react";

import '../Game.css'
import GameCircle from "./GameCircle";

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {

    const [gameBoard, setgameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
    console.log(gameBoard);

    const circleClicked = (id) => {
        console.log("circle clicked" + id);

        const board = [...gameBoard];
        board[id] = currentPlayer;
        setgameBoard(board);

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBoard);
        console.log(currentPlayer);
    } 

    const renderCircle = (id) => {
        return <GameCircle id={id} className={`player_${gameBoard[id]}`} 
                onCircleClicked={circleClicked} />

    }

    return (
        <div className="gameBoard">
            {Array.from({length:16}).map((_,index) => (
                renderCircle(index)
            ))}        
        </div>
    )
}

export default GameBoard;