import React from "react";
import Peliculas from "../components/Peliculas/Peliculas";
import Peliculas2 from "../components/Peliculas2/Peliculas2";
import NavBar from "../components/NavBar/NavBar";
import {Link} from "react-router-dom";

function Home() {
    return (
  
        <React.Fragment>

            <h1>Películas mas populares</h1>
            <main>
                
                <Peliculas/>
                <Link to="/Populares" > <button>Ver más películas populares</button></Link>
            </main>
            <h1>Películas mas valoradas</h1>
            <main>
                <Peliculas2/>
                <Link to="/masValoradas" ><button>Ver más películas valoradas</button></Link>
            </main>
                
        </React.Fragment>
        
            
    )
}

export default Home