
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
import React, { Component } from 'react'
import Card_class from './Card_class'

export class Class_props extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <Card_class img="https://via.placeholder.com/600/92c952" title="PHP" desc="PHP COURSE" />
          <Card_class img="https://via.placeholder.com/600/771796" title="PYTHON" desc="PYTHON COURSE" />
          <Card_class img="https://via.placeholder.com/600/24f355" title="JAVA" desc="JAVA COURSE" />
        </div>
      </div>
    )
  }
}

export default Class_props