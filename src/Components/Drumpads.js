import React from 'react'

const Drumpads = ({ noteObj, handlePlayClick, handleKeyDown }) => {

  const handlePlay = (e) => {
    handlePlayClick(e.target.value)
  }


  return (
    <button className="button" value={noteObj.keyCode} listid={noteObj.listid} onClick={handlePlay} onKeyDown={handleKeyDown}>
      {noteObj.keyTrigger}: {noteObj.id}
    </button>
  )
}

export default Drumpads