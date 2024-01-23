import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';



 export const App= ()=> {
  return(
  
 <div className="App">
  
  <BrowserRouter>
        <Navbar />
        <Routes/>
          
        <Routes/>
      </BrowserRouter>
 
  
  
  

 </div>
  



  );
}

