import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {
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
            id: props.id,
            esFavorito: false

        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('categoriasFavs')
        if(storage !== null){
            let arrParseado = JSON.parse(storage)
            let estaMiId = arrParseado.includes(this.state.id)
            if(estaMiId){
                this.setState({
                    esFavorito: true
                })
            }
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

    agregarAStorage(id){
        let storage = localStorage.getItem('categoriasFavs')
        if(storage !== null){
            let storageParseado = JSON.parse(storage)
            storageParseado.push(id)
            let storageStringificado = JSON.stringify(storageParseado)
            localStorage.setItem('categoriasFavs', storageStringificado)
        } else {
            let arrFavs = [id]
            let favsStringificado = JSON.stringify(arrFavs)
            localStorage.setItem('categoriasFavs', favsStringificado)
        }

        this.setState({
            esFavorito: true
        })
    }


    render() {
        const id = this.state.id
        return (
            
            <div className="personajebox">
                 <Link to={`/Detalle/id/${this.state.id}`}>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.poster_path}`} alt=""/>
                <h4>{this.state.title}</h4>
                {this.state.verDescripcion== false ? null : <p>{this.state.overview}</p> }
                </Link>
                <button onClick={() => this.info()}> {this.state.botonDescripcion} </button>
                {
                this.state.esFavorito ?
                <button>
                    Sacar de favoritos
                </button>
                :
                <button onClick={() => this.agregarAStorage(this.state.id) }>
                    Agregar a favoritos 
                </button>
            }
                
            </div>
        )
}}

export default Pelicula;