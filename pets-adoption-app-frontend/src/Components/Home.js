import React from 'react';
import image from '../images/persianbw.jpg';
import image1 from '../images/exoticblack.jpeg';
import image2 from '../images/americancurlbrown.jpeg';
import { Link } from 'react-router-dom';


function Home() {
  function handleClick(event){
    console.log(event);
  }
  return (
  
    <div>
      <h2>CATS ARE LOVELY, FRIENDLY AND FUN TO HAVE THEM AROUND</h2>
      <h2>WE LOVE CATS</h2>
       <div>
       <Link to = "/cats/adopt"><button className='button' onClick={handleClick}>View adopted pets</button></Link>
       </div>
       <div className='block'>
        <img className='img' src={image} />
        <img className= 'img' src={image1} />
        <img className= 'img' src={image2} />
       </div>
    </div>
    
  );
}

export default Home;
