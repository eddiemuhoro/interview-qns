import React from 'react'

//using props

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const handleAdd = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <p>{count}</p>
        <Child handleAdd = {handleAdd} count= {count} />
    </div>
  )
}

const Child =({handleAdd}) => {
   
    return(
        <>
        <button onClick={handleAdd}>
            Add
        </button>
        </>
    )
}

export default Counter