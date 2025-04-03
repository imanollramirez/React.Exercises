import React, { useState } from 'react';
import './styles.css';

const Todolist = () => {
    
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carnet, setCarnet] = useState('');
    const [estudiante, setEstudiante] = useState([]); //It must be an empty array.

    const handleReset = () => {
        setCarnet('')
        setEdad('')
        setNombre('')
        setEstudiante([])
    }

    const handleAgregarEstudiante = () => {
                              //It's the ID, and is required as well.
        const newEstudiante = {id: Date.now() , nombre, edad, carnet };
        setEstudiante([...estudiante, newEstudiante ]);

        setCarnet('')
        setEdad('')
        setNombre('')
    }

    return (
        <>
            <div className="container">
                <h1>Registro de Estudiantes</h1>
                <div className="form-container">
                    <input type="text" placeholder="Nombre" value={nombre} className="input-field" onChange={(e) => setNombre(e.target.value)}/>
                    <input type="number" placeholder="Edad" value={edad} className="input-field" onChange={(e) => setEdad(e.target.value)}/>
                    <input type="text" placeholder="Carnet" value={carnet} className="input-field" onChange={(e) => setCarnet(e.target.value)}/>
                    <button className="add-button" onClick={handleAgregarEstudiante}>Agregar</button>
                    {estudiante.length > 0 && <button className="clear-button" onClick={handleReset}>Reiniciar</button>}
                </div>
                <h3>Listado:</h3>
                <div className="list-container">
                    {estudiante.length === 0 && <p>No hay datos</p>}
                    {
                        estudiante.map((dato) => (
                            <p key={dato.id}>{dato.nombre} | {dato.edad} | {dato.carnet}</p>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Todolist;
