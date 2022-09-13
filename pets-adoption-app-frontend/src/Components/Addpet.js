import React from 'react'
import { useState } from 'react';
import axios from 'axios';

 function Addpet() {
const[pet, setPet]=useState({
     name: "",
     breed: "",
     category: "",
     age: "",
     color: "",
     image_url: "",
     owner_id: 0,
     petlover_id: 0
});



function handleSubmit(e){
  e.preventDefault();
  axios.post("https://mycatpet.herokuapp.com/pets", 
  {
      name:pet.name,
      breed:pet.breed,
      category:pet.category,
      age:parseInt(pet.age),
      color:pet.color,
      image_url:pet.image_url,
    })
   }
   function handleChange(e) {
    setPet({...pet, [e.target.name]: e.target.value});
  }


  return (
    <div classname="petform">
        <form className='addPet' onSubmit={handleSubmit}>
        <h3>Add your pet here</h3>
          <label className='label-text' htmlFor='image'>Image</label>
          <input className='form-1'
          placeholder='enter the image'
          type='text'
          name='image_url'
          id ="image"
          value={pet.image_url}
          onChange={handleChange}/><br/>

          <label className='label-text' htmlFor='breed'>Name</label>
          <input className='form-1' placeholder='enter the name'
          type="text"
          name="name"
          value={pet.name}
          onChange={handleChange}/><br/>
                                                                                                      
          <label className='label-text' htmlFor='breed'>Breed</label>
          <input className='form-1' placeholder='enter the breed'
          type="text"
          name="breed"
          value={pet.breed}
          onChange={handleChange}/><br/>

          <label className='label-text' htmlFor='age'>Age</label>
          <input className='form-1' placeholder='enter the age'
          type="text"
          name="age"
          value={pet.age}
          onChange={handleChange}/><br/>

          <label className='label-text' htmlFor='color'>Color</label>
          <input className='form-1'placeholder='enter the color'
          type="text"
          name="color"
          value={pet.color}
          onChange={handleChange}/><br/>

          <label className='label-text' htmlFor='category'>Category</label>
          <input className='form-1' placeholder='enter the category'
          type="text"
          name="category"
          value={pet.category}
          onChange={handleChange}/><br/>
          <button>submit</button>
          
        </form>
    </div>
  )
}
export default Addpet;
