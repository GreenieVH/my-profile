import React from 'react'
import './ContactMe.scss'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container'> 
      <h5>Contact Me</h5>
      <div className="contact-content flex gap-12">
        <div className="flex-1">
            <ContactInfoCard 
                icon={<HiOutlineMail className='icon'/>}
                text={"tranhoangth1979@gmail.com"}
            />
            <ContactInfoCard 
                icon={<IoLogoGithub className='icon'/>}
                text={"https://github.com/GreenieVH"}
            />
        </div>
        <div className="flex-1">
            <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
