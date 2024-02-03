import React, { useState } from "react";

import '../Game.css'
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";


const No_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)

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
        const nextBoard = gameBoard.map((circle, pos) => {
            if (pos === id) return currentPlayer;
            return circle;
        })

        setGameBoard(nextBoard)

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    } 

    return (
        <>
            <Header player={currentPlayer}/>
            <div className="gameBoard">
                {initBoard()}        
            </div>
            <Footer />
        </>
    )
}

export default GameBoard;