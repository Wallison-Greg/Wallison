import React from 'react'
import './AddProjects.css'

//hooks
import { useState, useEffect } from 'react'
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

//icons
import SendIcon from '@mui/icons-material/Send';

const AddProjects = () => {

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [skills, setSkills] = useState("");
  const [deploy, setDeploy] = useState("");
  const [git, setGit] = useState("");
  const [projectError, setProjectError] = useState("");

  const {user} = useAuthValue()

  const {insertDocument, response} = useInsertDocument("projects");

  const handleSubmit = (e) => {
    e.preventDefault();

    setProjectError("");

    //validando a url da imagem 



    //checando todos os valores do formulario

    insertDocument({
      image,
      title,
      info,
      skills,
      deploy,
      git,
      uid: user.uid
    })
  }

  return (
    <div className='add-project'>
      <h1>Cadastrar novo projeto</h1>
      <p>formulario de cadastro de projetos</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Capa:</span>
          <input 
            type='text' 
            placeholder='URL da capa do projeto' 
            required name='capa' 
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Titulo:</span>
          <input 
            type='text' 
            placeholder='Nome do Projeto' 
            required name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </label>
        <label>
          <span>Descrição:</span>
          <input 
            type='text' 
            placeholder='Descrição do projeto' 
            required name='info'
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>
        <label>
          <span>Tecnologias:</span>
          <input 
            type='text' 
            placeholder='Tecnologias utilizadas' 
            required name='skills'
            value={skills}
            onChange={(e) => setSkills(e.target.value)} 
          />
        </label>
        <label>
          <span>Deploy:</span>
          <input 
            type='text' 
            placeholder='URL do projeto' 
            required name='deploy'
            value={deploy}
            onChange={(e) => setDeploy(e.target.value)} 
          />
        </label>
        <label>
          <span>GitHub:</span>
          <input 
            type='text' 
            placeholder='URL do github' 
            required name='git'
            value={git}
            onChange={(e) => setGit(e.target.value)} 
          />
        </label>
        <button className='btn' style={{fontWeight: 'bold'}}>
          <SendIcon style={{marginRight: 3}}/> Enviar
        </button>
        {response.projectError && <p className='error'>{response.projectError}</p>}
      </form>
    </div>
  )
}

export default AddProjects