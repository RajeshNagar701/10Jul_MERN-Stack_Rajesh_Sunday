
/*

React components has a built-in state object.

const emp={id:"1",name:"raj"}  object simple
emp.name

const [emp,setemp]=usestate({
    id:"1",
    name:"raj"
})
emp.name

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

1)Class Component

constructor() {
    super();
    this.state = {
            brand: "Ford",
            model: "Figo",
            year: ""2018
        };
  }
  {this.state.brand}
  this.setState({brand:"Maruti",model:"2020"});


2)Func Component  Introduced Hooks (useState)

import react,{useState} from 'react'

const [data,setobj]=useState({
      brand: "Ford",
      model: "Figo",
      year: ""2018
})

{data.model}

setobj({...data,brand:"Maruti",model:"2020"})

*/

import React, { useState } from 'react'
import State_img from './State_img';


function Func_state() {
    // const name="Rajesh nagar";
    const [name,setName]=useState("Rajesh nagar");
    const [data,setData]=useState({
        number:0,
        isImage:true,
    })

    return (
        <div className='container mt-5'>
            <button onClick={()=>setName("Akash Nagar")}>Change</button>
            <h1>{name}</h1>
            <hr />
            <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
            <h1>{data.number}</h1>
            <button onClick={()=>setData({...data,number:data.number-1})}>-</button>

            <hr />
            <button onClick={()=>setData({...data,isImage:false})}>Hide</button>
            <button onClick={()=>setData({...data,isImage:true})}>Show</button>
            <button onClick={()=>setData({...data,isImage:!data.isImage})}>Hide/Show</button>
            {data.isImage? <State_img/> : null}
            
        
        </div>
    )
}

export default Func_state