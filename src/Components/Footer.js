import React from 'react'

import {GAME_STATE_PLAYING} from "../Constants";

const Footer = ({onNewGameClick, onSuggestClick, gameState}) => {
  const renderbuttons = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return <button onClick={onSuggestClick}>Suggest</button>;
    }
    return <button onClick={onNewGameClick}>New Game</button>;
  }
  return (
    <div className='panel footer'>{renderbuttons()}</div>
  )
}

export default Footer