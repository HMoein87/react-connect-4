import React from 'react'


//GameCircle component
//this component has some props passed by GameBoard component
//this component is used as a child component in GameBoard component
const GameCircle = ({id, children, className, onCircleClicked}) => {

  return (
    <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>
        {children}
    </div>
  )
}

export default GameCircle