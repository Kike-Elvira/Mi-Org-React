import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./formulario.css"
import Campo from "../campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";
const Formulario = (props) => {
    const equipos = props.equipos;
    const {registrarColaborador,crearEquipo} = props
    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");
    const [titulo,setTitulo] = useState("");
    const [color,setColor] = useState("");

    const manejarEnvio = (e /* El e quiere decir Evento o Event */) => {
        e.preventDefault(); 
        let sendData ={
            name : nombre,
            job : puesto,
            photo: foto,
            team : equipo,
            id: uuidv4(),
            fav: false
        }

        registrarColaborador(sendData);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo( {titulo: titulo, colorPrimario: color});
    }
    return <section className={props.className}>
        <form onSubmit={manejarEnvio /* Asi se accede al evento del formulario al ser enviado y le decimos que ejecute nuesta funcion*/}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required value={nombre} setValue={setNombre}></Campo>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required value={puesto} setValue={setPuesto}></Campo>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required value={foto} setValue={setFoto}></Campo>
            <ListaOpciones equipos={equipos} placeholder="Seleccionar Equipo" value={equipo} setValue={setEquipo}></ListaOpciones>
            <Boton texto="Registrar Colaborador"></Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo /* Asi se accede al evento del formulario al ser enviado y le decimos que ejecute nuesta funcion*/}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar el titulo del equipo" required value={titulo} setValue={setTitulo}></Campo>
            <Campo titulo="Color" placeholder="Ingresa el color del equipo en hexadecimal" required value={color} setValue={setColor} type="color"></Campo>
            <Boton texto="Registrar Equipo"></Boton>
        </form>
    </section>
}

export default Formulario;