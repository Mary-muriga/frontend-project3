import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Adoptedpets() {
const{id} = useParams()
console.log(id)
const[pet, setPet]= useState({})
const[owner, setOwner]= useState({})
const[petlover, setPetlover]= useState({})




useEffect(()=> {
    fetch(`http://localhost:9292/pets/${id}`)
    .then((response)=> response.json())
    .then((pet)=> setPet(pet));
  }, []);

  useEffect(()=> {
    fetch(`http://localhost:9292/owners/${pet.owner_id}`)
    .then((response)=> response.json())
    .then((owner)=> setOwner(owner));
  }, [pet]);

  useEffect(()=> {
    fetch(`http://localhost:9292/petlovers/${pet.petlover_id}`)
    .then((response)=> response.json())
    .then((petlover)=> setPetlover(petlover));
  }, [pet]);

  return (
    <div>
        <img src= {pet.image_url}/>
        <p>Name: {pet.name}</p>
        <p>Breed: {pet.breed}</p>
        <p>Previous owner: {owner.name}</p>
        <p>Adopted by: {petlover.name}</p>
    </div>
  )
}
export default Adoptedpets;