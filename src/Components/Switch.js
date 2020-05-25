import React from 'react'

const Switch = ({power, handleTogglePower}) => {

  const handleClick = () => {
    handleTogglePower(power)
  }

  return (
    <button onClick={handleClick}>
      Power is {power ? 'ON' : 'OFF'}
    </button>
  )
}

export default Switch
