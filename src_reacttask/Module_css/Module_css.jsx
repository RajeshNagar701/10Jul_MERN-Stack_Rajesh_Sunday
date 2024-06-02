/*
CSS Modules

Another way of adding styles to your application is to use CSS Modules.

CSS Modules are convenient for components that are placed in separate files.

The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.

EXT :   .module.css
import  : import A from './style1.module.css';

*/
import React from 'react'

// WAYS OF LOAD MODULE CSS 
import A from './style1.module.css';
import B from './style2.module.css';

// normal css load so that clas all styles
//import './style1.css'  
//import './style2.css'


function Module_css() {
    return (
        <div>
            <div className="bigblue">My NORMAL CSS bigblue</div>
            <hr />
            <div className={A.bigblue}>My Module bigblue 1</div>
            <hr />
            <div className={B.bigblue}>My Module bigblue 2</div>
        </div>
    )
}

export default Module_css