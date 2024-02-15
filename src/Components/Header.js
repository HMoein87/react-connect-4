import React from 'react'

import {
  GAME_STATE_DRAW,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
} from "../Constants";

//header component
//this component displays the game state and the player turn
const Header = ({gameState, currentPlayer, winnerPlayer}) => {

  //checks the game state to display the right label
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player {currentPlayer} Trun</div>
      case GAME_STATE_WIN:
        return <div>Player {winnerPlayer} won!</div>
      case GAME_STATE_DRAW:
        return <div>Game is a Draw!</div>
      default:
    }
  }
  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}

export default Header