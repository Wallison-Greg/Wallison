import React from 'react'
import './TitleSection.css'

const TitleSection = ({title}) => {
  return (
    <div className='title-area'>
        <div className='title-text'>{title}</div>
        <div className='title-bar'></div>
    </div>
  )
}

export default TitleSection