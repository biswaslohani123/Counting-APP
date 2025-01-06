import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0)

  const AddValue = () => {
    if(counter < 50)
    setCounter(counter + 1)
  }
  const MinusValue = () => {
    if(counter  > 0)
    setCounter(counter -1)
  }
  const resetvalue = () => {
    setCounter(0)
  }
  return (
    <div className='Counter'>
      <h1>Counter:{counter} </h1>
      <button onClick={AddValue}>Add</button>
      <br />
      <br />
      <button onClick={MinusValue}>Minus</button>
      <br />
      <br />
      <button onClick={resetvalue}>Reset</button>
  
      
    </div>
  )
}

export default App
