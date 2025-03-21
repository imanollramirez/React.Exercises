import './styles.css'

const Input = () => {
    return(
        <>
        <h1 className="title">Ingrese datos</h1>
		<input placeholder="Number1" className="input" name="text" type="text"/>
		<input placeholder="Number2" className="input" name="text" type="text"/><br />
        <button className='btn'>Calcular</button>
        </>
    )
};

export default Input;