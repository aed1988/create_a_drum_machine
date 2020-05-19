import React, {useState} from 'react'
import Button from './Button'

const Machine = () => {

  const [notes, setNotes] = useState([1,2,3,4,5,6,7,8])

  return (
    <Button notes={notes}/>
  )
}

export default Machine
