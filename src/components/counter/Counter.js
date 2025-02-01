import React from 'react'
import "./Counter.css"

const Counter = () => {
  return (
    <div className='app'>
      <h2 className='counter-header'>Counter With Redux</h2>

      <h1></h1>
      {/*sayac*/}

      <h2></h2>
      {/*text*/}

      <div>
        <button className='counter-button positive'>ARTTIR</button>
        <button className='counter-button '>RESET</button>
        <button className='counter-button negative'>AZALT</button>
      </div>
    </div>
  )
}

export default Counter
