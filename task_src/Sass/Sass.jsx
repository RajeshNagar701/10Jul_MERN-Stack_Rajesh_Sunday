/*

What is Sass?
Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS /  scss
Sass is a CSS pre-processorSass is completely compatible with all 
versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

Stylesheets are getting larger, more complex, and harder to maintain. 
This is where a CSS pre-processor can help.

Sass lets you use features that do not exist in CSS, like variables, nested rules, 
mixins, imports, inheritance, built-in functions, and other stuff.

npm i sass


*/



import React from 'react'

import './sass_style.scss';

function Sass() {
    return (
        <div>
            <h1 className='mystyle'>Hello sass css</h1>
            <hr />

            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </nav>

            <hr />

            <h2>Hi i am sass css</h2>

            <hr />

            <button className='button-basic'>Basic Button</button>
            <button className='primary'>Primary</button>
            <button className='danger'>Danger</button>
            <button className='success'>Success</button>
        </div>
    )
}

export default Sass