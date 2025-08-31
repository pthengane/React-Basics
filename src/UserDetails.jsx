import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {

    let info = useParams();
    console.log(info.id);

  return (
    
    <div>
    <h1>Id pass by admin is {info.id}</h1>
      
    
    
    
    </div>
  )
}
