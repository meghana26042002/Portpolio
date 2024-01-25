import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo1 from "../../assets/logo1.png";




const Navbar= () => {
    return(
        
        <nav className="navbar">
           <img src={logo1} alt="image"height={80}width={300}/>
           <div className="desktopMenu">
           <Link className="List">Home</Link>
                <Link className="List">About</Link>
                <Link className="List">Skills</Link>
                <Link className="List">Projects</Link>
                
                
                

           </div>
           <button className="desktopMenubtn">Contact Me</button>
          
        
           
                

                
        
        </nav>
        
      
    
    );
}






export default Navbar

