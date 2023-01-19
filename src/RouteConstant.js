import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import MovieDetail from './Components/MovieDetail/MovieDetail';

const RouteConstant = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/moviedetail/:id' element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default RouteConstant;
