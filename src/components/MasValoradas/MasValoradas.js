import React, {Component} from "react";
import MasValorada from "../MasValorada/MasValorada";
import MiComponenteControlado from "../MiComponenteControlado/MiComponenteControlado";
import "./style.css";
let api_key = "701b3103c42750c129f8fa4974fad18a";


class masValoradas extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            peliculasOriginales:[],
            loading: true,
            paginaACargar:2
        };
    }


    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('data', data)
                this.setState({
                    peliculas: data.results,
                    peliculasOriginales:data.results,
                    loading: false
                })
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


    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${this.state.paginaACargar}`)
        .then(resp => resp.json())
        .then(data => this.setState({peliculas:this.state.peliculas.concat(data.results),
            peliculasOriginales:this.state.peliculas.concat(data.results),
            paginaACargar:this.state.paginaACargar + 1

        }))
        .catch(err => console.log(err))
    }

    render() {
        const loading = this.state.loading;
        return (
            <div>
             
                <MiComponenteControlado filtrarPeliculas={this.filtrarPeliculas} />
                
                <section className="cardsbox">

                {loading ? (
                    <div className="loading-container">
                        <h1>Cargando...</h1>
                        <img src="/img/giphy.png" alt="Cargando..." />
                    </div>
                ) : (

                this.state.peliculas.length > 0
                    ?  
                    <>
                        {this.state.peliculas.map((elm) => (
                
                        <MasValorada
                            key={`${elm.id}-${elm.title}`}
                            id={elm.id}
                            poster_path={elm.poster_path}
                            title={elm.title}
                            overview={elm.overview}
                        />
                   
                        ))
                        }
                    <button onClick={() => this.cargarMas()}>Cargar más</button>
                    </>

                 
                 : <img className="loading" src="/img/giphy.png" alt="Cargando..." />
                )
            }
                </section>
            </div>
        );
    }
}

export default masValoradas 