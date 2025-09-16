import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function GetExample() {

    let [users,setUsers]=useState([]);

    useEffect(()=>
    {
        getdata();
    },[])

    let getdata=()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>
        {
            console.log(response.data);
            setUsers(response.data);

        })
        .catch(()=>{});
    }
  return (
    <div>
      
    <table className="table table-bordered border-primary">
        <thead>

            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Website</th>
            </tr>

        </thead>
        <tbody>
            {
                users.map((u)=>

                    <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>{u.websi}</td>
                    </tr>
                )
            }
        </tbody>
    </table>

    </div>
  )
}
