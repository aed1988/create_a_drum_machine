import React from 'react'

const Display = ({clickedDrumPad}) => {
  return (
    <div id="display" className="display">
      Selected button is: {clickedDrumPad ? clickedDrumPad.active.id : 'Nothing so far'}
    </div>
  )
}

export default Display
