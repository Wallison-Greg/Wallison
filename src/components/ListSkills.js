import React from 'react'
import './ListSkills.css'

const ListSkills = ({src, alt, title, desc}) => {
  return (
    <li className='skill'>
        <div className='logo'>
            <img src={src} alt={alt} style={{color: '##B98B57'}}/>
        </div>
        <div className='title'>{title}</div>
        <div className='desc'>{desc}</div>
    </li>
  )
}

export default ListSkills