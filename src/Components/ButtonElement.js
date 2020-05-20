import React from 'react'

const ButtonElement = (props) => {

  const onClick = (e) => {
    console.log('clicked')
  }

  return (
    <button className="button" onClick={onClick}>
      <p>This is square {props.note}.</p>
    </button>
  )
}

export default ButtonElement