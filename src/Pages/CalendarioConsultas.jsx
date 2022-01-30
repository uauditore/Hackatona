import React from 'react';
import medica1 from '../imgs/medica_beatriz.png'
import medica2 from '../imgs/fot0_psicologa.png'
import Footer from '../components/Footer';

export default function Calendario () {
  return (
    <div>
      <h2>Calendário de Consultas</h2>
      <div>
        <button>Próximas</button>
        <button>Finalizadas</button>
        <div>
          <img src={medica1} alt='foto1'></img>
          <div>
            <h5>Dra. Beatriz Alves</h5>
            <p>Ginecologista</p>
            <p>CRM: 123456-SP</p>
            <p>13/02<br>11h40</br>
            </p>
            <button>Iniciar consulta</button>
            <p>Não poderá comparecer?</p>
          </div>
        </div>
        <div>
          <img src={medica2} alt='foto2'></img>
          <div>
            <h5>Psi. Paula Costa</h5>
            <p>Psicológa</p>
            <p>CRP: 12/3456</p>
            <p>15/02<br>10h20</br></p>
            <button>Iniciar consulta</button>
            <p>Não poderá comparecer?</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
