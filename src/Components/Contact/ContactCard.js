import React from 'react'
import "./ContactCard.css";

const ContactCard = ({iconUrl,text}) => {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
            <img src={iconUrl} className='image1' alt={text} height={50} width={50} />
        </div>
        <p>{text}</p>
    </div>
  )
}
export default ContactCard;