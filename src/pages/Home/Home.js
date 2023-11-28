import React, {useEffect, useRef} from 'react'
import './Home.css'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

//img
import PerfilBanner from '../../img/perfil_banner.png';
import Perfil from '../../img/perfil.jpeg';

//components
import ListSkills from '../../components/ListSkills';
import ProjectList from '../../components/ProjectList';

const Home = () => {

    const skills = [
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: 'react',
            title: 'React',
            desc: 'O React é uma biblioteca front-end JavaScript popular para desenvolvimento de código aberto com foco em criar interfaces de usuário em páginas web.'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
            alt: 'node-js',
            title: 'Node.js',
            desc: 'O Node.js pode ser definido como um ambiente de execução Javascript server-side permitindo a execução de códigos fora de um navegador web.'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            alt: 'express-js',
            title: 'Express',
            desc: 'O Express é um framework para aplicações web Node.js flexíveis que fornece um conjunto robusto de recursos para aplicativos web e móvel.'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
            alt: 'mongodb',
            title: 'MongoDB',
            desc: 'O MongoDB é um banco de dados NoSQL orientado a documentos ou seja, que não se utiliza de tabelas e colunas pré-definidas.'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
            alt: 'c-sharp',
            title: 'C-Sharp',
            desc: 'C-Sharp é uma linguagem de programação orientada a objetos criada pela Microsoft, sendo a principal da plataforma .NET'
        }
    ]

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

    const carousel = useRef(null);

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

    const handleLeftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

  return (
    <main>

        <section className='banner'>
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
        </section>

        <section className='about'>
            <div className='title-area'>
                <div className='title-text'>sobre mim</div>
                <div className='title-bar'></div>
            </div>
            <div className='about-area'>
                <div className='perfil-img'>
                    <img src={Perfil} alt='imagem perfil'/>
                </div>
                <div className='about-desc'>
                    Meu nome é Wallison da Silva Gregório e sou apaixonado por tecnologia. Meu primeiro contato com o mundo da tecnologia foi por volta de 2016 a 2017.
                    <br/>Na qual tive um contato básico com JavaScript vendo alguns scripts, comecei a me aprofundar na área tecnológica em 2019 quando dei início a minha graduação em <abbr title="Analise e Desenvolvimento de Sistemas">A.D.S</abbr> me formando em 2021.
                    <br/><br/>Meus conhecimentos.
                    <br/><strong>Front-end:</strong> HTML, CSS, JS e React.js
                    <br/><strong>Back-end:</strong> Node.js, Express e C#
                </div>
            </div>
        </section>

        <section className='skills init-hidden'>
            <div className='title-area'>
                <div className='title-text'>habilidades</div>
                <div className='title-bar'></div>
            </div>
            <div className='skills-area'>
                <ul>
                    {skills.map((item, key) => (
                        <ListSkills
                            key={key}
                            src={item.src}
                            alt={item.alt}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </ul>
            </div>
        </section>

        <section className='projects init-hidden'>
            <div className='title-area'>
                <div className='title-text'>projetos</div>
                <div className='title-bar'></div>
            </div>
            <div class="container-projects">
                <KeyboardArrowLeftIcon className='next-slide left' onClick={handleLeftClick}/>
                <div class="carousel-projects" ref={carousel}>
                    <div className='projects-area'>
                        <ul>
                            {projects.map((item, key) => (
                                <ProjectList
                                    key={key}
                                    capa={item.capa}
                                    logo={item.logo}
                                    title={item.title}
                                    info={item.info}
                                    tags={item.tags}
                                    deploy={item.deploy}
                                    git={item.git}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <KeyboardArrowRightIcon className='next-slide right' onClick={handleRightClick}/>
            </div>
        </section>
    </main>
  )
}

export default Home