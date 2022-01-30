import React from 'react';
import { useNavigate } from 'react-router';
import Footer from './Footer';
import medica1 from '../imgs/medica_beatriz.png'
import { horarios } from '../helpers/options'

export default function Marcacao() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Marque sua consulta</h2>
      <div>
        <img src={medica1} alt='foto1'></img>
          <div>
            <h5>Dra. Beatriz Alves</h5>
            <p>Ginecologista</p>
            <p>CRM: 123456-SP</p>
          </div>
      </div>
      <p>Escolha um horário disponível</p>
      {
        horarios.map((horario, index) =>
          <button type='button' key={ index }>{horario}</button>)
      }
      <button type="button" onClick={ () => navigate('/confirmacao-consulta') }>Marcar Consulta</button>
      <Footer />
    </div>
  );
}