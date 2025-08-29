import { useState } from "react";
function FunctionalCounter(props)
{
    
    let [count,setCount]=useState(0);

    let updatecounter=()=>
    {
        setCount(count + 1);
    }
    
    
    return(
        <div>
            <h1>The initial value of counter is {count}</h1>
            <button onClick={updatecounter}>updatecounter</button>
            <h2>The name is {props.name}</h2>
            <h2>The age is {props.age}</h2>
        </div>
    )
}
export default FunctionalCounter;