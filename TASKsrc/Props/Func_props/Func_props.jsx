
/*
Props is special keywords in React like properties/parameter/argument
Props are arguments passed into React components.
Props are passed to components via HTML attributes.
props stands for properties.
React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:

function Demo({name,age})
{

}

<Demo name="raj" age="33"/>

*/

import React from 'react'
import Card_func from './Card_func'

function Func_props() {
  return (
    <div className='container'>
            <div className="row">
               <Card_func img="https://via.placeholder.com/600/92c952" title="PHP" desc="PHP COURSE"/>
               <Card_func img="https://via.placeholder.com/600/771796" title="PYTHON" desc="PYTHON COURSE"/>
               <Card_func img="https://via.placeholder.com/600/24f355" title="JAVA" desc="JAVA COURSE"/>
               <Card_func img="https://via.placeholder.com/600/d32776" title="JAVASCRIPT" desc="JAVASCRIPT COURSE"/>
               <Card_func img="https://via.placeholder.com/600/f66b97" title="REACT" desc="REACT COURSE"/>
               <Card_func img="https://via.placeholder.com/600/56a8c2" title="NODE.JS" desc="NODE.JS COURSE"/>
            </div>
        </div>
  )
}

export default Func_props