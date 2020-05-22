import React, {Component} from 'react'
import DrumPad from './DrumPad'
import Display from './Display'

class Machine extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  notes = [{id: 1, desc: 'This note 1'},{id: 2, desc: 'This note 2'},{id: 3, desc: 'This note 3'},{id: 4, desc: 'This note 4'},{id: 5, desc: 'This note'},{id: 6, desc: 'This note'},{id: 7, desc: 'This note'},{id: 8, desc: 'This note'}, {id: 9, desc: 'This note'}]

  handleClick = () => {
    console.log(`This: ${JSON.stringify(this.props)}.`)
  }

  render() {
    return (
      <>
        <DrumPad onClick={(e) => this.handleClick(e)} notesObj={this.notes}/>
        <Display />
      </>
    )
  }
}

export default Machine
