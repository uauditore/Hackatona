import React from 'react';
import options from '../helpers/options';

export default function Categories() {
  const { fisica, mental, baby } = options;
  return (
    <div>
      <span>Saúde física</span>
      {
        fisica.map((category, index) =>
          <button type='button' key={ index }>{category}</button>)
      }
      <span>Saúde mental</span>
      {
        mental.map((category, index) =>
          <button type='button' key={ index }>{category}</button>)
      }
      <span>Saúde mãe e bebê</span>
      {
        baby.map((category, index) =>
          <button type='button' key={ index }>{category}</button>)
      }
    </div>
  );
}
