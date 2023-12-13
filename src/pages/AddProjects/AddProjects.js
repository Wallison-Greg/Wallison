import React from 'react'
import './AddProjects.css'

//hooks
import { useState, useEffect } from 'react'
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useNavigate } from 'react-router-dom';

//icons
import SendIcon from '@mui/icons-material/Send';

const AddProjects = () => {

  const [capa, setCapa] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [skills, setSkills] = useState("");
  const [deploy, setDeploy] = useState("");
  const [git, setGit] = useState("");
  const [projectError, setProjectError] = useState("");

  const {user} = useAuthValue()

  const {insertDocument, response} = useInsertDocument("projects");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setProjectError("");

    //validando a url da imagem 
    try {
      new URL(capa);
    } catch (error) {
      setProjectError("A imagem precisa ser uma Url")
    }


    //checando todos os valores do formulario

    if(!title || !capa || !info || !skills || !deploy || !git){
      setProjectError("Preencha todos os campos")
    }

    if(projectError) return; //para o envio do formulario caso haja algum erro 

    insertDocument({
      capa,
      title,
      info,
      skills,
      deploy,
      git,
      uid: user.uid
    })

    //redirect
    navigate("/")
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
            value={capa}
            onChange={(e) => setCapa(e.target.value)}
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
        {response.error && <p className='error'>{response.error}</p>}
        {projectError && <p className='error'>{projectError}</p>}
      </form>
    </div>
  )
}

export default AddProjects