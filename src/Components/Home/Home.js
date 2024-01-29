import React from 'react';
import './Home.css';
import image from "../../assets/image.jpg";
import { Link } from 'react-router-dom';


const Home = () =>{
    return(
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introtext'>I'm<span className='IntroName'>Meghana</span></span>
                <p className='introPara'> I am a web developer</p>
              <Link to="/#"  ><button className='btn'> Hire me</button></Link>
            </div>
            <img src={image} alt="profile" className="image"/>

        </section>






    );

    
}
export default Home
