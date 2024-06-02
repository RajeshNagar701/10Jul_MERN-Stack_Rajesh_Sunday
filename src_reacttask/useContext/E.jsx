import React,{useContext} from 'react'
import { Datacontext } from './A'

function E() {

  const {name,setName}=useContext(Datacontext);

  return (
    <div>
        <button onClick={()=>setName("Nirav Nagar")}>Change E</button>
        <h1>Hi i am E Component :{name}</h1>
    </div>
  )
}

export default E