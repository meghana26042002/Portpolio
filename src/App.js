import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
