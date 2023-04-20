import React, { memo, useState } from 'react'

const Usememo = () => {
    const [number, setNumber]= useState(0)
    const [test, setTest]= useState(0)
    const handleClick = () => {
        setNumber(number+1)
    }
    const handleTest = ()=>{
        setTest(test+1)
    }
  return (
    <div>
        <Child data={number}/>
        <p>{test}!</p>
        <button onClick={handleClick}>Click</button>
        <button onClick={handleTest}>Test</button>

    </div>
  )
}

const Child = memo(({data}) => {

    console.log('Im running')
    return(
        <>
        <p>child</p>
        <p>{data}</p>
        </>
    )
})
export default Usememo