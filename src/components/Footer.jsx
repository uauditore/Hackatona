import React from 'react';
import calendario from '../imgs/calendario_verde.png'
import home from '../imgs/inicio_verde.png'
import especialists from '../imgs/coracao_verde.png'
import perfil from '../imgs/perfil_verde.png'
import chat from '../imgs/chat_verde.png'

export default function Footer() {
  return (
    <footer>
      <img src={home} alt="home" />
      <img src={especialists} alt="especialists" />
      <img src={calendario} alt="schedule" />
      <img src={perfil} alt="profile" />
      <img src={chat} alt="chat" />
    </footer>
  );
}
