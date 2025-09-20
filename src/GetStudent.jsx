import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function GetStudent() {
  
    let [students,setStudents]=useState([]);
    let [isupdate,setIsupdate]=useState(false);
    let [name,setName]=useState('');
    let [course,setCourse]=useState('');
    let [marks,setMarks]=useState(0.0)
    let [rollno,setRollno]=useState(0)
   
    useEffect(()=>
    {
        getallstudents();
    },[])

    let getallstudents=()=>
    {
        axios.get("http://localhost:8080/findall")
        .then((response)=>
        {
            console.log(response.data);
            setStudents(response.data);

        })
        .catch(()=>{
            console.log("error");
        });
    }

    let deletestudbyid=(rollno)=>
    {
        axios.delete(`http://localhost:8080/deletestudbyid/${rollno}`)
        .then((response)=>
        {
            if(response.data=="Student Record Deleted Sucesfully!!!")
            {
                alert("Student Record Deleted Sucesfully!!!");
                getallstudents();
                
            }

           
        })
        .catch((error)=>{
            alert(error)
        });
    }
    let updatedata=(stud)=>
    {
        setIsupdate(true);
        setName(stud.name);
        setCourse(stud.course);
        setMarks(stud.marks);
        setRollno(stud.rollno);
    }
    let actualupdate=(event)=>
    {
        event.preventDefault();
        let newstud={name,course,marks};
          axios.put(`http://localhost:8080/updatestud?rollno=${rollno}`,newstud)
        .then((response)=>{
            if(response.data=="Student record updated successfully")
            {
                alert("Student record updated successfully");
                getallstudents();
                setIsupdate(false);
            }
        })
        .catch((error)=>{alert(error)})

    }
  
    return (
    <div>

        <table className="table table-bordered border-primary">
        <thead>

            <tr>
                <th>RollNo</th>
                <th>Name</th>
                <th>Course</th>
                <th>Marks</th>
                <th>Actions</th>
            </tr>

        </thead>
        <tbody>
            {
                students.map((stud)=>

                    <tr>
                        <td>{stud.rollno}</td>
                        <td>{stud.name}</td>
                        <td>{stud.course}</td>
                        <td>{stud.marks}</td>
                        <td>
                            <button onClick={()=>{deletestudbyid(stud.rollno)}}>Delete</button>
                            <button onClick={()=>{updatedata(stud)}}>Update</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>

    {
        isupdate?<form onSubmit={actualupdate}>
        <h1>Update Form</h1> 
      Enter Name:<input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}></input><br></br>
      Select Course:<select value={course} onChange={(event)=>{setCourse(event.target.value)}}>
        <option >Select Course</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="HTML">HTML</option>
        <option value="React">React</option>
      </select><br></br>
      Enter Marks:<input type="number" value={marks} onChange={(event)=>{setMarks(event.target.value)}}></input><br></br>
      <input type="submit" value="Update Student Info"></input>
      
      </form>:null
    }

    
      
    </div>
  )
}
