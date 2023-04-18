import React, { useState } from 'react'

import './ManipularValores.css'

const ManipularValores = () => {
  
  const [nome, setNome] = useState()
  const [contato, setContato] = useState()
  const [mensagem, setMensagem] = useState()
  

  const handleName = (e) => {
    setNome(e.target.value)
  }

  const handlecontato = (e) => {
    setContato(e.target.value)
  }

  const handleMensagem = (e) => {
    setMensagem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {nome, contato, mensagem}
    let jsonToSend = JSON.stringify(obj)
    console.log("Vai enviar o formulário para o back-end:")
    console.log(`Nome: ${nome} Contato: ${contato} Mensagem: ${mensagem}`)
    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`)
  }
    
    return (
    <div>
        <h1>Cadastro de aluno!!</h1>
        <form onSubmit={handleSubmit} className='form1'>
            <label>
                Nome:
                <input name='nome' type='text' className='inputs' onChange={handleName}/>
            </label>
            <br/>
            <label>
                Contato:
                <input name='contato' type='text' className='inputs' onChange={handlecontato}/>
            </label>
            <br/>
            <label>
                Mensagem:
                <input name='Mensagem:' type='text' className='inputs' onChange={handleMensagem}/>
            </label>
            <br/>
            <button className='btn'>Enviar</button>
        </form>
    </div>
  )
}

export default ManipularValores