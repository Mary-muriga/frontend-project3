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
      <p>ADOPT US</p>
      <p>WE NEED YOUR HELP</p>
       <div className='button'>
       <Link to = "/cats/adopt"><button onClick={handleClick}>Find a pet to adopt</button></Link>
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
