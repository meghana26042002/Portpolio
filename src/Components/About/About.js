import React from 'react';
import "./About.css";
import MeghanaCV from "../../assets/MeghanaCV.pdf";
import { BiSolidDownload } from "react-icons/bi";

const About = () => {
  return (
    <div className='about'>
      <h2 className='section_title'>About Me</h2>
      <div className='info'>
        <h3 className='section_sub'>Personal Information</h3>
        <div className='info_row'>
          <h4>First Name: Meghana</h4>
          <span className='right1'>Last Name: Puttha</span>
        </div>
        <div className='info_row'>
          <h4>Education: Bachelor of Computer Science</h4>
          <span className='right2'>Experience: Fresher</span>
        </div>
        <div className='info_row'>
          <h4>Address: Pune-14</h4>
          <span className='right3'>Phone No: 7972148094</span>
        </div>
        <div className='info_row'>
          <h4>Date of Birth: 26/04/2002</h4>
          <span className='right4'>Email id: meghachandu26@gmail.com</span>
        </div>
        <div className='button_icon'>
          <a href={MeghanaCV} className='button'>
            Download CV <BiSolidDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;