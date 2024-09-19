import React, { Component } from "react";
import "../components/Peliculas/style.css";
let api_key = "701b3103c42750c129f8fa4974fad18a";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: [],
            loading: true
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
            .then((resp) => resp.json())
            .then((data) => {
                
                this.setState({
                    pelicula: data,
                    loading: false
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const loading = this.state.loading;
        return (
            <div className="detalle">
               {loading ? (
                    <div className="loading">
                        <img src="/img/giphy.png" alt="Cargando..." />
                    </div>
                ) : (  
   
                <div className="sectiondetalle">   
                <h1>Detalle de: {this.state.pelicula.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt="" />
                <p> Descripción: {this.state.pelicula.overview}</p>
                <p> Rating: {this.state.pelicula.vote_average} </p>
                <p> Fecha de estreno: {this.state.pelicula.release_date} </p>
                <p> Genero: {this.state.pelicula.genre_ids} </p>
                
            </div>
        )}
        </div>
    )}
}


export default Detalle;