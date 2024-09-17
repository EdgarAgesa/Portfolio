import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import NavBar from './Navbar';
import Projects from './Projects';


const AppRoutes = () => {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
