import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo1 from "../../assets/logo1.png";




const Navbar= () => {
    return(
        
        <nav className="navbar">
           <Link to ="/Home"><img src={logo1} alt="image"height={80}width={300}/></Link>
           <div className="desktopMenu">
           <Link to="/Home" className="List">Home</Link>
                <Link to="/About" className="List">About</Link>
                <Link to="/Skills"className="List">Skills</Link>
                
                
                
                

           </div>
         <Link to="/Contact"> <button className="desktopMenubtn">Contact Me</button></Link> 
          
        
           
                

                
        
        </nav>
        
      
    
    );
}






export default Navbar

