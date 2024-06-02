
/*
This Hook is an alternative to useState, and works similarly to the Redux library. 

We can use it as follows: 

import { useReducer } from 'react' 

const [ stateobj, dispatchaction ] = useReducer(function, objectstate, init) 

The useReducer Hook is used to deal with complex state logic
The useReducer is a hook I use sometimes to manage the state of the application. 
It is very similar to the useState hook, just more complex. 
It acts as an alternate hook to the useState hook to manage complex state in your application.
 
The useReducer hook uses the same concept as the reducers in Redux. It is basically a 
pure function, with no side-effects


*/

import React, { useReducer } from 'react'
import Reducer_img from './Reducer_img';

export const object = {
    username: "Rajesh nagar",
    age: 33,
    number: 1,
    isImage: true
}

export const actionfunctio = (state, action) => {

    if (action.type == "CHANGE") {
        return ({ ...state, username: "Akash Nagar" })
    }
    if (action.type == "PLUS") {
        return ({ ...state, number: state.number+1 })
    }
    if (action.type == "MINUS") {
        return ({ ...state, number: state.number-1 })
    }
    if (action.type == "HIDE") {
        return ({ ...state, isImage:false })
    }
    if (action.type == "SHOW") {
        return ({ ...state, isImage:true })
    }
    if (action.type == "TOGGLE") {
        return ({ ...state, isImage:!state.isImage })
    }
}

function UseReducer() {

    const [state, dispatch] = useReducer(actionfunctio, object);
    
    return (
        <div>
            <div className='container mt-5'>

                <button onClick={() => dispatch({ type: "CHANGE" })}>Change</button>
                <h1>My user name is {state.username} and my age is {state.age}</h1>
                <hr />

                <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
                <h1>{state.number}</h1>
                <button onClick={() => dispatch({ type: "MINUS" })}>-</button>

                <hr />
                <button onClick={() => dispatch({ type: "HIDE" })}>HIDE</button>
                <button onClick={() => dispatch({ type: "SHOW" })}>SHOW</button>
                <button onClick={() => dispatch({ type: "TOGGLE" })}>TOGGLE</button>
                {state.isImage ? <Reducer_img /> : null}

            </div>
        </div>
    )
}

export default UseReducer