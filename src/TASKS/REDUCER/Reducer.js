import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return {...state, count: state.count + 1}
        case "REMOVE":
            return {...state, count: state.count - 1}
        case "TOGGLE":
             return {...state, show: !state.show}

        default:
            return state

    }
}

const Reducer = () => {
    const [state, dispatch]= useReducer(reducer, {count: 0, show: false})
    const handleAdd =()=> {
        dispatch({type: "ADD"})
    }
    const handleRemove= () => {
        if (state.count ===0){
            return state.count
        }else{
            dispatch({type: "REMOVE"})
        }
    }
  return (
    <div>
        <p>{state.count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default Reducer