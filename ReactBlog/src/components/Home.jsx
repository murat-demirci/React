import React from 'react'
import {NavLink} from 'react-router-dom'
import User from '../assets/user.jpg'
import '../styles/Home.css'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

export default function Home() {
  return (
    <div className='main-home' style={{backgroundImage:`url(${User})`}}>
      <div className='blog' >
        <NavLink to="/blog">
            <button>Show Blog <KeyboardDoubleArrowRightRoundedIcon className='home-right-icon'/></button>
        </NavLink>
      </div>
    </div>
  )
}
