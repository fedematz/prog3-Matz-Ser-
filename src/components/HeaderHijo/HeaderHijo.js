import React from "react";
import {Link} from "react-router-dom";

function HeaderHijo(props) {
    
    return (

        <li>
            <Link to={props.dato.ruta}>
            {props.dato.nombre}
            </Link>
        </li>

    )
}

export default HeaderHijo;