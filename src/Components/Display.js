import React from 'react'
import './Display.sass'

const Display = ({ power, clickedDrumPad }) => {


  return (
    <div id="display" className="display">
      <div className="display--text">
        {(
        (!power)
          ? 'Power is off'
          : (!clickedDrumPad.active)
          ? 'Nothing clicked yet' 
          : (clickedDrumPad.active.id)
        )}
      </div>
    </div>
  )
}


export default Display
