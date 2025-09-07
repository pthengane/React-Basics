import React from 'react'

export default function Bootstrapexample() {
  return (
    <div>
      <table className="table bg-warning text-dark table-bordered border-light">
        <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>Course</th>
        </tr>
        <tr>
            <td>1001</td>
            <td>Parth</td>
            <td>SpringBoot</td>
        </tr>
        <tr>
            <td>1002</td>
            <td>Vilas</td>
            <td>React</td>
        </tr>
      </table>
      <img className="img-fluid rounded img-thumbnail rounded-circle"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlslieT9ZQnDjyWXBim-A1huOHAgU-3ZZjQ&s">
      </img>
    </div>
  )
}

