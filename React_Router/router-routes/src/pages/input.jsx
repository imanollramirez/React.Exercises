import React, { useState } from 'react';
import './styles.css'

const Input = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = ( ) => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado('Resultado' + suma)

        if(num1 === '' || num2 === '') {
            setResultado('Ingrese los números');
        }
    }

    const handledeRestar = ( ) => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado('Resultado:' + resta)

        if(num1 === '' || num2 === '') {
            setResultado('Ingrese los números');
        }
    }

    const handleMultiplicar = ( ) => {
        const multiplicar = parseFloat(num1) * parseFloat(num2);
        setResultado('Resultado:' + multiplicar)

        if(num1 === '' || num2 === '') {
            setResultado('Ingrese los números');
        }
    }

    const handleDividir = ( ) => {
        const dividir = parseFloat(num1) / parseFloat(num2);
        setResultado('Resultado:' + dividir)

        if(num1 === '' || num2 === '') {
            setResultado('Ingrese los números');
        }
    }

    //Investigación: Al asignar vacío a num1 y num2, el resultado se vuelve null, se limpian los campos y el resultado.
    const handleLimpiar = ( ) => {
        setNum1('');
        setNum2('');
        setResultado(null);
    }

    return(
        <div className='container-input'>
        <h1 className="title">Ingrese datos</h1>
		<input placeholder="Numéro 1" className="input" value={num1} type="number" onChange={(e) => setNum1(e.target.value)}/>
		<input placeholder="Número 2" className="input" value={num2} type="number" onChange={(e) => setNum2(e.target.value)}/><br />
        <button className='btn' onClick={handleSumar}>Sumar</button>
        <button className='btn' onClick={handledeRestar}>Restar</button>
        <button className='btn' onClick={handleMultiplicar}>Multiplicar</button>
        <button className='btn' onClick={handleDividir}>Dividir</button>
        <br />
        <button className='limpiar' onClick={handleLimpiar}>Limpiar</button>
        <h2 className="resultado">{resultado !== null && <p>{resultado}</p>} </h2>
        </div>
    )
};

export default Input;