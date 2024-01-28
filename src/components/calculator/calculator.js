import React, { useState } from 'react';
import { CiCalculator1 } from "react-icons/ci";
import { PiClockClockwiseFill } from "react-icons/pi";
import './calculator.css'

const Calculator = () => {
  const [vataje, setVataje] = useState('');
  const [tiempoDeFuncionamiento, setTiempoDeFuncionamiento] = useState(null);

  const calcularTiempoDeFuncionamiento = () => {
    const vatajeNumerico = parseFloat(vataje);

    if (isNaN(vatajeNumerico) || vatajeNumerico <= 0 || vatajeNumerico > 1512) {
      alert('Ingresa un valor válido para el vataje (mayor que 0 y no superior a 1512).');
      return;
    }

    const resultado = Math.round((1512 / vatajeNumerico));

    setTiempoDeFuncionamiento(resultado);
  };

  return (
    <div>
      <div className='calculatorContainer'>
        <CiCalculator1 className='calculatorItem' onClick={calcularTiempoDeFuncionamiento}></CiCalculator1>

        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={vataje}
          onChange={(e) => setVataje(e.target.value)}
          className='calculatorInput'
        />
        <span className='calculatorUnit'>W</span>
      </div>
      <div>
        <PiClockClockwiseFill className='calculatorItem' />
        {tiempoDeFuncionamiento !== null && (
          <p>El tiempo de funcionamiento estimado es de {tiempoDeFuncionamiento} horas.</p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
