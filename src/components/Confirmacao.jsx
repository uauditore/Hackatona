import React from 'react'; 
import consulta from '../imgs/ilustra_consulta.png'

export default function Confirmacao() {
  return (
    <div>
      <img src={consulta} alt="ilustracao-med" />
      <h2>Consulta marcada com sucesso!</h2>
      <span>Para ver todos os agendamentos acesse seu calendário</span>
      <button>Calendário de Consultas</button>
    </div>
  )
}