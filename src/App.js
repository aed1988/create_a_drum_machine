import React, {useState} from 'react';
import Machine from './Components/Machine'
import Switch from './Components/Switch'
import './App.sass';

function App() {

  const [power, setPower] = useState(true)

  const handleTogglePower = (currentPower) => setPower(!currentPower)

  return (
    <>
      <Switch power={power} handleTogglePower={handleTogglePower}/>
      <Machine id="drum-machine" power={power}/>
    </>
  );
}

export default App;
