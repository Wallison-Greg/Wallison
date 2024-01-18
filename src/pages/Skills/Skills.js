import React from 'react'
import './Skills.css'

//components
import TitleSection from '../../components/TitleSection'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Skills = () => {

    const {documents: listFront} = useFetchDocuments('frontend');
    const {documents: listBack} = useFetchDocuments('backend');

  return (
        <section className='skills'>   
            <TitleSection title='front-end'/>
            <div className='skills-area'>
                <ul>
                    {listFront && listFront.map((item, key) => (
                        <li className='skill' key={key}>
                            <div className='logo'>
                                <img src={item.src} alt={item.alt} />
                            </div>
                            <div className='title'>{item.title}</div>
                            <div className='desc'>
                                <p>{item.desc}</p>
                            </div>
                            <div className='exp'>{item.exp}</div>
                        </li>
                    ))}
                </ul>
            </div>

            <TitleSection title='back-end'/>
            <div className='skills-area'>
                <ul>
                    {listBack && listBack.map((item, key) => (
                        <li className='skill' key={key}>
                            <div className='logo'>
                                <img src={item.src} alt={item.alt} />
                            </div>
                            <div className='title'>{item.title}</div>
                            <div className='desc'>
                                <p>{item.desc}</p>
                            </div>
                            <div className='exp'>{item.exp}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
  )
}

export default Skills;