import React, { useState, useEffect } from 'react'
import Drum from './Drum'
import Display from './Display'
import Switch from './Switch'

const Machine = ({power}) => {

  useEffect(() => {
    document.addEventListener("keypress", (e) => handlePlay(e))
    return () => {
      document.removeEventListener('keypress', (e) => handlePlay(e))
    }
  // eslint-disable-next-line
  },[])

  const [activeNote, setactiveNote] = useState(null)
  const [isPowerOn, setIsPowerOn] = useState(true)

  const notes = [{
    keyboardCode: 'KeyQ',
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    keyboardCode: 'KeyW',
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    keyboardCode: 'KeyE',
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    keyboardCode: 'KeyA',
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
    keyboardCode: 'KeyS',
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
    keyboardCode: 'KeyD',
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
    keyboardCode: 'KeyZ',
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    keyboardCode: 'KeyX',
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
    keyboardCode: 'KeyC',
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }]
  

  const handlePlay = (event) => {
    if (!isPowerOn) return

    const keyboardCodes = notes.map(elem => elem.keyboardCode)

    let input
    if (event.type === 'keypress' && keyboardCodes.includes(event.code)) input = event.code
    if (event.type === 'click') input = event.target.value
    if (input === undefined) return

    let index = keyboardCodes.indexOf(input)
    setactiveNote(notes[index])
    handleAudio(notes[index])

  }
 
  const handleAudio = (note) => {
    const audioUrl = new Audio(note.url)
    audioUrl.play()
  }

  const handleTogglePower = () => setIsPowerOn(!isPowerOn)


  return (
    <>
      <Switch power={isPowerOn} handleTogglePower={handleTogglePower}/>
      <Display power={isPowerOn} activeNote={activeNote}/>
      <Drum notesObj={notes} handlePlay={handlePlay}/>
    </>
  )
}

export default Machine