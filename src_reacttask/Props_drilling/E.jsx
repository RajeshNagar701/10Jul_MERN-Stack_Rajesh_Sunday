import React from 'react'

function E({name,setName}) {
  return (
    <div>
        <button onClick={()=>setName("Pavan Nagar")}>Change E</button>
        <h1>Hi i am E Component : {name}</h1>
    </div>
  )
}

export default E