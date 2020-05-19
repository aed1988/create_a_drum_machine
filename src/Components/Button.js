import React from 'react'
import ButtonElement from './ButtonElement';
import './Button.sass'

const Button = (props) => {

  return (
    <div class='button-container'>
      {props.notes.map(element => <ButtonElement key={element} note={element}/>)}
    </div>
  )
}

export default Button
