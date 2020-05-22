import React from 'react'

const Display = (props) => {
  return (
    <div id="display" className="display">
      Selected button is: {props.active ? props.active.id : 'nothing so far'}
    </div>
  )
}

export default Display
