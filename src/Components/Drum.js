import React from 'react'

const Drum = (props) => {

  return (
    <button className="button" onClick={props.onClick} listid={props.listid}>
      Description: {props.note}.
    </button>
  )
}

export default Drum