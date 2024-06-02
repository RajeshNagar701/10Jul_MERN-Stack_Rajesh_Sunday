import React from 'react'
import Image from './Image'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE, HIDE, MINUS, PLUS, SHOW, TOOGLE } from '../DataSlice';

// who want access all store state or action have to use useSelector,useDispattch
// useSelector for state get
// useSelector for state get


function Redux_task() {

    // state access from store
  const {username,age,number,isImage}=useSelector((state)=>state.data);

   // action access from store 
  const dispatch= useDispatch();

  return (
    <div>
    <div className='container mt-5'>

        <button onClick={()=>dispatch(CHANGE())}>Change</button>
        <h1>My user name is : {username} and my age is : {age}</h1>
        <hr />

        <button onClick={()=>dispatch(PLUS())}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>dispatch(MINUS())}>-</button>

        <hr />
        <button onClick={()=>dispatch(HIDE())}>HIDE</button>
        <button onClick={()=>dispatch(SHOW())}>SHOW</button>
        <button onClick={()=>dispatch(TOOGLE())}>TOGGLE</button>
        {isImage?<Image/>:null}

    </div>
</div>
  )
}

export default Redux_task