import React from 'react';
import { useNavigate } from 'react-router';

export default function Firstpage () {
  const navigate = useNavigate();
  return (
      <div>
        <img src="" alt="logo" />
        <img src="" alt="ilustracao1" />
        <h2>Seja bem-vinda</h2>
        <form>
          <label>
            <input type="radio" />
            Sou paciente
          </label>
          <label>
            <input type="radio" />
            Sou profissional
          </label>
        </form>
        <button onClick={ () => navigate('/login') }>
          Quero me cadastrar
        </button>
        <button>Já sou Cadastrado</button>
      </div>
    )
  }
  