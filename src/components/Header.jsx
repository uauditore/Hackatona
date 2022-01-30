import React from 'react';
import { useNavigate } from 'react-router';
import './Header.css'
import '../index.css'
import user from '../imgs/videochamada_paciente.png'
import bell from '../imgs/lupinha_busca.png'
import star from '../imgs/estrela_vazada.png'

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <div className='header-top'>
        <img
          src={user}
          alt="user"
          className='header-top__img'
          onClick={ () => navigate('/perfil') }
        />
        <img src={bell} alt="bell-button" />
      </div>

      <h2>Olá, Pessoa</h2>
      <span className='color-green'>O que gostaria de fazer hoje?</span>
      
      <div className='header__level'>
        <img src={star} alt="search-button" />
        <span>Nível atual: 4</span>
      </div>
    </header>
  );
}
