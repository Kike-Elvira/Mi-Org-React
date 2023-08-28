import Colaborador from "../colaborador";
import "./equipo.css";



const Equipo = (props) => {

    // Destructuracion -- para sacar todo en constantes de una vez
    const { colorPrimario, colorSecundario, titulo } = props.data;
    const { colaboradores } = props
    const styles = {
        colorSecundario: { backgroundColor: colorSecundario },
        subrayado: { borderColor: colorPrimario }
    }



    return <>
        {
            colaboradores.length > 0 && // si colaboradores > 0 se cumple retorna el ection si no no lo retorna
            <section className="equipo" style={styles.colorSecundario}>
                <h3 style={styles.subrayado}>
                    {titulo}
                </h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                        data={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}>
                        </Colaborador>)
                    }
                </div>
            </section>
        }
    </>
}


export default Equipo;