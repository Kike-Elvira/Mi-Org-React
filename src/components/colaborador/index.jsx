import "./colaborador.css"
import {AiOutlineUserDelete } from "react-icons/ai"


const Colaborador = (props) => {
    const { name, job, photo,id } = props.data;
    const { colorPrimario, eliminarColaborador } = props;
    const styles = {
        colorPrimario: { backgroundColor: colorPrimario }
    }

    
    return <div className="colaborador" style={styles.colorPrimario}>
        <AiOutlineUserDelete className="eliminar" onClick={() => {eliminarColaborador(id)}}/>
        <div className="encabezado">
            <img src={photo} alt={name}></img>
        </div>
        <div className="info">
            <h4>
                {name}
            </h4>
            <h5>
                {job}
            </h5>
        </div>
    </div>
}

export default Colaborador;