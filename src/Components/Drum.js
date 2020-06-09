import React from 'react'
import Drumpads from './Drumpads';

const Drum = ({notesObj, handlePlay}) => {


  return (
    <div className='drumpad'>
      {notesObj.map(element => <Drumpads key={element.keyboardCode} noteObj={element} handleClick={handlePlay} />)}
    </div>
  )
}

export default Drum
