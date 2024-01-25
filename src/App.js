import React from "react";
import { BrowserRouter, Routes  } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/intro';




 export  const App= ()=> {
  return(
  
<div className="App">
<BrowserRouter>  


        <Navbar />
        <Intro/>
        <Routes>
      

          
        </Routes>
        </BrowserRouter>
      
      
 </div>
  
  
  

 
  



  );
}
