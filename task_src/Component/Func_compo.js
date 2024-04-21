/*
React Components

Components are like functions that return HTML elements.

Components are independent and reusable bits of code. They serve the same purpose as 
JavaScript functions, but work in isolation and return HTML.

Components come in two types, 
1)Class components
2)Function components, 

Class Component

A class component must include the extends React.Component statement. 
This statement creates an inheritance to React.Component, and gives your component 
access to React.Component's functions.


class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

=====================================================

Function Component

Here is the same example as above, but created using a Function component instead.
A Function component also returns HTML, and behaves much the same way as a Class component, 
but Function components can be written using much less code, are easier to understand, 

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

*/

//rfce
import React from 'react'

function Func_compo() {
  return (
    <div>Func_compo</div>
  )
}

export default Func_compo


//========================================================
/*

//rfc

import React from 'react'

export default function Func_compo() {
  return (
    <div>Func_compo</div>
  )
}

*/
