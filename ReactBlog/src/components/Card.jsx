import React from 'react'
import '../styles/Blog.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';

function Card({title,image,content,creator,publishDate}) {
  return (
    <div className='card'>
        <div className='card-title'>
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h3>{title}</h3>
        </div>
        <div className='card-content'>
            <p>{content}</p>
        </div>
        <div className='card-footer'>
            <h5><PersonRoundedIcon/> {creator}</h5>
            <h5><QueryBuilderRoundedIcon/> {publishDate}</h5>
        </div>
    </div>
  )
}

export default Card