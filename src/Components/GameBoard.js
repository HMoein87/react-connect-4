import React, { useState } from "react";

import '../Game.css'
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";

import { isWinner } from "../winner";
import {
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    NO_PLAYER,
    PLAYER_1,
    PLAYER_2,
    No_CIRCLES,
} from "../Constants";

const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGAmeState] = useState(GAME_STATE_PLAYING);
    const [ winnerPlayer, setWinnerPlayer] = useState(NO_PLAYER);

    const initBoard = () => {
        const circles = [];

        for(let i = 0; i < No_CIRCLES; i++) {
            circles.push(renderCircle(i))
        }
        return circles;
    }

    const renderCircle = (id) => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} 
                onCircleClicked={circleClicked} />
    }

    const circleClicked = (id) => {

        if (gameBoard[id] !== NO_PLAYER) return;

        if (isWinner(gameBoard, id, currentPlayer)) {
            setGAmeState(GAME_STATE_WIN);
            setWinnerPlayer(currentPlayer);
        }

        const nextBoard = gameBoard.map((circle, pos) => {
            if (pos === id) return currentPlayer;
            return circle;
        })

        setGameBoard(nextBoard)

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    } 

    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winnerPlayer={winnerPlayer}/>
            <div className="gameBoard">{initBoard()}</div>
            <Footer />
        </>
    )
}

export default GameBoard;