import React, { Component } from 'react'

export class Life_img extends Component {
    
    // component load/birth
    componentDidMount() {
        console.log('hi i am componentDidMount');
    }

    // component unload/death
    componentWillUnmount(){
        console.log('hi i am componentWillUnmount');
    }

    render() {
        return (
            <>
            <div>Life_img</div>
            <img src="https://topsint.com/topserp/images/logo-tops.png" alt="" />
            </>
        )
    }
}

export default Life_img