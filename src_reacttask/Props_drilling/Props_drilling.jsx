/*

What is Prop Drilling?
Anyone who has worked in React would have faced this and if not then will face it definitely. 
Prop drilling is basically a situation when the same data is being sent at almost every level 
due to requirements in the final level. 

Here is a diagram to demonstrate it better. 
Data needed to be sent from Parent to ChildC. 
In this article different ways to do that are discussed.

YOU PAS STATE A TO E

PROBLEM IS NOT REQUIREMENT IN B,C,D SO ITS SLOW PROCEES

SO now sollution useContext(),createContext() hooks introduced

*/

import React from 'react'
import A from './A'

function Props_drilling() {
  return (
    <div>
        <A/>
    </div>
  )
}

export default Props_drilling