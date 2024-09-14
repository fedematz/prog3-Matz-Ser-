import React, { Component } from "react";

class Pelicula2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poster_path: props.poster_path,
            title: props.title,
            verDescripcion: false,
            botonDescripcion: "Ver más",
            overview: props.overview,
            detalleBoton: "Ir a detalle",
            favoritos: false,
            favoritosBoton: "Agregar a favoritos", 
            id: props.id

        }
    }

    info() {
        this.state.verDescripcion == false ? this.setState({
            verDescripcion: true,
            botonDescripcion: "Ver menos"
        }) : this.setState({
            verDescripcion: false,
            botonDescripcion: "Ver mas"
        })
    }

    fav() {
        this.state.favoritos == false ? this.setState({
            favoritos: true,
            favoritosBoton: "Quitar de favoritos"
        }) : this.setState({
            favoritos: false,
            favoritosBoton: "Agregar a favoritos"
        })
    }

    render() {
        return (
            <div className="personajebox">
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.poster_path}`} alt=""/>
                <h4>{this.state.title}</h4>
                {this.state.verDescripcion== false ? null : <p>{this.state.overview}</p> }
                <button onClick={() => this.info()}> {this.state.botonDescripcion} </button>
                <button onClick={() => this.fav()}> {this.state.favoritosBoton} </button>
                
            </div>
        )
}}

export default Pelicula2;