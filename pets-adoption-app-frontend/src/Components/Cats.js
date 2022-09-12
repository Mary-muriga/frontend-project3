import React from 'react'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function Cats({addPets}) {
  const[pets, setPets] = useState([]);
  
  useEffect(()=> {
    fetch("http://localhost:9292/pets")
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

 function handleDelete(e){
  let id =e.target.id;
  

  fetch(`http://localhost:9292/pets/${id}`,{
    method: "DELETE",
  })
  .then((r) => r.json())
  .then((deletedPet) => handleDelete(deletedPet));
 }
console.log(pets.id)

  return (
    
    <div >
      <h2>Adorable cats</h2>

      {pets.map((pet)=>(
      
        <div>
        <img className ="image" src={pet.image_url} alt={pet.name}/>
        <p>Name: {pet.name}</p>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age} years</p>
        <p>Type: {pet.category}</p>
        <div>
        <Link to={`/adopted/${pet.id}`} id={pet.id}><button className='button' id={pet.id} onClick={handleClick}>View details</button></Link>

        <button className='button' onClick={handleClick}>Add a pet</button>
        
        <button id={pet.id} className='button' onClick={handleDelete}>Remove</button>
        </div>
      </div>
      ))}
      
    </div>
      
  
  )
}
export default Cats;