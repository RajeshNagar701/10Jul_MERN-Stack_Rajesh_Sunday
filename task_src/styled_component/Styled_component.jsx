/*

https://styled-components.com/docs/basics

CSS for the <Component> Age

styled-components is the result of wondering how we could enhance CSS for styling 
React component systems. 
By focusing on a single use case we managed to optimize the experience for developers as well
as the output for end users.

Automatic critical CSS
No class name bugs:
Easier deletion of CSS:
Simple dynamic styling:
Painless maintenance:


npm install --save styled-components





*/


import React from 'react'
import styled from 'styled-components'


function Styled_component() {

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    border:solid 2px palevioletred;
  `;

    const MyButton = styled.button`
  border:2px solid palevioletred;
  font-weight:bolder;
  border-radius:10px;
  padding:10px 35px;
  background:none;
  color:palevioletred;
  display:block;
  margin:0 auto;
  &:hover{
    background : palevioletred;
    color:white;
}
`
    const Basic = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:LightGray;
    color:white;
    display:block;
    margin:0 auto;
    border:none;
`

    const Redbtn = styled(Basic)`
    background:red;
`
    const Bluebtn = styled(Basic)`
    background:blue;
`
    const Greenbtn = styled(Basic)`
    background:green;
`

    const Props_btn = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;



    return (
        <div>
            <Title><h1>Hi I AM HEADER</h1></Title>

            <Title><h1>Hi I AM TITLE</h1></Title>

            <hr />

            <MyButton> My custome Button</MyButton>

            <hr />
            <Basic>Basic</Basic>
            <Redbtn>Red Btn</Redbtn>
            <Greenbtn>Green Btn</Greenbtn>
            <Bluebtn>Blue Btn</Bluebtn>

            <hr />

            <Props_btn primary>with Primary Props Btn</Props_btn>
            <Props_btn>Without Primary Props Btn</Props_btn>

        </div>
    )
}

export default Styled_component