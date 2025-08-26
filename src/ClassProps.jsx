import { Component } from "react";
class ClassProps extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div>
                <h1>This component explain the props concept.</h1>
                <h2>The name of candidate is {this.props.name}</h2>
                <h2>The age is {this.props.age}</h2>
                <h2>The email is {this.props.email}</h2>
                <h1>The employee name is {this.props.emp.ename}</h1>
                <h2>The id of {this.props.emp.ename} is {this.props.emp.empid} 
                    with salary {this.props.emp.sal}</h2>
            </div>
        )
    }
}
export default ClassProps;