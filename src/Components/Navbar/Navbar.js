import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo1 from "../../assets/logo1.png";




const Navbar= () => {
    return(
        
        <header>
           <img src={logo1} alt="image"height={100}width={200}/>
          
        <nav>
           
                <Link to="/#">Home</Link>
                <Link to="/#">About</Link>
                <Link to="/#">Skills</Link>
                <Link to="/#">Contact</Link>
                

                
        
        </nav>
        </header>
      
    
    );
}






export default Navbar

