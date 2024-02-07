import React from 'react';
import './Skills.css';
import Frontend from "./Frontend";

const Skills = () => {
    return(
        <section className='skills_secction'id='skills'>
            <h2 className='section_title'>Skills</h2>
            <span className='section_subtitle'>My technical level</span>
            <div className='skills_container'>  
            <Frontend /></div>
       
        </section>

    );
}
export default Skills;