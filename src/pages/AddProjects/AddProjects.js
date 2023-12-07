import React from 'react'
import './AddProjects.css'

//hooks
import { useState, useEffect } from 'react'

//icons
import SendIcon from '@mui/icons-material/Send';

const AddProjects = () => {
  return (
    <div className='add-project'>
      <h1>Cadastrar novo projeto</h1>
      <p>formulario de cadastro de projetos</p>
      <form>
        <label>
          <span>Capa:</span>
          <input type='text' placeholder='URL da capa do projeto' required name='git' />
        </label>
        <label>
          <span>Titulo:</span>
          <input type='text' placeholder='Nome do Projeto' required name='title' />
        </label>
        <label>
          <span>Descrição:</span>
          <input type='text' placeholder='Descrição do projeto' required name='info' />
        </label>
        <label>
          <span>Tecnologias:</span>
          <input type='text' placeholder='Tecnologias utilizadas' required name='tags' />
        </label>
        <label>
          <span>Deploy:</span>
          <input type='text' placeholder='URL do projeto' required name='deploy' />
        </label>
        <label>
          <span>GitHub:</span>
          <input type='text' placeholder='URL do github' required name='git' />
        </label>
        <button className='btn' style={{fontWeight: 'bold'}}>
          <SendIcon style={{marginRight: 3}}/> Enviar
        </button>
      </form>
    </div>
  )
}

export default AddProjects