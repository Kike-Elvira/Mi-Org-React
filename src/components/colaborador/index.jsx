import "./colaborador.css"


const Colaborador = (props) =>{
    const {name,job,photo} = props.data;
    const {colorPrimario} = props;
    const styles = {
        colorPrimario: { backgroundColor: colorPrimario }
    }
    return <div className="colaborador" style={styles.colorPrimario}>
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