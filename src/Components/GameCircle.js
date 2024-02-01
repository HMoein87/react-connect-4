import React from 'react'

const onClick = (id) => {
    alert("clicked!" + id);
}

const GameCircle = ({id, color, children}) => {

  return (
    <div className='gameCircle' style={id % 2 === 0 ? 
    {backgroundColor: 'blue'} : {backgroundColor: 'red'}} onClick={() => onClick(id)}>
        {children}
    </div>
  )
}

export default GameCircle