import React, { Component } from 'react'

export class Card_class extends Component {

    constructor(props){
        super(props);
        this.data=props;
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={this.data.img} alt="Card image" style={{ width: '100%' }} />
                    <div className="card-body">
                        <h4 className="card-title">{this.data.title}</h4>
                        <p className="card-text">{this.data.desc}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card_class