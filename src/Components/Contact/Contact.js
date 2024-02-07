import React from 'react';
import './Contact.css';
import ContactCard from './ContactCard';
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import ContactForm from './ContactForm';



export const Contact = () => {
  return (
    <section className='contact-container'>
        <h3>Contact Me</h3>
        <div className='contact-content'>
        <div style={{flex:1}}>
            <ContactCard iconUrl={email}  text="meghachandu26@gmail.com"  />
            <ContactCard iconUrl= {github} text="https://github.com/meghana26042002/megha-.git"/>
        </div>
        <div style={{flex:1}}></div>
        <ContactForm />
        </div>
    </section>
  )
}
export default Contact;