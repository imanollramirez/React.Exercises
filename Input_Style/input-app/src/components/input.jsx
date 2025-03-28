import React, { useState } from 'react';
import './styles.css'

const Input = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = ( ) => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma)
    }

    return(
        <>
        <h1 className="title">Ingrese datos</h1>
		<input placeholder="Number1" className="input" value={num1} type="number" onChange={(e) => setNum1(e.target.value)}/>
		<input placeholder="Number2" className="input" value={num2} type="number" onChange={(e) => setNum2(e.target.value)}/><br />
        <button className='btn' onClick={handleSumar}>Sumar</button>
        <h2 className="resultado">Resultado: {resultado !== null && <p>Resultado: {resultado}</p>} </h2>
        </>
    )
};

export default Input;