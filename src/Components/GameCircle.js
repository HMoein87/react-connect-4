import React from 'react'

const onClick = () => {
    alert("clicked!");
}

const GameCircle = () => {
  return (
    <div onClick={onClick}>
        GameCircle
    </div>
  )
}

export default GameCircle