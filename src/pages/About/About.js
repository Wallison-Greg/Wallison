import React from 'react'
import './About.css'

//img
import Perfil from '../../assets/img/perfil.jpeg';

//components
import TitleSection from '../../components/TitleSection';

const About = () => {
  return (
    <section className='about'>
        <TitleSection title='sobre mim'/>
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

  )
}

export default About