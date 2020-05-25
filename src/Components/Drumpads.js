import React from 'react'

const Drumpads = ({noteObj, handlePlayClick, handlePlayKey}) => {

  const handlePlay = (e) => {
    handlePlayClick(e)
  }

  return (
    <button className="button" value={noteObj.id} listid={noteObj.listid} onClick={handlePlay} onKeyDown={handlePlayKey}>
      {noteObj.keyTrigger}: {noteObj.id}
    </button>
  )
}

export default Drumpads