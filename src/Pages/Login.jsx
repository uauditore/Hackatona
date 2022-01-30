import React from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  const navigate = useNavigate();
    return(
      <div>
        <h2>Cadastre-se</h2>
        <p>ou</p>
        <h5>Preencha com seu e-mail</h5>
        <p>E-mail</p>
        <form>
          <label>
            <input type="email" placeholder='Insira aqui seu email' />
          </label>
        </form>
        <p>Crie uma senha</p>
        <form>
          <label>
            <input type="password" />
          </label>
        </form>
        <form>
          <label>
            <input type="checkbox" />
            Aceito os Termos de Uso e Política de Privacidade
          </label>
        </form>
        <button onClick={ () => navigate('/home') }>Cadastrar</button>
      </div> 
    )
  }