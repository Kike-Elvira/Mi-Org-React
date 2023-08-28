import "./listaOpciones.css";
const ListaOpciones = (props) => {
    
    //const { equipo } = props.
    const equipo = props.equipos;
    
    const manejarCambio = (e) =>{
        props.setValue(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.value} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>{props.placeholder}</option>
           {equipo.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;