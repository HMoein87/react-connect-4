import React from 'react'

import {GAME_STATE_IDLE} from "../Constants";

//footer component
const Footer = ({onNewGameClick, gameState}) => {

  //this function is used for conditional rendering of the buttons in footer component
  const renderbuttons = () => {
    if (gameState !== GAME_STATE_IDLE) {
      return <button onClick={onNewGameClick}>New Game</button>;
    } 
  }
  
  return (
    <div className='panel footer'>{renderbuttons()}</div>
  )
}

export default Footer