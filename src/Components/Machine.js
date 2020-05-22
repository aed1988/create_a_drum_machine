import React, {Component} from 'react'
import DrumPad from './DrumPad'
import Display from './Display'

class Machine extends Component {
  constructor(props) {
    super(props)
    this.state = {active: ''}
  }
  
  notes = [{id: 1, desc: 'This note 1'},{id: 2, desc: 'This note 2'},{id: 3, desc: 'This note 3'},{id: 4, desc: 'This note 4'},{id: 5, desc: 'This note 5'},{id: 6, desc: 'This note 6'},{id: 7, desc: 'This note 7'},{id: 8, desc: 'This note 8'}, {id: 9, desc: 'This note 9'}]

  handleClick = (e) => {
    this.setState({active: this.notes[e.target.getAttribute('listid') - 1]})
  }

  render() {
    return (
      <>
        <DrumPad onClick={(e) => this.handleClick(e)} notesObj={this.notes}/>
        <Display active={this.state.active}/>
      </>
    )
  }
}

export default Machine
