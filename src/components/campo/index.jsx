
import "./campo.css"
const Campo = (props) => {

    // estamos guardando el valor del input en un estado llamado valor
    const manejarCambio = (e) => {
        props.setValue(e.target.value); // accedemos al evento y obtenemos el valor del campo de texto que tenga en ese momento o cuando sufra un cambio
    }
    
    const { type = "text" } = props; // si esta indefinido le asigna el valor text

    return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.value}
        onChange={manejarCambio}
        type={type}
        >
        </input>
    </div>
}

export default Campo;