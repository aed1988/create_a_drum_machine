import React from 'react'

const Display = ({ power, activeNote }) => {

  const displayText = (
    (!power)
      ? 'Power is off'
      : !activeNote
      ? 'Nothing clicked yet' 
      : activeNote.id
    )

  return (
    <div id="display" className="display">
      <div className="display--text">
        {displayText}
      </div>
    </div>
  )
}


export default Display
