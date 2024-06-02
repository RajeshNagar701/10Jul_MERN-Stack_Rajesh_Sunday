
/*

Lifecycle of Components

Each component in React has a lifecycle which you can monitor and manipulate during its 
three main phases.

The three phases are: Mounting, Updating, and Unmounting.

componentDidMount(){} // birth// run when component ready to use

componentDidUpdate(){} // marriage// run when any update in compo

componentWillUnmount(){}// end // run when component remove


*/

import React, { Component } from 'react'
import Life_img from './Life_img';

export class Life_class extends Component {

    componentDidUpdate()
    {
        console.log('hi i am componentDidUpdate');
    }

    constructor(){
        super();
        this.state={
            name:"Raj nagar",
            isImage:true
        }
    }  

  render() {
    return (
      <div>
        <h1>Life_class</h1>
        <hr />
        <button onClick={()=>this.setState({name:"Akash Nagar"})}>Change</button>
        <h1>{this.state.name}</h1>

        <hr />
        <button onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button onClick={()=>this.setState({isImage:true})}>Show</button>
        {this.state.isImage?<Life_img/>:null}
            
      </div>
    )
  }
}

export default Life_class