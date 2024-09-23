import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import Popular from "../Popular/Popular"
import "./style.css";
let api_key = "701b3103c42750c129f8fa4974fad18a";

class Favoritoscomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelisBien: [], // Almacenará las películas favoritas.
        };
    }

    componentDidMount() {
        console.log("Componente montado");
        const storage = localStorage.getItem("categoriasFavs");

        if (storage) {
            const Favoritos = JSON.parse(storage);

            Favoritos.map((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${api_key}`)
                    .then((resp) => resp.json())
                    .then((data) => {
                        // Agregamos cada película al array en el estado
                        const newPelisBien = this.state.pelisBien; // Usamos el estado actual
                        newPelisBien.push(data); // Agregamos la nueva película
                        this.setState({ pelisBien: newPelisBien }); // Actualizamos el estado
                    })
                    .catch((e) => console.log(e));
            });
        }
    }

    render() {
        const { pelisBien } = this.state;

        return (
            <>
                <h1 className="Subtitulos">Tus favoritas:</h1>
                <div className="cardsbox">
                    {pelisBien.length > 0 ? (
                        pelisBien.map((elem) => (
                            <Pelicula
                                key={elem.id}
                                poster_path={elem.poster_path}
                                title={elem.title}
                                id={elem.id}
                                mostrarDetalle={true}
                                mostrarDescripcion={true}
                            />
                        ))
                    ) : (
                        <p>No tienes películas favoritas aún.</p>
                    )}
                </div>
            </>
        );
    }
}

export default Favoritoscomponent;
