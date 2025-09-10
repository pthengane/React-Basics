import React from 'react'
import { useState } from 'react'

export default function FormValidation() {
    let [name,setName]=useState('');
    let [email,setEmail]=useState('');
    let [contactno,setContactno]=useState(0);
    let [gender,setGender]=useState('');
    let [username,setUsername]=useState('');
    let [password,setPassword]=useState('');
    let [confirmpassword,setConfirmpassword]=useState('');
    let [ischeck,setIscheck]=useState(false);

    let validation=()=>
    {
        if(name==''||email==''||contactno==0||gender==''||username==''||password==''||confirmpassword=='')
        {
            alert("Please fill all the fields!!!")
            return false;
        }
        else if(!/^[A-Za-z\s]{2,30}$/.test(name)) //capital or small letters from 2 to 30 char.
        {
            alert("Please Enter A-Z a-z or space in name field minimum 2 characters required ")
            return false;
        }
        else if(!/^\d{10}$/.test(contactno)) //only 10 digits
        {
            alert("Please Enter 10 digit number exactly...")
            return false;
        }
        else if(!/^\S+@\S+\.\S+/.test(email)) //something@gmail.com
        {
          alert("Please enter email in correct format...");
          return false;
        }
        else if(password.length<8 || password.length>13)
        {
          alert("Please enter passsword minimum of 8 and maximum of 13 characters..")
          return false;
        }
        else if(password!=confirmpassword)
        {
          alert("Please enter password and confirm password same..")
          return false;
        }
        else if(!ischeck)
        {
          alert("You have to accept all terms and conditions to proceed for registration...");
          return false;
        }
        else
        {
            return true;
        }
    }
        let registerr=(event)=>
        {
            event.preventDefault();
            if(validation())
            {
                alert("registration Sucessfull !!!")
            }
        }
    

  return (
    <div>
      <form onSubmit={registerr}>
        <h1>Registration Form</h1>
        Enter name:<input type="text" onChange={(event)=>{setName(event.target.value)}}></input><br></br>
        Enter email:<input type="text" onChange={(event)=>{setEmail(event.target.value)}}></input><br></br>
        Enter contact:<input type="number" onChange={(event)=>{setContactno(event.target.value)}}></input><br></br>
        Select Gender:<input type="radio" name="gender" value="male" onChange={(event)=>{setGender(event.target.value)}}></input>Male
        <input type="radio" name="gender" value="female" onChange={(event)=>{setGender(event.target.value)}}></input>Female<br></br>
        Enter Username:<input type="text" onChange={(event)=>{setUsername(event.target.value)}}></input><br></br>
        Enter Password:<input type="password" onChange={(event)=>{setPassword(event.target.value)}}></input><br></br>
        Enter ConformPassword:<input type="password" onChange={(event)=>{setConfirmpassword(event.target.value)}}></input><br></br>
        <input type="checkbox" checked={ischeck}
        onChange={(event)=>{setIscheck(event.target.checked)}}></input> I am accepting all terms and conditions.
        <input type="submit" value="register"></input> 
      </form>
    </div>
  )
}
