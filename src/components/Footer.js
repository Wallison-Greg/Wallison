import React from 'react'
import './Footer.css'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='contact'>
          <a className='icon' href='https://github.com/Wallison-Greg' target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a className='icon' href='https://wa.me/5562999769017' target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
          <a className='icon' href='https://www.linkedin.com/in/wallison-gregorio-ba23a922b/' target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        <p>Copyright &copy; Wallison 2023</p>
    </footer>
  )
}

export default Footer