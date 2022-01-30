import React from 'react';
import fotoPerfil from '../imgs/videochamada_paciente.png'
import estrelinha from '../imgs/estrela_vazada.png'
import Footer from '../components/Footer';

export default function Perfil () {
  return (
    <div>
      <img src={fotoPerfil} alt='fotoDePerfil' />
      <h2>Suzana Gonçalves</h2>
      <div>
        <img src={estrelinha} alt='estrelinha'></img>
        <span>Nível atual: 4</span>
      </div>
      <div>
        <h5>Dados Pessoais</h5>
        <h5>Dados Cadastrais</h5>
        <h5>Configurações</h5>
        <h5>Precisa de ajuda?</h5>
        <h5>Sobre o Aplicativo</h5>
        <span>Sair da conta</span>
      </div>
      <Footer />
    </div>
  )
}