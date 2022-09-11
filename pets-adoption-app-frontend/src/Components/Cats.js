import React from 'react'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function Cats() {
  const[pets, setPets] = useState([]);
  
  useEffect(()=> {
    fetch("http://localhost:9292/pets")
    .then((response)=> response.json())
    .then((pets)=> setPets(pets));
  }, []);

  function handleClick(event){
    // console.log(event);
  }


  return (
    
    <div >

      {pets.map((pet)=>(
      
        <div>
        <img className ="image" src={pet.image_url} alt={pet.name}/>
        <p>Name: {pet.name}</p>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age} years</p>
        <p>Type: {pet.category}</p>
        <Link to={`/adopted/${pet.id}`} id={pet.id}><button id={pet.id} onClick={handleClick}>View details</button></Link>
        <button onClick={handleClick}>Remove</button>
      </div>
      ))}
      
    </div>
      
  
  )
}
export default Cats;