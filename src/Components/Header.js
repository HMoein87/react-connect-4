import React from 'react'

import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
} from "../Constants";

const Header = ({gameState, currentPlayer, winnerPlayer}) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player {currentPlayer} Trun</div>
      case GAME_STATE_WIN:
        return <div>Player {winnerPlayer} wins!</div>
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