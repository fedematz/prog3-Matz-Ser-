import React from "react";
import HeaderHijo from "../HeaderHijo/HeaderHijo";
import "./styles.css";

const opciones = [{
    nombre:"Home",
    ruta: "/"
},
{
    nombre:"Favoritos",
    ruta: "/favoritos"
},
{
    nombre:"Populares",
    ruta: "/Populares"
},
{
    nombre:"Mas valoradas",
    ruta: "/masValoradas"
}
]

function Header() {
    return (
        <nav>
            <ul className="main-nav">
                {opciones.map((elem) => <HeaderHijo dato={elem} />)}
            </ul>
            <ul className="user">
                <li><img src="./img/logo.png" alt="" /></li>
            </ul>
            
        </nav>
    )
}

export default Header;