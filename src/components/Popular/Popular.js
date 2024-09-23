import React, { Component } from "react";
import { Link } from "react-router-dom";

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poster_path: props.poster_path,
            title: props.title,
            verDescripcion: false,
            botonDescripcion: "Ver más",
            overview: props.overview,
            detalleBoton: "Ir a detalle",
            id: props.id,
            esFavorito: false

        }
    }

    componentDidMount() {
        console.log('props', this.props)
        // Revisa el localStorage para ver si ya está en favoritos
        const storage = localStorage.getItem('categoriasFavs');
        if (storage) {
            const favoritosArray = JSON.parse(storage);
            if (favoritosArray.includes(this.state.id)) {
                this.setState({ esFavorito: true });
            }
        }
    }

    info = () => {
        // Usamos el valor actual del estado para alternar
        if (this.state.verDescripcion === false) {
            this.setState({
                verDescripcion: true,
                botonDescripcion: "Ver menos"
            });
        } else {
            this.setState({
                verDescripcion: false,
                botonDescripcion: "Ver más"
            });
        }
    }
    
    fav = () => {
        const { id, esFavorito } = this.state;
        const storage = localStorage.getItem('categoriasFavs');
        let favoritosArray = storage ? JSON.parse(storage) : [];

        if (esFavorito) {
            // Quitar de favoritos
            favoritosArray = favoritosArray.filter(favId => favId !== id);
            localStorage.setItem('categoriasFavs', JSON.stringify(favoritosArray));
            this.setState({ esFavorito: false });
        } else {
            // Agregar a favoritos
            favoritosArray.push(id);
            localStorage.setItem('categoriasFavs', JSON.stringify(favoritosArray));
            this.setState({ esFavorito: true });
        }
    }

    render() {
        
        return (
            <div className="personajebox">
            <Link to={`/Detalle/id/${this.state.id}`}>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.poster_path}`} alt=""/>
                <h4>{this.state.title}</h4>
                {this.state.verDescripcion== false ? null : <p>{this.state.overview}</p> }
            </Link>
                 {/* Botón para mostrar u ocultar descripción */}
                 <button onClick={this.info}>
                    {this.state.botonDescripcion}
                </button>

                {/* Botón para agregar o quitar de favoritos */}
                <button onClick={this.fav}>
                    {this.state.esFavorito ? "Sacar de favoritos" : "Agregar a favoritos"}
                </button>
                
            </div>
        )
}}

export default Popular;