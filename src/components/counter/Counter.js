import React from 'react'
import "./Counter.css"
import { useSelector } from 'react-redux'
import counterReducer from '../../redux/reducers/counterReducer'

const Counter = () => {
  //değişkenler useSelector hookuyla çağırılır, fonksiyonlar ise useDispatch ile çağırılır.
  const {sayac,text} = useSelector((state)=>state.counterReducer)



  return (
    <div className='app'>
      <h2 className='counter-header'>Counter With Redux</h2>

      <h1></h1>
      {/*sayac*/}

      <h2></h2>
      {/*text*/}

      <div>
        <button className='counter-button positive'

        
        >ARTTIR</button>
        <button className='counter-button '>RESET</button>
        <button className='counter-button negative'>AZALT</button>
      </div>
    </div>
  )
}

export default Counter
