import React from 'react'
import useCounter from './useCounter'

function Counter() {
    const [num,increment,decrement,reset] = useCounter();
  return (
    <div>
        <h2>Number = {num}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter