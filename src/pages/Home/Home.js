import React from 'react'
import './Home.css'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//img
import Perfil from '../../img/banner_1.png'

const Home = () => {
  return (
    <main>
        <section className='banner'>
            <div className='banner-info'>
                <h3>Oi, eu sou</h3>
                <h1>Wallison Gregorio.</h1>
                <h3>Desenvolvedor <span>Front-end</span></h3>
                <div className='banner-contact'>
                    <a 
                        href='https://github.com/Wallison-Greg' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon style={{marginRight: 3}}/> GitHub <span></span>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/wallison-gregorio-ba23a922b/' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon/> LinkedIn <span></span>
                    </a>
                </div>
            </div>
            <div className='banner-img'>
                <img src={Perfil} alt='imagem banner'/>
            </div>
        </section>
    </main>
  )
}

export default Home