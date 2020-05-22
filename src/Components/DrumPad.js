import React from 'react'
import Drum from './Drum';
import './Button.sass'

const Drumpad = (props) => {

  return (
    <div className='drumpad'>
      {props.notesObj.map(element => <Drum key={element.id} listid={element.id} note={element.desc} onClick={props.onClick}/>)}
    </div>
  )
}

export default Drumpad
