import React, {useEffect, useState} from 'react'
import './Home.css'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//img
import PerfilBanner from '../../img/perfil_banner_2.png';
import Perfil from '../../img/perfil.jpeg';

//components
import ListSkills from '../../components/ListSkills';

const Home = () => {

    const skills = [
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: 'react',
            title: 'React',
            desc: 'avançado'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
            alt: 'node-js',
            title: 'Node.js',
            desc: 'medio'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            alt: 'express-js',
            title: 'Express',
            desc: 'medio'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
            alt: 'mongodb',
            title: 'MongoDB',
            desc: 'medio'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
            alt: 'c-sharp',
            title: 'C-Sharp',
            desc: 'medio'
        }
    ]

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
    }, [])

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

        <section className='skills'>
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
    </main>
  )
}

export default Home