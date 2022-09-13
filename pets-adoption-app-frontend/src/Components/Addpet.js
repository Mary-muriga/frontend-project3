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

  fetch("https://mycatpet.herokuapp.com/pets", 
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
          <input className='form-1'
          placeholder='enter the image'
          type='text'
          name="image"
          value={pet.image_url}
          onChange={handleChange}/>
                                                                                                      
          <label className='label-text'>Breed</label>
          <input className='form-1' placeholder='enter the breed'
          type="text"
          name="breed"
          value={pet.breed}
          onChange={handleChange}/>

          <label className='label-text'>age</label>
          <input className='form-1' placeholder='enter the age'
          type="text"
          name="age"
          value={pet.age}
          onChange={handleChange}/>

          <label className='label-text'>color</label>
          <input className='form-1'placeholder='enter the color'
          type="text"
          name="color"
          value={pet.color}
          onChange={handleChange}/>

          <label className='label-text'>category</label>
          <input className='form-1' placeholder='enter the category'
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
