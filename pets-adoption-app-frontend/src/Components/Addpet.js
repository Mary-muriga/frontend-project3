import React from 'react'
import { useState } from 'react';

 function Addpet({addPets}) {
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

  fetch("http://localhost:9292/pets", 
  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    })
      .then((r) => r.json())
      .then((pet) => addPets(pet));
   }


  return (
    <div>
        <h2>Add your pet here</h2>
        <form className='addPet' onSubmit={handleSubmit}>
          <label>Image</label>
          <input
          placeholder='enter the image'
          type='text'
          name="image"
          value={pet.image_url}
          onChange={handleChange}/>
                                                                                                      
          <label>Breed</label>
          <input placeholder='enter the breed'
          type="text"
          name="breed"
          value={pet.breed}
          onChange={handleChange}/>

          <label>age</label>
          <input placeholder='enter the age'
          type="text"
          name="age"
          value={pet.age}
          onChange={handleChange}/>

          <label>color</label>
          <input placeholder='enter the color'
          type="text"
          name="color"
          value={pet.color}
          onChange={handleChange}/>

          <label>category</label>
          <input placeholder='enter the category'
          type="text"
          name="category"
          value={pet.category}
          onChange={handleChange}/>

          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
export default Addpet;
