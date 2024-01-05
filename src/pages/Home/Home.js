import React from 'react'
import './Home.css'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityIcon from '@mui/icons-material/Visibility';

//components
import TitleSection from '../../components/TitleSection';

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Home = () => {

    const {documents: projects, loading} = useFetchDocuments('projects');

  return (
    <main>

        <section className='banner'>
                <div className='banner-info container'>
                    <div className='banner-title'>
                        <div className='first-line'>
                            <span className='title-item'>Oi,</span>
                            <span className='title-item'>eu</span>
                            <span className='title-item'>sou</span>
                            <span className='title-item'>Wallison</span>
                            <span className='title-item'>Gregorio</span>
                        </div>
                        <div className='second-line'>
                            <span className='title-item'>Desenvolvedor</span>
                            <span className='title-item'>Frontend</span>
                        </div>
                    </div>
                    <h2 className='sub-title'>
                        um desenvolvedor web focado no frontend
                    </h2>
                    <div className='banner-contact'>
                        <a
                            href='https://github.com/Wallison-Greg'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon style={{marginRight: 3}}/> GitHub <span></span>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/wallison-greg/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon/> LinkedIn <span></span>
                        </a>
                    </div>
                </div>
        </section>

        <section className='projects'>
            {loading && <p>Carregando...</p>}
            <TitleSection title='projetos'/>
            <div className='projects-area'>
                <ul>
                    {projects && projects.map((item, key) => (
                        <li key={key} className={key % 2 === 0 ? 'project' : 'project project-right'}>
                            <div className='proj-logo'>
                                <img src={item.capa} alt='logo'/>
                            </div>
                            <div className='proj-desc'>
                                <div class="desc-area">
                                    <h2 className='proj-title'>{item.title}</h2>
                                    <p className='proj-info'>{item.info}</p>
                                    <p className='proj-skills'>{item.skills}</p>
                                    <div className='proj-links'>
                                        <div className='btn'>
                                            <a  href={item.deploy} target="_blank" rel="noopener noreferrer">
                                                <VisibilityIcon style={{marginRight: 3}}/> Deploy
                                            </a>
                                        </div>
                                        <div className='btn'>
                                            <a  href={item.git} target="_blank" rel="noopener noreferrer">
                                                <GitHubIcon style={{marginRight: 3}}/> GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </main>
  )
}

export default Home