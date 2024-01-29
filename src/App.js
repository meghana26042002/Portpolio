import React from "react";
import { BrowserRouter,Route, Routes  } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';




 export  const App= ()=> {
  return(
  
<div className="App">
<BrowserRouter>  


        <Navbar />
        
        <Home/>
        <Routes>
        <Route path="/" element={<Home />} />
    
          
      

          
        </Routes>
        </BrowserRouter>
      
      
 </div>
  
  
  

 
  



  );
}
