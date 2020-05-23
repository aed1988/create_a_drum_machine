import React from 'react'
import Drum from './Drum';
import './Button.sass'

const Drumpad = (props) => {

  return (
    <div className='drumpad'>
      {props.notesObj.map(element => <Drum key={element.keyCode} listid={element.keyCode} content={element.id} onClick={props.onClick}/>)}
    </div>
  )
}

export default Drumpad
