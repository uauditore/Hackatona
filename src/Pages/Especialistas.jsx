import React from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';
import medica1 from '../imgs/medica_beatriz.png'
import medica2 from '../imgs/medica_roberta.png'
import medica3 from '../imgs/medica_juliana.png'

export default function Especialistas() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Ginecologia</h2>
      <h5>Como anda a sua saúde Ginecológica?</h5>
      <p>Escolha a especialidade para marcar a consulta</p>
      <h4>Especialistas</h4>
      <div>
        <button type="button" onClick={ () => navigate('/marcacao') }>
        <img src={medica1} alt='foto1'></img>
          <div>
            <h5>Dra. Beatriz Alves</h5>
            <p>Ginecologista</p>
            <p>CRM: 123456-SP</p>
          </div>
        </button>
      </div>
      <div>
        <button type="button" onClick={ () => navigate('/marcacao') }>
        <img src={medica2} alt='foto2'></img>
          <div>
            <h5>Dra. Roberta Soares</h5>
            <p>Ginecologista</p>
            <p>CRM: 123456-SP</p>
          </div>
        </button>
      </div>
      <div>
        <button type="button" onClick={ () => navigate('/marcacao') }>
        <img src={medica3} alt='foto3'></img>
          <div>
            <h5>Dra. Juliana Rocha</h5>
            <p>Ginecologista</p>
            <p>CRM: 123456-SP</p>
          </div>
        </button>
      </div>
      <Footer />
    </div>
  );
}
