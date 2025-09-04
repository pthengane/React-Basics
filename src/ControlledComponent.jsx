import { useState } from "react";

function ControlledComponent()
{

    let [name,setName]=useState("Parthiv")
    let [email,setEmail]=useState("parthivan@gmail.com")
    let [gender,setGender]=useState()
    let [city,setCity]=useState("Nagpur")
    

    let updatename=(e)=>
    {
       setName(e.target.value); 
    }

    let greet=(event)=>
    {
        event.preventDefault();
        alert("Welcome " + name + " your email is " + email + " and your gender is " + gender + " from " + city );
    }

    return(

        <div>
            <form onSubmit={greet}>
                Enter Name:<input type="text" value={name} onChange={(e)=>{updatename(e)}}></input><br></br>
                <br></br>
                Enter Email:<input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
                <br></br>
                select gender:<input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}}></input>male
                <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}}></input> female
                <br></br>
                select city:<select onChange={(e)=>{setCity(e.target.value)}}>
                    <option>select city</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Akola">Akola</option>
                </select>
                <input type="submit" value="register"></input>
            </form>
        </div>
    )
}
export default ControlledComponent;