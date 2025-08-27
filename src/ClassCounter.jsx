import { Component } from "react";
class ClassCounter extends Component
{
    constructor()
    {
        super();
        this.state={"counter":0}
    }
    counter=()=>
    {
        this.setState({"counter":this.state.counter+1})
        
    }
    render()
    {
        return(
            <div>
                <h1>The value of counter is {this.state.counter}</h1>
                <button onClick={this.counter}>Count</button>

            </div>
        )
    }
}
export default ClassCounter;