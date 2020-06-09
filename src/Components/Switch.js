import React from 'react'

const Switch = ({power, handleTogglePower}) => {

  return (
    <button 
      className={(power ? 'toggleButton toggleButton--on' : 'toggleButton toggleButton--off')} 
      onClick={handleTogglePower}
    >
      Power is {power ? 'ON' : 'OFF'}
    </button>
  )
}

export default Switch
