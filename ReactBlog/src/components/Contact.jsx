import React from 'react'
import '../styles/Contact.css'
import contact from '../assets/contact.jpg'
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  return (
    <div className='main-contact'>
      <div className='left-side'>
          <h1>Contact Us !</h1>
          <form >
            <label>Your Name</label>
            <input type="text" name='name' autoComplete='off' placeholder='Please enter your name...'/>
            <label>Your Email</label>
            <input type="email" name='email' autoComplete='off' placeholder='Please enter your email...'/>
            <label>Your Message</label>
            <textarea rows={10} type="text" name='message'  placeholder='Please enter your message...'/>
            <button><SendIcon/> Send </button>
          </form>
      </div>
      <div className='right-side' style={{backgroundImage:`url(${contact})`}}>

      </div>
    </div>
  )
}
