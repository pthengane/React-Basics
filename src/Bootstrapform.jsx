import React from 'react'

export default function Bootstrapform() {
  return (
    <div>
      <h1 className="text-danger">Registration Form</h1>
      <form>
        <label className="form-label">Enter Name</label>
        <input type="text" className="form-control"></input>
        Enter Email : <input type="email" className="form-control"></input>
        Select City : <select className="form-select">
            <option>select city</option>
            <option>Pune</option>
            <option>Mumbai</option>
        </select>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>

<label className="form-label">Select Gender</label>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

<label className="form-label">Select Subject</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label class="form-check-label" for="flexCheckDefault">
    Java Programming 
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
    Python Programming
  </label>
</div><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
    C Programming
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
    C++ Programming
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
  <label class="form-check-label" for="flexCheckChecked">
    HTML Programming
  </label>
</div>


<button>Submit</button>
<input type="submit" className="btn bg-warning"></input>


      </form>
    </div>
  )
}
