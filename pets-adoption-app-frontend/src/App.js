import React from 'react';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cats from './Components/Cats';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Adoptedpets from './Components/Adoptedpets';

import "./index.css";
import Addpet from './Components/Addpet';


function App() {
  
 
  return (
    <>
    <Router>
      <div>
        <Navbar />
      </div>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path="/cats" element={<Cats />} />
      <Route path="/cats/adopt" element={<Cats />} />
      <Route exact path="/adopted/:id" element={<Adoptedpets />} />
      <Route exact path="/addpet" element={<Addpet />} />
    </Routes>
    </Router>
    </>
    
  );
}

export default App;
