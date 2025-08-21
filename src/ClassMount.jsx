import React, { Component } from 'react'

export default class ClassMount extends Component {

    constructor()
    {
        super();
        this.state={"counter":0}
        console.log("The constructor is sucessfully executed.")
    }
    update=()=>
    {
        this.setState({"counter":1})
    }
    componentDidMount()
    {
        console.log("componentDidMount method example");
        //window.addEventListener("event",function);
        window.addEventListener("keydown",this.keydowndeemo);

    }
    keydowndeemo=()=>
    {
        alert("You press some key from keyboard")
    }
  
  
    render() {
    
        console.log("render.....")
    return (
      <div>
        <h1>Class Comopnent life cycle methods....</h1>
        <h2>The value of counter is {this.state.counter}</h2>
        <button onClick={this.update}>update counter</button> <br></br>
        Enter Name:<input type='text'></input>

      </div>
    )
  }
}
