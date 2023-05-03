import React from 'react'
import './styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='social'>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>

        </div>
        <p>Copyright © 2023 ReactBlog.</p>
    </footer>
  )
}
