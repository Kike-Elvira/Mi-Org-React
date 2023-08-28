
import "./campoTexto.css"
const CampoTexto = (props) => {

    // estamos guardando el valor del input en un estado llamado valor
    const manejarCambio = (e) => {
        props.setValue(e.target.value); // accedemos al evento y obtenemos el valor del campo de texto que tenga en ese momento o cuando sufra un cambio
    }
    

    return <div className="campo-texto"> 
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.value}
        onChange={manejarCambio}
        >
        </input>
    </div>
}

export default CampoTexto;