import React from 'react'
import './ProjectList.css'

//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectList = ({capa, logo, title, info, tags, deploy, git}) => {
  return (
    <li className='project'>
        <div className='cover-photo' style={{background: `url(${capa})`}}>
            <img className='logo-img' src={logo} alt='logo' style={{objectFit: 'cover'}}/>
        </div>
        <div className='project-title'>{title}</div>
        <p className='project-info'>
            {info}<span>{tags}</span>
        </p>
        <div class="project-view">
            <div className='btn'>
                <a  href={deploy} target="_blank" rel="noopener noreferrer">
                    <VisibilityIcon style={{marginRight: 3}}/> Deploy
                </a>
            </div>
            <div className='btn'>
                <a  href={git} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{marginRight: 3}}/> GitHub
                </a>
            </div>
        </div>
    </li>
  )
}

export default ProjectList
