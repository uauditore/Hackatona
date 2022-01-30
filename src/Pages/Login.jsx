import React from 'react';
import { useNavigate } from 'react-router';
import './Login.css'

export default function Login() {
  const navigate = useNavigate();
    return(
      <div className='login center-page'>
        <h2 className='green-text'>Cadastre-se</h2>
        <p className='ta-center'>ou</p>
        <h5 className='ta-center'>Preencha com seu e-mail</h5>
        <form className='login-form'>
          <label>
          E-mail
            <input type="email" placeholder='Insira aqui seu email' />
          </label>
       
          <label>
          Crie uma senha
            <input type="password" />
          </label>
        
        
          <label>
            <input type="checkbox" />
            Aceito os Termos de Uso e Política de Privacidade
          </label>
        </form>
        <button className="button" onClick={ () => navigate('/home') }>Cadastrar</button>
      </div> 
    )
  }