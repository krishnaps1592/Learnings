import React,{Component} from 'react';

const OneWayComponent = (props) =>(
    <div>
    <input value={props.name} onChange={(event)=>props.onChange(event.target.value)}></input>
    <h1>Hello, {props.name}</h1>
    </div>
)


class ParentComponent extends Component
{
    constructor() {
        super()
        this.state = { name: 'Bruce' };
        }

    change(value)
    {
        this.setState({name:value})
    }


    render()
    {
        return (
            <div>
            <OneWayComponent name={this.state.name} onChange={this.change.bind(this)}/>
            <p>Hello, event binding</p>
            </div>
        )
    }
    
}

export default ParentComponent