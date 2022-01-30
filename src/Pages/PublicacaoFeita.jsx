import React from 'react'; 
import estrelas from '../imgs/estrelinhas_estrelao.png'
export default function PostFeito() {
  return (
    <div>
      <img src={estrelas} alt="ilustracao-estrelas" />
      <h2>Publicação feita!</h2>
      <span>Parabéns!<br>Você acumulou estrelas pela sua pergunta no fórum.</br></span>
      <h5>2 estrelas</h5>
      <button>Saldo de estrelas</button>
    </div>
  )
}