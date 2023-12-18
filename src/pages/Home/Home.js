import React, {useEffect} from 'react'
import './Home.css'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityIcon from '@mui/icons-material/Visibility';

//img
import PerfilBanner from '../../assets/img/perfil_banner.png';

//components
import TitleSection from '../../components/TitleSection';

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

//scrollreveal
import ScrollReveal from 'scrollreveal';

const Home = () => {

    const {documents: projects, loading} = useFetchDocuments('projects')

    useEffect(() => {
        const titulo = document.getElementById('dev');

        const typeWrite = (element) => {

            const textoArray = element.innerHTML.split('');

            element.innerHTML = ''

            textoArray.forEach((letra, i) => {
                setTimeout(() => element.innerHTML += letra, 100 * i)
            });
        }

        typeWrite(titulo)
    }, []);

    //animando o elemento com o scroll da pagina 
    ScrollReveal().reveal('.project', { duration: 1000, reset: true });

  return (
    <main>

        <section className='banner'>
            <div class="banner-sombra">
                <div className='banner-info'>
                    <h3>Oi, eu sou</h3>
                    <h1>Wallison Gregorio.</h1>
                    <h3>Desenvolvedor <span id='dev'>Front-end</span></h3>
                    <div className='banner-contact'>
                        <a
                            href='https://github.com/Wallison-Greg'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon style={{marginRight: 3}}/> GitHub <span></span>
                        </a>
                        <a
                            href='www.linkedin.com/in/wallison-greg'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon/> LinkedIn <span></span>
                        </a>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={PerfilBanner} alt='imagem banner'/>
                    <div className='sombra'></div>
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
