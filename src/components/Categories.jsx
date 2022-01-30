import React from 'react';
import { useNavigate } from 'react-router';
import options from '../helpers/options';

export default function Categories() {
  const { fisica, mental, baby } = options;
  const navigate = useNavigate();
  return (
    <div>
      <span>Saúde física</span>
      {
        fisica.map((category, index) =>
          <button
            type='button'
            key={ index }
            onClick={ ()  => navigate('/especialistas')}
          >
            {category}
          </button>)
      }
      <span>Saúde mental</span>
      {
        mental.map((category, index) =>
          <button
            type='button'
            key={ index }
            onClick={ ()  => navigate('/especialistas')}
          >
            {category}
          </button>)
      }
      <span>Saúde mãe e bebê</span>
      {
        baby.map((category, index) =>
          <button
            type='button'
            key={ index }
            onClick={ ()  => navigate('/especialistas')}
          >
            {category}
          </button>)
      }
    </div>
  );
}
