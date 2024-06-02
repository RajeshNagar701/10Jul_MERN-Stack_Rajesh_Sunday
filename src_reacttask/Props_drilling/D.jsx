import React from 'react'
import E from './E'

function D({name,setName}) {
  return (
    <div>
        <h1>Hi i am D Component</h1>
        <E name={name} setName={setName}/>
    </div>
  )
}

export default D