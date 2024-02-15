import React, { useEffect, useState } from "react";

import '../Game.css'
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";

import { isDraw, isWinner } from "../winner";
import { getComputerMove } from "../ComputerPlayer";
import {
    GAME_STATE_PLAYING,
    GAME_STATE_DRAW,
    GAME_STATE_WIN,
    NO_PLAYER,
    PLAYER_1,
    PLAYER_2,
    No_CIRCLES,
} from "../Constants";

//GameBoard component
const GameBoard = () => {

    //define data or properties that need to be tracked
    const [gameBoard, setGameBoard] = useState(Array(No_CIRCLES).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGAmeState] = useState(GAME_STATE_PLAYING);
    const [ winnerPlayer, setWinnerPlayer] = useState(NO_PLAYER);

    //initialize the game after clicking New Game button using initGame function
    useEffect(() => {initGame()}, []);

    //this function set the required values to start a new game
    const initGame = () => {
        setGameBoard(Array(No_CIRCLES).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGAmeState(GAME_STATE_PLAYING);
    }

    //create and initialize the board
    const initBoard = () => {
        const circles = [];

        for(let i = 0; i < No_CIRCLES; i++) {
            circles.push(renderCircle(i))
        }
        return circles;
    }

    //this function will render GameCircle component as many times as needed
    const renderCircle = (id) => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} 
                onCircleClicked={circleClicked} />
    }

    //handles click on a circle and check the state of the game after each click
    const circleClicked = (id) => {

        //check if the circle is not clicked already
        if (gameBoard[id] !== NO_PLAYER) return;
        //check if the game state is playing
        if (gameState !== GAME_STATE_PLAYING) return;

        //check if there is a winner
        if (isWinner(gameBoard, id, currentPlayer)) {
            setGAmeState(GAME_STATE_WIN);
            setWinnerPlayer(currentPlayer);
        }

        //check if the game is draw
        if (isDraw(gameBoard, id, currentPlayer)) {
            setGAmeState(GAME_STATE_DRAW);
            setWinnerPlayer(NO_PLAYER);
        }

        //update the board after click
        const nextBoard = gameBoard.map((circle, pos) => {
            if (pos === id) return currentPlayer;
            return circle;
        })

        //update the board state after one click
        setGameBoard(nextBoard);

        //update the player after one click
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }
    
    //present computer move
    const suggestMove = () => {
        circleClicked(getComputerMove(gameBoard));
    }

    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winnerPlayer={winnerPlayer}/>
            <div className="gameBoard">{initBoard()}</div>
            <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState} />
        </>
    )
}

export default GameBoard;