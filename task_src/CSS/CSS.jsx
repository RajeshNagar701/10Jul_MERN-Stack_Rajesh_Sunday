

import React from 'react'

import './style1.css'
import './style2.css'


function CSS() {

 
    const internal = { color: "yellow" };

    return (
        <div>

           <h1 style={{color: 'red'}}>Hi i am jsx html &amp; css </h1>

           <hr />

            <h1 style={internal}>Hi i am internal css</h1>

            <hr />

            <div className='bigblue'>My bigblue 1</div>
            <hr />
            <div className='bigblue'>My bigblue 2</div>
            
        </div>
    )
}

export default CSS