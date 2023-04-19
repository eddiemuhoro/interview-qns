import React, { useContext, useState } from 'react'
import CounterContext from './CounterContext'

const CounterCtx = () => {
const [count , setCount] = useState(0)
const handleAdd = () => {
    setCount(count + 1)
}
  return (
    <div>
        <CounterContext.Provider value= {{ handleAdd }}>
            <h2>Context</h2>
        <p>{count}</p>
            <Child />
           
        </CounterContext.Provider>
    </div>
  )
}

const Child =() =>{
    const context = useContext(CounterContext)
    const {handleAdd} = context
    return(
        <>
            <button onClick={handleAdd}>Addd</button>
        </>
    )
}

export default CounterCtx