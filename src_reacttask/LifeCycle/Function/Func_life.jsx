/*
The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

 // component load/birth
 
  useEffect(() => {
    console.log('DidMount')
  }, []);


  // component unload/death

  useEffect(() => {
    return (() => console.log('WillUnMount'))
  }, []);

 // component update

  useEffect(() => {
    console.log('DidMount/update')
  }, [data.number]);





*/


import React,{useState,useEffect} from 'react'
import Life_img from './Life_img'

function Func_life() {

    const [data,setData]=useState({
        name:"Raj Nagar",
        isImage:true,
        number:1
    });

    // DidUpdate 
    useEffect(()=>{
        console.log('Didmount Main / then update DidUpdate')
    },[data.number]); 

  return (
    <div>
        <h1>Life_Func</h1>
        <hr />
        <button onClick={()=>setData({...data,name:"Akash Nagar"})}>Change</button>
        <h1>{data.name}</h1>

        <hr />
        <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
        <h1>{data.number}</h1>
        <button onClick={()=>setData({...data,number:data.number-1})}>-</button>
        
        <hr />
        <button onClick={()=>setData({...data,isImage:false})}>Hide</button>
        <button onClick={()=>setData({...data,isImage:true})}>Show</button>
        {data.isImage?<Life_img/>:null}
            
      </div>
  )
}

export default Func_life