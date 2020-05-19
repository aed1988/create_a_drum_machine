import React from 'react'
import './ButtonElement.sass'

const ButtonElement = (props) => {
  return (
    <div class="button">
      <p>This is square {props.note}.</p>
    </div>
  )
}

export default ButtonElement
