import { useState } from 'react';
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
  // Ternario --> condicion ? seMuestra : noSemuestra
  // CortoCircuito condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    //Spread operator es decir copiamos el arreglo original y le agregamos un nuevo elemento
    actualizarColaboladores([...colaboradores,colaborador]);
    const dataJSON = JSON.stringify(colaborador); // mandandolo todo en forma de JSON
    localStorage.setItem(Math.floor(Math.random() * 101)+colaborador.name, dataJSON); // mandando el item al local Storage
  }
  // Lista Equipos
  const equipos = [

    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y  Gestión",
      colorPrimario: "##FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ]

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

      <Miorg cambiarMostrar={cambiarMostrar} titulo="Mi organización"></Miorg>

      {equipos.map( (equipo) => <Equipo 
      data={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.team === equipo.titulo)}
      > 
      </Equipo>)}
      <Footer> </Footer>
    </div>
  );
}

export default App;
