import React from 'react';
import { useNavigate } from 'react-router';
import './Firstpage.css'
import mulheresImg from '../imgs/mulheres_maos_pra_cima.png'
import logo from '../imgs/logo.png'

export default function Firstpage () {
  const navigate = useNavigate();
  return (
      <div className='first-page center-page'>
        <img src={logo} alt="logo" className='first-page__logo'/>
        <img src={mulheresImg} alt="" />
        <h2>Seja bem-vinda</h2>
        <form className='first-page__form'>
          <label>
            <input type="radio" />
            Sou paciente
          </label>
          <label>
            <input type="radio" />
            Sou profissional
          </label>
        </form>
        <button className='button' onClick={ () => navigate('/login') }>
          Quero me cadastrar
        </button>
        <p className='first-page__cadastro'>Já sou cadastrado</p>
      </div>
    )
  }
  