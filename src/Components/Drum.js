import React, { useEffect } from 'react'
import Drumpads from './Drumpads';
import './Button.sass'

const Drum = (props) => {

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      handleKeyDown(e)
    })
    return () => {
      document.removeEventListener('keypress', (e) => handleKeyDown(e))
    }
  })

  const handleKeyDown = (e) => {
    const keyTriggers = props.notesObj.map(element => element.keyTrigger)
    const keyPressed = String.fromCharCode(e.charCode).toUpperCase()

    keyTriggers.indexOf(keyPressed) !== -1 ? console.log('In the arr') : console.log('NOT in the arr')
  }

  return (
    <div className='drumpad'>
      {props.notesObj.map(element => <Drumpads key={element.keyCode} noteObj={element} handlePlayClick={props.handlePlayClick} handlePlayKey={handleKeyDown}/>)}
    </div>
  )
}

export default Drum
