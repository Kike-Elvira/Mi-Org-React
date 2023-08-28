// import { useState } from "react";
import "./miorg.css"
const Miorg = (props) => {

    // Estado - hooks
    // useState const [variable,funcionactualizadora] = useState("estadoinicial")

/*    const [click,actualizarMostrar] = useState(true); // el estado de la variable click empieza como true
    const manejarClick = (e) =>{
        
       actualizarMostrar(!click); //negamos el estado del click 
        
    }
*/

    
    return <section className="orgSection">
        <h3 className="title">{props.titulo}</h3>
       
            <img src="img/Button-ADD.png" alt="ADD" onClick={props.cambiarMostrar}></img>
   
        
    </section>
}

export default Miorg;