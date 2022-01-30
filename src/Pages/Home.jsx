import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='center-page'>
      <Header />
      <span>Categorias recentes</span>
      <h5>Psicologia</h5>
      <button type="button" onClick={ () => navigate('/categories') }>Ver todas Categorias</button>
      <h3>Consultas</h3>
      <div>
        
      </div>
      <h3>Forúm</h3>
      {
        'Vai ter outro algo aqui'
      }
      <Footer />
    </div>
  );
}
