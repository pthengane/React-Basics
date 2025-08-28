import { useState } from "react";
function FunctionalDemo()
{
    
    let [name,setName]=useState("Balasaheb")
    let [age,setAge]=useState(21);
    let [email,setEmail]=useState("bsaheb@gmail.com")
    
    return(
        <div>
            <h1> This is example of functional component</h1>
            <h1>The name is {name}</h1>
            <h2> age is {age}</h2>
            <h2>The email is {email}</h2>
        </div>
    )
}
export default FunctionalDemo;