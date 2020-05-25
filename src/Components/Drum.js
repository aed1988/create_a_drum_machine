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
  // eslint-disable-next-line
  },[])

  const handleKeyDown = (e) => {

    const keyTriggers = props.notesObj.map(element => element.keyTrigger)
    const keyPressed = e.key.toUpperCase()
    console.log(keyPressed)

    const keyCodes = props.notesObj.map(element => element.keyCode)

    keyCodes.indexOf(e.keyCode) !== -1 ? props.handlePlayClick(e.keyCode) : console.log('NOT in the arr')
  }

  return (
    <div className='drumpad'>
      {props.notesObj.map(element => <Drumpads key={element.keyCode} noteObj={element} handlePlayClick={props.handlePlayClick} handlePlayKey={handleKeyDown}/>)}
    </div>
  )
}

export default Drum
