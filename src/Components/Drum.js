import React from 'react'

const Drum = (props) => {

  return (
    <button className="button" onClick={props.onClick} listid={props.listid}>
      {props.content}
    </button>
  )
}

export default Drum