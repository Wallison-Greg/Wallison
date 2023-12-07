import React from 'react'
import './Skills.css'

//components
import TitleSection from '../../components/TitleSection'

const Skills = () => {

    const skillsList = [
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: 'react',
            title: 'React',
            desc: 'O React é uma biblioteca front-end JavaScript popular para desenvolvimento de código aberto com foco em criar interfaces de usuário em páginas web.',
            nivel: 'Médio'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
            alt: 'node-js',
            title: 'Node.js',
            desc: 'O Node.js pode ser definido como um ambiente de execução Javascript server-side permitindo a execução de códigos fora de um navegador web.',
            nivel: 'Básico'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            alt: 'express-js',
            title: 'Express',
            desc: 'O Express é um framework para aplicações web Node.js flexíveis que fornece um conjunto robusto de recursos para aplicativos web e móvel.',
            nivel: 'Básico'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
            alt: 'mongodb',
            title: 'MongoDB',
            desc: 'O MongoDB é um banco de dados NoSQL orientado a documentos ou seja, que não se utiliza de tabelas e colunas pré-definidas.',
            nivel: 'Básico'
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
            alt: 'c-sharp',
            title: 'C-Sharp',
            desc: 'C-Sharp é uma linguagem de programação orientada a objetos criada pela Microsoft, sendo a principal da plataforma .NET',
            nivel: 'Médio'
        }
    ]


  return (
        <section className='skills'>
            <TitleSection title='habilidades'/>
            <div className='skills-area'>
                <ul>
                    {skillsList.map((item, key) => (
                        <li className='skill' key={key}>
                            <div className='logo'>
                                <img src={item.src} alt={item.alt} />
                            </div>
                            <div className='title'>{item.title}</div>
                            <div className='lvl'>{item.nivel}</div>
                            <div className='desc'>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
  )
}

export default Skills
