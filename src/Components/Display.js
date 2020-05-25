import React from 'react'

const Display = ({ power, clickedDrumPad }) => {
  return (
    <div id="display" className="display">
      {(
      (!power)
        ? 'Power is off'
        : (!clickedDrumPad.active)
        ? 'Nothing clicked yet' 
        : `Last pressed button is ${clickedDrumPad.active.id}`
      )}
    </div>
  )
}


export default Display
