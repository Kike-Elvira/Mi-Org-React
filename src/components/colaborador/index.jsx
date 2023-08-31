import "./colaborador.css"
import {AiOutlineUserDelete,AiOutlineHeart,AiFillHeart } from "react-icons/ai"




const Colaborador = (props) => {
    const { name, job, photo,id,fav } = props.data;
    const { colorPrimario, eliminarColaborador, like} = props;
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
            {fav ? <AiFillHeart color="red" onClick={ () => {like(id)}}></AiFillHeart> : <AiOutlineHeart onClick={ () => {like(id)}}></AiOutlineHeart>}
           
        </div>
    </div>
}

export default Colaborador;