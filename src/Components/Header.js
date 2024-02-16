import React from 'react'

import {
  GAME_STATE_IDLE,
  GAME_STATE_DRAW,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  PLAYER_1,
} from "../Constants";

//header component
//this component displays the game state and the player turn
const Header = ({gameState, currentPlayer, winnerPlayer, playerNumber, onOnePlayerClick, onTwoPlayerClick}) => {

  //checks the game state to display the right label
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_IDLE:
        return <div>{idleState()}</div>
      case GAME_STATE_PLAYING:
        if (playerNumber === PLAYER_1 && currentPlayer !== PLAYER_1){
          return <div>Computer Trun</div>
        } else if (playerNumber === PLAYER_1 && currentPlayer === PLAYER_1) {
          return <div>Your turn</div>
        } else {
          return <div>Player {currentPlayer} Trun</div>
        }
      case GAME_STATE_WIN:
        if (playerNumber === PLAYER_1 && winnerPlayer !== PLAYER_1)
          return <div>Computer won!</div>
        return <div>Player {winnerPlayer} won!</div>
      case GAME_STATE_DRAW:
        return <div>Game is a Draw!</div>
      default:
    }
  }

  const idleState = () => {
     return <>
     <p>Please select number of players:</p>
     <button onClick={onOnePlayerClick}>1 Player</button>
     <button onClick={onTwoPlayerClick}>2 Players</button>
     </>
  }

  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}

export default Header