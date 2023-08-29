import Colaborador from "../colaborador";
import "./equipo.css";
import hexToRgba from 'hex-to-rgba';





const Equipo = (props) => {

    // Destructuracion -- para sacar todo en constantes de una vez
    const { colorPrimario, colorSecundario, titulo, id } = props.data;
    const { colaboradores, eliminarColaborador, actualizarColor } = props
    const styles = {
        colorPrimario: { backgroundColor: hexToRgba(colorPrimario, 0.6)},
        subrayado: { borderColor: colorPrimario }
    }



    return <>
        {
            colaboradores.length > 0 && // si colaboradores > 0 se cumple retorna el section si no no lo retorna
            <section className="equipo" style={styles.colorPrimario}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) =>{
                        actualizarColor(e.target.value, id);
                    }}
                />
                <h3 style={styles.subrayado}>
                    {titulo}
                </h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            data={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}>
                        </Colaborador>)
                    }
                </div>
            </section>
        }
    </>
}


export default Equipo;