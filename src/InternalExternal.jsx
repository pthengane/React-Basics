import React from 'react'
import './App.css';

export default function InternalExternal() {
  return (
    <div>
      <h1 style={{"color":"red", "backgroundColor":"yellow"}}>This is example of Inline CSS</h1>
      <p className="para">This is example of External CSS</p>
    </div>
  )
}
