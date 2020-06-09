import React from 'react'

const Drumpads = ({ noteObj, handleClick }) => {


  return (
    <button className="button drum-pad" value={noteObj.keyboardCode} listid={noteObj.listid} onClick={(e) => handleClick(e)} >
      {noteObj.keyTrigger}: {noteObj.id}
    </button> 
  )
}

export default Drumpads