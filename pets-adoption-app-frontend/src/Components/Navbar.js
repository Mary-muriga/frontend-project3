import React from 'react'
import{Link} from 'react-router-dom'

export default function Navbar() {
  return (
  
   
    <div className = 'nav-bar'> 
    <h2>Catshelter</h2>
      <Link className= "nav-menu" to= '/'> Home</Link>
      <Link className='nav-menu' to= '/cats'> Cats</Link>
    </div>
    
  )
}
