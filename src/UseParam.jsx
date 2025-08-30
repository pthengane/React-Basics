import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseParam() {
    let [id,setId]=useState(0);
    let navigate=useNavigate();

    let searchuser=(event)=>
    {
        event.preventDefault()
        navigate(`/user/${id}`)
    }


  return (
    <div>
      <form onSubmit={searchuser}>
        Enter id:<input type="number" onChange={(event)=>{setId(event.target.value)}}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}
