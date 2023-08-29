import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/header';
import Formulario from './components/formulario';
import Miorg from './components/miorg';
import Equipo from './components/equipo';
import Footer from './components/footer';



function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const keys = Object.keys(localStorage);
// Volviendolo el JSON a JS 
const dataArray = keys.map(key => JSON.parse(localStorage.getItem(key))); //y luego Covirtiendo el Objeto JS a Array
  const [colaboradores,actualizarColaboladores] = useState(dataArray);  // dateArray solo es mi estado inicial, colaboradores es que el esta guardando en realidad la lista de colaboradores
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "##FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])
  
  // Ternario --> condicion ? seMuestra : noSemuestra
  // CortoCircuito condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    //Spread operator es decir copiamos el arreglo original y le agregamos un nuevo elemento
    actualizarColaboladores([...colaboradores,colaborador]);
    const dataJSON = JSON.stringify(colaborador); // mandandolo todo en forma de JSON
    localStorage.setItem(colaborador.id, dataJSON); // mandando el item al local Storage
  }

  const eliminarColaborador = (id) => {
    console.log("eliminado", id);
    const nuevosColaboradores =  colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboladores(nuevosColaboradores);
  }

  const actualizarColor = (color,id) => {
    console.log(color,id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    })

    actualizarEquipos(equiposActualizados);
  }


  return (
    <div>
      <Header></Header>

      {mostrarFormulario ? <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador} 
      className="formulario-no"></Formulario> : 
      <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador} 
      className="formulario"></Formulario>}

      {/*{mostrarFormulario && <Formulario></Formulario>}*/}

      <Miorg cambiarMostrar={cambiarMostrar} id="Mi organización"></Miorg>

      {equipos.map( (equipo) => <Equipo 
      data={equipo} 
      key={equipo.id}
      colaboradores={colaboradores.filter(colaborador => colaborador.team === equipo.titulo)}
      eliminarColaborador = {eliminarColaborador}
      actualizarColor = {actualizarColor}
      > 
      </Equipo>)}
      <Footer> </Footer>
    </div>
  );
}

export default App;
