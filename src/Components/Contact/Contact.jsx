import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Feel free to get in touch! Whether you have questions, collaboration ideas, or just want to connect, I'd love to hear from you. You can reach out via email, connect with me on LinkedIn, or use the contact form below. Let's create something amazing together!</p>
            <div className="contact-details">
                <div className="contact-detail">
                     <img src={mail_icon} alt="" />
                     <p>sikdarananya2000@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>9434579400</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Kolkata</p>
                </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact