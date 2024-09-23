import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poster_path: props.poster_path,
            title: props.title,
            verDescripcion: false,
            botonDescripcion: "Ver más",
            overview: props.overview,
            detalleBoton: "Ir a detalle",
            id: props.id,
            esFavorito: false, // Inicialmente asumimos que no está en favoritos
        };
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

    // Método para alternar entre mostrar y ocultar descripción
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

    // Método para agregar o quitar de favoritos
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
        const { poster_path, title, overview, verDescripcion, botonDescripcion, esFavorito } = this.state;

        return (
            <div className="personajebox">
                <Link to={`/Detalle/id/${this.state.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
                    <h4>{title}</h4>
                    {verDescripcion && <p>{overview}</p>}
                    
                </Link>
                
                {/* Botón para mostrar u ocultar descripción */}
                <button onClick={this.info}>
                    {botonDescripcion}
                </button>

                {/* Botón para agregar o quitar de favoritos */}
                <button onClick={this.fav}>
                    {esFavorito ? "Sacar de favoritos" : "Agregar a favoritos"}
                </button>
            </div>
        );
    }
}

export default Pelicula;
