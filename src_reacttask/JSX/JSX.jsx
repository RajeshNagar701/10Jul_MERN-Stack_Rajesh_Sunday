/*

What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

Coding JSX
JSX allows us to write HTML elements in JavaScript and 
place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.


*/

import React from 'react'

import './jsx_style.css';  // load external css


function JSX() {

    const myelement = <h1>I Love JSX!</h1>;
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;

    const myelement2 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );

    const internal = { color: "yellow" };

    return (
        <div>

            {"Hi i am document.write for print"}

            <hr />

            {myelement}
            {myelement1}
            {myelement2}

            
           <h1 style={{color: 'red'}}>Hi i am jsx html &amp; css </h1>


            <h1 style={internal}>Hi i am internal css</h1>

            <hr />

            <div className='box'>Hello</div>
            <hr />
            <div class='box'>Hello</div>



        </div>
    )
}

export default JSX