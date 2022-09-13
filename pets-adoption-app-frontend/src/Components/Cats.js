import React from 'react'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Adoptedpets from './Adoptedpets';
import Addpet from './Addpet';


function Cats() {
  const[pets, setPets] = useState([]);
  
  useEffect(()=> {
    fetch("https://mycatpet.herokuapp.com/pets")
    .then((response)=> response.json())
    .then((pets)=> setPets(pets));
  }, []);

   function handleClick(event){
     event.preventDefault();
  }

 function addPets(newPet){
  const updatedPets = [...pets, newPet]
  setPets(updatedPets)
 }

 function handleClickDelete(e){
  let id =e.target.id;
  

  fetch(`https://mycatpet.herokuapp.com/pets/${id}`,{
    method: "DELETE",
  })
  .then((r) => r.json())
  .then((deletePet) => handleDelete(deletePet));
 }
 function handleDelete(deletePet){
  let newCats=pets.filter((item)=> item.id !== deletePet.id)
  setPets(newCats)
 }
// console.log(pets.id)

  return (
    
    <div >
      <h2>Adorable cats</h2>
      <Addpet addPets={addPets}/>

      {pets.map((pet)=>(
      
        <div key={pet.id}>
        <img className ="image" src={pet.image_url} alt={pet.name}/>
        <p>Name: {pet.name}</p>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age} years</p>
        <p>Type: {pet.category}</p>
        <div>
        <Link to={`/adopted/${pet.id}`} id={pet.id}><button className='button' id={pet.id} onClick={handleClick}>View details</button></Link>

        
        
        <button id={pet.id} className='button' onClick={handleClickDelete}>Remove</button>
        </div>

      </div>
      ))}
      
    </div>
      
  
  )
}
export default Cats;