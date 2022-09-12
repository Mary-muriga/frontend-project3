import React from 'react'
import { useState } from 'react';

 function Addpet() {
const[pet, setPet]=useState({
  name: "",
     breed: "",
     category: "",
     age: "",
     color: "",
     image_url: "",
});

function handleChange(e) {
  setPet({...pet, [e.target.name]: e.target.value});
}

function handleSubmit(e){
  e.preventDefault();

  fetch("https://simpleshoppingapi.herokuapp.com/cars", 
  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    })
      .then((r) => r.json())
      .then((pet) => setPet(pet));
   }


  return (
    <div>
        <h2>Add your pet here</h2>
        <form className='addPet' onSubmit={handleSubmit}>
          <input
          placeholder='enter image'
          type='string'
          name="image"
          value={pet.image}
          onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
export default Addpet;
