import React, { useState } from 'react';
import './styles_todolist.css';

const todolist = () => {
    
    const [Nombre, setNombre] = useState('');
    const [Edad, setEdad] = useState('');
    const [Carnet, setCarnet] = useState('');
    const [Estudiante = {Nombre, Edad, Carnet}, setEstudiante] = useState(null);

    const handleAgregarEstudiante = ( ) => {
        const Estudiante = { Nombre, Edad, Carnet };
        setEstudiante(Estudiante);
    }

    
    return (
        <>
<div className="container">
    <h1>Registro de Estudiantes</h1>
    <div className="form-container">
        <input type="text" placeholder="Nombre" className="input-field" onChange={(e) => setNombre(e.target.value)}/>
        <input type="number" placeholder="Edad" className="input-field" onChange={(e) => setEdad(e.target.value)}/>
        <input type="text" placeholder="Carnet" className="input-field" onChange={(e) => setCarnet(e.target.value)}/>
        <button className="add-button" onClick={handleAgregarEstudiante}>Agregar</button>
    </div>
    <h3>Listado:</h3>
    <div className="list-container">
        {Estudiante !== null && <p>{Estudiante.Nombre} | {Estudiante.Edad} | {Estudiante.Carnet}</p>}
    </div>
</div> </>
)
}

export default todolist;
