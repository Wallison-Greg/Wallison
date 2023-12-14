import React from 'react'
import './Skills.css'

//components
import TitleSection from '../../components/TitleSection'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Skills = () => {

    const {documents: listSkills, loading} = useFetchDocuments('technologies');

  return (
        <section className='skills'>
            {loading && <p>Carregando...</p>}
            <TitleSection title='habilidades'/>
            <div className='skills-area'>
                <ul>
                    {listSkills && listSkills.map((item, key) => (
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
