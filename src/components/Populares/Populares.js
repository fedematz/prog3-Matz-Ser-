import React, {Component} from "react";
import Popular from "../Popular/Popular";
import MiComponenteControlado from "../MiComponenteControlado/MiComponenteControlado";
import "./style.css";
let api_key = "701b3103c42750c129f8fa4974fad18a";

class Populares extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            peliculasOriginales: [] 
        };
    }


    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('data', data)
                this.setState({
                    peliculas: data.results,
                    peliculasOriginales: data.results
                });
            })
            .catch((err) => console.log(err))
    } 

    filtrarPeliculas = (nombrePelicula) => {
        const peliculasFiltradas = this.state.peliculasOriginales.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase())
        );
    
        this.setState({
            peliculas: peliculasFiltradas
        });
    };

    render() {
        return (

            
            <div>
             
                <MiComponenteControlado filtrarPeliculas={this.filtrarPeliculas} />
                
                <section className="cardsbox">
                {this.state.peliculas.length > 0
                    ? this.state.peliculas.map((elm) => (
                        
                        <Popular
                            key={`${elm.id}-${elm.title}`}
                            id={elm.id}
                            poster_path={elm.poster_path}
                            title={elm.title}
                            overview={elm.overview}
                        />
                   
                    ))
                    : <h1>Cargando...</h1>
                }
                </section>
            </div>
        );
    }
}

export default Populares