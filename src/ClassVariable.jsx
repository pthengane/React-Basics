import { Component } from "react";
class ClassVariable extends Component
{
    a = 20;
    constructor()
    {
        super();
    }
    update=()=>
    {
        this.a=50;
        console.log("value of a is " + this.a);
    }
    render()
    {
        return(
            <div>
                <h1>The value of variable a is {this.a}</h1>
                <button onClick={this.update}>update a</button>
            </div>
        )
    }
}
export default ClassVariable;