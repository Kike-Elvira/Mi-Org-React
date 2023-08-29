import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./formulario.css"
import CampoTexto from "../campoTexto";
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";
const Formulario = (props) => {
    const equipos = props.equipos;
    const registrarColaborador = props.registrarColaborador;
    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");

    const manejarEnvio = (e /* El e quiere decir Evento o Event */) => {
        e.preventDefault(); 
        let sendData ={
            name : nombre,
            job : puesto,
            photo: foto,
            team : equipo,
            id: uuidv4()
        }

        registrarColaborador(sendData);
    }
    return <section className={props.className}>
        <form onSubmit={manejarEnvio /* Asi se accede al evento del formulario al ser enviado y le decimos que ejecute nuesta funcion*/}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required value={nombre} setValue={setNombre}></CampoTexto>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required value={puesto} setValue={setPuesto}></CampoTexto>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required value={foto} setValue={setFoto}></CampoTexto>
            <ListaOpciones equipos={equipos} placeholder="Seleccionar Equipo" value={equipo} setValue={setEquipo}></ListaOpciones>
            <Boton texto="Crear"></Boton>
        </form>
    </section>
}

export default Formulario;