import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cats from './Components/Cats';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Adoptedpets from './Components/Adoptedpets';

import "./index.css";


function App() {
  
 
  return (
    <>
    <Router>
      
        <Navbar />
     
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path="/cats" element={<Cats />} />
      <Route path="/cats/adopt" element={<Cats />} />
      <Route exact path="/adopted/:id" element={<Adoptedpets />} />
    </Routes>
    </Router>
    </>
    
  );
}

export default App;
