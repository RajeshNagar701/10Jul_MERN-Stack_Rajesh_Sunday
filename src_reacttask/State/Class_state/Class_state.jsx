
/*

React components has a built-in state object.

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


import React, { Component } from 'react'
import State_img1 from './State_img1';


export class Class_state extends Component {

    constructor()
    {
        super();
        this.state={
            email:"rajeshnagarn@gmail.com",
            name: "Raj nagar",
            age: 34,
            number: 1,
            isImage: true
        }
    }

    minus(){
        if (this.state.number > 0) {
            
            this.setState({number: this.state.number - 1 });
        }
    }
  render() {
    return (
        <div className='container mt-5'>
        <button onClick={() => this.setState({email:"akashnagar@gmail.com"})}>Change</button>
        <h1>{this.state.email}</h1>

        <hr />

        <button onClick={() => this.setState({name: "Rajesh nagar", age: 33 })}>Change</button>
        <h1>My name is <u>{this.state.name}</u> and my age is <u>{this.state.age}</u></h1>


        <hr />

        <button onClick={() => this.setState({number: this.state.number + 1 })} className='btn btn-primary'>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.minus()} className='btn btn-primary'>-</button>

        <hr className='mb-5' />

        <button onClick={() => this.setState({isImage: false })} className='btn btn-primary mb-5'>Hide</button>
        <button onClick={() => this.setState({isImage: true })} className='btn btn-primary mb-5'>Show</button>
        <button onClick={() => this.setState({isImage: !this.state.isImage })} className='btn btn-primary mb-5'>Hide / Show</button>
        {this.state.isImage ? <State_img1 /> : null}


    </div>
    )
  }
}

export default Class_state
