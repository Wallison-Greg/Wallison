import React from 'react'
import './ProjectList.css'

const ProjectList = ({capa, logo, title, info, tags, deploy, git}) => {
  return (
    <li className='project'>
        <div className='cover-photo' style={{background: `url(${capa})`}}>
            <img className='logo-img' src={logo} alt='logo'/>
        </div>
        <div className='project-title'>{title}</div>
        <p className='project-info'>
            {info}
            <br/>
            <span>{tags}</span>
        </p>
        <div class="project-view">
            <div className='btn'>
                <a  href={deploy} target="_blank" rel="noopener noreferrer">Deploy</a>
            </div>
            <div className='btn'>
                <a  href={git} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    </li>
  )
}

export default ProjectList
