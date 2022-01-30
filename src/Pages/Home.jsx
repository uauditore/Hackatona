import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';


export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <span>Categorias recentes</span>
      {
        'vai ter uma categoria aqui'
      }
      <button type="button" onClick={ () => navigate('/categories') }>Ver todas Categorias</button>
      <h3>Consultas</h3>
      {
        'Vai ter algo aqui que ainda não entrou'
      }
      <h3>Forúm</h3>
      {
        'Vai ter outro algo aqui'
      }
      <Footer />
    </div>
  );
}
