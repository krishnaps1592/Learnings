import React,{Component} from 'react';

class BindingOneWay extends Component{
    constructor()
    {
        super();
        this.state = { name : 'krishna'};
    }

    change(event)
    {
        this.setState({ name:event.target.value});
    }

    render()
    {
        return (
            <div>
            <input value={this.state.name} onChange={(event)=> this.change(event)}></input>
            <h1>Hello, {this.state.name}</h1>
            </div>
        );
    }
}

export default BindingOneWay;