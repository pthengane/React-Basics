import { Component } from "react";
class ClassState extends Component
{
    constructor()
    {
        super();
        this.state={"name":"Parthivan","age":23,"address":"Pune","marks":100}
    }
    updatename=()=>
    {
        this.setState({"name":"Vilas","marks":999})
    }
    render()
    {
        return(
            <div>
                <h1>The name is {this.state.name}</h1>
                <h2>His Age is {this.state.age} </h2>
                <h2>He is from {this.state.address}</h2>
                <h2>The marks are {this.state.marks} </h2>
                <button onClick={this.updatename}>update name</button>
            </div>
        )
    }
}
export default ClassState;