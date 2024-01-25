import React from 'react';
import './intro.css';
import image from "../../assets/image.jpg";


const Intro = () =>{
    return(
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introtext'>I'm<span className='IntroName'>Meghana</span></span>
                <p className='introPara'> I am a web developer</p>
                <button className='btn'> Hire me</button>
            </div>
            <img src={image} alt="profile" className="image"/>

        </section>






    );

    
}
export default Intro
