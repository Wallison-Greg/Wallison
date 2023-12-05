import React, {useEffect} from 'react'
import './Home.css'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityIcon from '@mui/icons-material/Visibility';

//img
import PerfilBanner from '../../img/perfil_banner.png';

//components
import TitleSection from '../../components/TitleSection';

const Home = () => {

    const projects = [
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        },
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        },
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        },
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        },
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        },
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        }
        ,
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        },
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        },
        {
            capa: 'https://img.freepik.com/vetores-premium/bate-papo-de-bolhas-de-fala-para-whatsapp_300191-833.jpg',
            logo: 'https://logospng.org/download/whatsapp/logo-whatsapp-256.png',
            title: 'WhatsApp Clone',
            info: 'projeto react whatsApp clone aplicado pelo professor Bonieky Lacerda, tem como objetivo recriar as funcionalidades basicas do whatsApp',
            tags: 'Material icons, emoji picker, firebase, react',
            deploy: '',
            git: ''
        }
    ]

    const observer = new IntersectionObserver( entries => {
        Array.from(entries).forEach(entry => {
            entry.target.classList.add('init-hidden-off')
        })
    }, {
        threshold: .5
    })

    Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
        observer.observe(element)
    })

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
                            href='https://www.linkedin.com/in/wallison-gregorio-ba23a922b/'
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
            <TitleSection title='projetos'/>
            <div className='projects-area'>
                <ul>
                    {projects.map((item, key) => (
                        <li key={key} className={key % 2 === 0 ? 'project' : 'project project-right'}>
                            <div className='proj-logo'>
                                <img src={item.capa} alt='logo'/>
                            </div>
                            <div className='proj-desc'>
                                <h2 className='proj-title'>{item.title}</h2>
                                <p className='proj-info'>{item.info}</p>
                                <p className='proj-skills'>{item.tags}</p>
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
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </main>
  )
}

export default Home
