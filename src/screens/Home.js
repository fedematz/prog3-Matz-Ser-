import React from "react";
import Peliculas from "../components/Peliculas/Peliculas";
import Peliculas2 from "../components/Peliculas2/Peliculas2";
import Busqueda from "../components/Busqueda/Busqueda";
import "../components/Peliculas/style.css";
import {Link} from "react-router-dom";

function Home(props) {
    console.log('props home', props)
    return (
  
        <React.Fragment>
            
			<img className="banner" src="img/banner.png" alt="Banner de ofertas"/>
            
			
            
            <Busqueda location={props.location} history={props.history}/>

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